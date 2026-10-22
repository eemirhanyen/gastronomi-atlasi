#!/usr/bin/env python3
"""
Küre için ülke sınırları: Natural Earth 1:50m (kamu malı) -> data/countries.geojson

- Kimlik: ADM0_A3 (110m sürümüyle aynı); KOS->XKX, SDS->SSD, PSX->PSE düzeltmeleri
- Hafif Douglas-Peucker sadeleştirme + koordinat yuvarlama (dosya boyutu için)
- Küçük adalar korunur (Kanarya, Madeira, Maldivler, Karayipler …)
Kullanım: python scripts/build_geo.py [yerel_ne_50m.geojson]
"""
import json
import os
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "data", "countries.geojson")
SRC = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson"
FIX = {"KOS": "XKX", "SDS": "SSD", "PSX": "PSE"}
TOL = float(os.environ.get("GEO_TOL", "0.02"))   # derece; ~2 km
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
        if iso in base:
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
    json.dump({"type": "FeatureCollection", "features": feats}, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    print(f"{len(feats)} ülke/bölge, nokta {n_in} -> {n_out}, dosya {os.path.getsize(OUT) // 1024} KB")


if __name__ == "__main__":
    main()
