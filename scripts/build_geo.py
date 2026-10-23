#!/usr/bin/env python3
"""
Küre için ülke sınırları: Natural Earth 1:50m (kamu malı) -> data/countries.geojson

- Kimlik: ADM0_A3 (110m sürümüyle aynı); KOS->XKX, SDS->SSD, PSX->PSE düzeltmeleri
- Hafif Douglas-Peucker sadeleştirme + koordinat yuvarlama (dosya boyutu için)
- Küçük adalar korunur (Kanarya, Madeira, Maldivler, Karayipler …)
Kullanım: python scripts/build_geo.py [yerel_ne_50m.geojson]
"""
import json
import math
import os
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "data", "countries.geojson")
SRC = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson"
FIX = {"KOS": "XKX", "SDS": "SSD", "PSX": "PSE"}
# Tanınmış ülke sınırları içinde gösterilecek bölgeler: kaynak -> ülke (geometri birleştirilir, iç sınır çizilmez)
MERGE = {"SOL": "SOM"}
TOL = float(os.environ.get("GEO_TOL", "0.02"))   # derece; ~2 km
# GEO_HI=1: yakınlaşınca yüklenen tam ayrıntılı sürüm (data/countries_hi.geojson)
HI = os.environ.get("GEO_HI") == "1"
if HI:
    OUT = os.path.join(ROOT, "data", "countries_hi.geojson")
DIGITS = 3


def rdp(pts, tol):
    if len(pts) < 5:
        return pts
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    t2 = tol * tol
    while stack:
        a, b = stack.pop()
        ax, ay = pts[a]
        bx, by = pts[b]
        dx, dy = bx - ax, by - ay
        L = dx * dx + dy * dy
        best, bi = -1.0, -1
        for i in range(a + 1, b):
            px, py = pts[i]
            if L == 0:
                d = (px - ax) ** 2 + (py - ay) ** 2
            else:
                t = max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / L))
                d = (px - ax - t * dx) ** 2 + (py - ay - t * dy) ** 2
            if d > best:
                best, bi = d, i
        if best > t2:
            keep[bi] = True
            stack += [(a, bi), (bi, b)]
    return [p for p, k in zip(pts, keep) if k]


def ring(r):
    r2 = rdp(r, TOL)
    if len(r2) < 4:          # küçük ada: sadeleştirme yok etmesin
        r2 = r if len(r) <= 12 else r[:: max(1, len(r) // 8)] + [r[0]]
    out = []
    for x, y in r2:
        p = [round(x, DIGITS), round(y, DIGITS)]
        if not out or out[-1] != p:
            out.append(p)
    if out[0] != out[-1]:
        out.append(out[0])
    return out if len(out) >= 4 else None


def poly(p):
    rs = [ring(r) for r in p]
    if not rs or rs[0] is None:
        return None
    return [rs[0]] + [r for r in rs[1:] if r]


def area(r):
    return abs(sum(r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1] for i in range(len(r) - 1))) / 2


def bbox(r):
    xs, ys = [p[0] for p in r], [p[1] for p in r]
    return min(xs), min(ys), max(xs), max(ys)


def near(b, boxes, pad=0.3):
    return any(b[0] < q[2] + pad and b[2] > q[0] - pad and b[1] < q[3] + pad and b[3] > q[1] - pad for q in boxes)


def merge(feats):
    from shapely.geometry import mapping, shape
    from shapely.ops import unary_union
    by = {f["properties"]["iso"]: f for f in feats}
    for src, dst in MERGE.items():
        a, b = by.get(src), by.get(dst)
        if not a or not b:
            continue
        u = unary_union([shape(a["geometry"]).buffer(0), shape(b["geometry"]).buffer(0)])
        u = u.buffer(0.0005).buffer(-0.0005)        # birleşim çizgisindeki kıl payı boşlukları kapat
        g = mapping(u)

        def rnd(c):
            return [rnd(x) for x in c] if isinstance(c[0], (list, tuple)) else [round(c[0], DIGITS), round(c[1], DIGITS)]
        b["geometry"] = {"type": g["type"], "coordinates": rnd(g["coordinates"])}
        feats.remove(a)
        print(f"birleştirildi: {src} -> {dst} ({g['type']})")
    return feats


# ---------------------------------------------------------------- dolgu parçaları (yırtılma önlemi)
# globe.gl (three-conic-polygon-geometry) en kısa kenarı CAP_RES derece ve üzerindeki çokgenleri sınır noktaları + iç ızgara
# üzerinde kısıtsız Delaunay ile üçgenler ve ağırlık merkezi dışarıda kalan kenar üçgenlerini atar. Fiyortlu kıyılarda bu,
# ülkenin içine uzanan koyu kamalar (yırtık) bırakır. Çözüm: dolgu ayrı bir geometri ("cap") olarak verilir:
#  - kıyıya/sınıra değen hücreler TILE derecelik parçalara bölünür (kısa kenar < CAP_RES -> kütüphane kesin earcut kullanır)
#  - tamamen içeride kalan hücreler büyük dikdörtgenlerde birleştirilir (dışbükey -> Delaunay yolu hatasız)
#  - tüm parça kenarları ızgara noktalarından geçer, bu yüzden komşu parçalar aynı köşeleri paylaşır (çatlak yok)
# Sınır çizgisi özgün geometriden çizilir (uygulama dolgu parçalarına çizgi çizmez).
TILE = 4.0
CAP_RES = 5.0


def tiled(coords):
    from shapely.geometry import Polygon, box
    from shapely.geometry.polygon import orient
    ext = coords[0]
    xs, ys = [c[0] for c in ext], [c[1] for c in ext]
    if min(max(xs) - min(xs), max(ys) - min(ys)) < CAP_RES - 0.5:
        return [coords]
    sh = Polygon(ext, coords[1:]).buffer(0)
    x0, y0 = math.floor(min(xs) / TILE) * TILE, math.floor(min(ys) / TILE) * TILE
    nx, ny = int(math.ceil((max(xs) - x0) / TILE)), int(math.ceil((max(ys) - y0) / TILE))
    full, pieces = set(), []
    for i in range(nx):
        for j in range(ny):
            cell = box(x0 + i * TILE, y0 + j * TILE, x0 + (i + 1) * TILE, y0 + (j + 1) * TILE)
            if sh.contains(cell):
                full.add((i, j)); continue
            part = sh.intersection(cell)
            for g in getattr(part, "geoms", [part]):
                if g.geom_type == "Polygon" and g.area > 1e-7:
                    pieces.append([list(g.exterior.coords)] + [list(r.coords) for r in g.interiors])
                elif g.geom_type == "MultiPolygon":
                    pieces += [[list(q.exterior.coords)] + [list(r.coords) for r in q.interiors] for q in g.geoms if q.area > 1e-7]
    # tam hücreleri dikdörtgenlerde birleştir: önce satır boyunca, sonra aynı genişlikteki satırları üst üste
    used = set()
    for j in range(ny):
        for i in range(nx):
            if (i, j) not in full or (i, j) in used:
                continue
            w = 1
            while (i + w, j) in full and (i + w, j) not in used:
                w += 1
            h = 1
            while all((i + k, j + h) in full and (i + k, j + h) not in used for k in range(w)):
                h += 1
            # İki kenarı da >= 2 hücre (8°) olmalı: kısa kenarı CAP_RES'in altında kalan uzun şeritleri kütüphane iç noktasız
            # üçgenler; uzun üçgenler kürenin eğrisini izlemez ve yüzeyin altına gömülür (koyu mercek şekilleri). Öyleyse tek hücre.
            if w < 2 or h < 2:
                w = h = 1
            for a in range(w):
                for b in range(h):
                    used.add((i + a, j + b))
            xa, ya, xb, yb = x0 + i * TILE, y0 + j * TILE, x0 + (i + w) * TILE, y0 + (j + h) * TILE
            # kenarlar her ızgara noktasından geçer (komşu parçalarla ortak köşe; kütüphane ek ara nokta eklemez)
            ring = [[xa + k * TILE, ya] for k in range(w)] + [[xb, ya + k * TILE] for k in range(h)] + \
                   [[xb - k * TILE, yb] for k in range(w)] + [[xa, yb - k * TILE] for k in range(h)] + [[xa, ya]]
            pieces.append([ring])
    # d3-geo (globe.gl) halkanın yönüne bakar: dış halka saat yönünde, delikler tersine olmalı (Natural Earth ile aynı).
    # Ters yöndeki halka "dünyanın geri kalanı" sayılır ve tüm küreyi boyar. shapely saat yönünün tersini üretir.
    out = []
    for pc in pieces:
        g = orient(Polygon(pc[0], pc[1:]), sign=-1.0)
        out.append([list(g.exterior.coords)] + [list(r.coords) for r in g.interiors])
    return out


def add_caps(feats):
    n = 0
    for f in feats:
        if f["properties"]["iso"] == "ATA":
            continue
        gm = f["geometry"]
        polys = [gm["coordinates"]] if gm["type"] == "Polygon" else gm["coordinates"]
        out, split = [], False
        for pl in polys:
            t = tiled(pl)
            split = split or t is not None and (len(t) != 1 or t[0] is not pl)
            out += t
        if split:
            out = [[[[round(x, DIGITS), round(y, DIGITS)] for x, y in r] for r in pl] for pl in out]
            f["cap"] = {"type": "MultiPolygon", "coordinates": out}
            n += len(out)
    print(f"dolgu parçaları: {sum(1 for f in feats if 'cap' in f)} ülke, {n} parça")
    return feats


def main():
    if len(sys.argv) > 1:
        g = json.load(open(sys.argv[1], encoding="utf-8"))
    else:
        with urllib.request.urlopen(SRC, timeout=120) as r:
            g = json.loads(r.read())
    # Hız için karma geometri: 110m'de olan ülkelerde 110m ana hatları kullanılır, 50m'den yalnızca
    # 110m'de olmayan uzak adalar eklenir; 110m'de hiç olmayan ülkeler 50m'den gelir.
    base = {}
    b110 = os.path.join(ROOT, "data", "ne_110m_countries.geojson")
    for f in json.load(open(b110, encoding="utf-8"))["features"]:
        gm = f["geometry"]
        base[f["properties"]["iso"]] = [gm["coordinates"]] if gm["type"] == "Polygon" else gm["coordinates"]
    feats, n_in, n_out = [], 0, 0
    for f in g["features"]:
        p = f["properties"]
        iso = FIX.get(p["ADM0_A3"], p["ADM0_A3"])
        geom = f["geometry"]
        polys = [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]
        n_in += sum(len(r) for pl in polys for r in pl)
        polys = [q for q in (poly(pl) for pl in polys) if q]
        if iso in base and not HI:
            boxes = [bbox(pl[0]) for pl in base[iso]]
            extra = [pl for pl in polys if area(pl[0]) >= 0.01 and not near(bbox(pl[0]), boxes)]
            polys = [[[[round(x, DIGITS), round(y, DIGITS)] for x, y in r] for r in pl] for pl in base[iso]] + extra
        if not polys:
            continue
        n_out += sum(len(r) for pl in polys for r in pl)
        iso2 = p.get("ISO_A2_EH") if p.get("ISO_A2_EH") not in (None, "-99") else p.get("ISO_A2")
        feats.append({"type": "Feature",
                      "properties": {"iso": iso, "name": p["NAME"], "lx": round(p["LABEL_X"], 2), "ly": round(p["LABEL_Y"], 2),
                                     "rank": p.get("LABELRANK") or 9, "iso2": None if iso2 in (None, "-99") else iso2},
                      "geometry": {"type": "MultiPolygon", "coordinates": polys} if len(polys) > 1 else {"type": "Polygon", "coordinates": polys[0]}})
    feats = add_caps(merge(feats))
    json.dump({"type": "FeatureCollection", "features": feats}, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    print(f"{len(feats)} ülke/bölge, nokta {n_in} -> {n_out}, dosya {os.path.getsize(OUT) // 1024} KB")


if __name__ == "__main__":
    main()
