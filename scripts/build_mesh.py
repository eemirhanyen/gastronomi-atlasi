"""Ülke yüzeylerini önceden üçgenlere böler: data/mesh_lo.bin, data/mesh_hi.bin.

Neden: küre kütüphanesi (globe.gl) her ülke parçası için ayrı nesne üretiyordu; bir karede ~4.100 çizim komutu
gidiyor, sitenin fps darboğazı buydu. Artık tüm ülke yüzeyleri tek bir ağ (mesh) olarak çizilir (app.js: LAND).

Yöntem: her ülke 3°x3° boylam/enlem hücrelerine kırpılır, her parça earcut ile üçgenlenir. Küçük hücre şart:
düz üçgen küreye izdüşürüldüğünde kirişi yüzeyin altına sarkar (3°'de en çok ~0.07 birim; ülke yüzeyi
küreden 0.5 birim yukarıda, okyanusa gömülmez). Büyük üçgen bırakılırsa ülke içinde "yırtık" görünür.

Biçim (little-endian):
  uint32 ülke sayısı N
  N x { 4 bayt ISO (3 harf + boşluk), uint32 köşe sayısı, uint32 indeks sayısı }
  float32 köşeler (boylam, enlem) art arda, tüm ülkeler
  uint32 indeksler (her ülkenin kendi köşelerine göre, 0'dan)

Kullanım: python3 scripts/build_mesh.py   (build_geo.py'den sonra)
"""
import json
import struct
import sys
from pathlib import Path

import mapbox_earcut as earcut
import numpy as np
from shapely.geometry import box, shape
from shapely.geometry.polygon import orient
from shapely.validation import make_valid

ROOT = Path(__file__).resolve().parent.parent
CELL = 3.0


def polys_of(g):
    if g.is_empty:
        return []
    if g.geom_type == "Polygon":
        return [g]
    if g.geom_type in ("MultiPolygon", "GeometryCollection"):
        out = []
        for p in g.geoms:
            out += polys_of(p)
        return out
    return []


def mesh_feature(geom):
    g = make_valid(shape(geom))
    minx, miny, maxx, maxy = g.bounds
    verts, index, idx = [], [], {}

    def vid(x, y):
        k = (round(x, 4), round(y, 4))
        i = idx.get(k)
        if i is None:
            i = idx[k] = len(verts)
            verts.append(k)
        return i

    x0 = np.floor(minx / CELL) * CELL
    y0 = np.floor(miny / CELL) * CELL
    x = x0
    while x < maxx:
        y = y0
        while y < maxy:
            cell = box(x, y, min(x + CELL, 180), min(y + CELL, 90))
            piece = g.intersection(cell)
            for p in polys_of(piece):
                if p.area < 1e-9:
                    continue
                p = orient(p, 1.0)
                rings = [list(p.exterior.coords)[:-1]] + [list(r.coords)[:-1] for r in p.interiors]
                pts, ends = [], []
                for r in rings:
                    pts += r
                    ends.append(len(pts))
                if len(pts) < 3:
                    continue
                tri = earcut.triangulate_float64(np.array(pts, dtype=np.float64), np.array(ends, dtype=np.uint32))
                ids = [vid(*pts[t]) for t in tri]
                for k in range(0, len(ids), 3):
                    a, b, c = ids[k:k + 3]
                    if a != b and b != c and a != c:
                        index += [a, b, c]
            y += CELL
        x += CELL
    return verts, index


def build(src, dst):
    feats = json.load(open(src, encoding="utf-8"))["features"]
    head, vbuf, ibuf, nv, ni = [], [], [], 0, 0
    for f in feats:
        v, i = mesh_feature(f["geometry"])
        iso = f["properties"]["iso"]
        head.append((iso, len(v), len(i)))
        vbuf.append(np.array(v, dtype=np.float32).reshape(-1))
        ibuf.append(np.array(i, dtype=np.uint32))
        nv += len(v)
        ni += len(i)
    with open(dst, "wb") as out:
        out.write(struct.pack("<I", len(head)))
        for iso, a, b in head:
            out.write(iso.ljust(4)[:4].encode("ascii"))
            out.write(struct.pack("<II", a, b))
        for a in vbuf:
            out.write(a.tobytes())
        for a in ibuf:
            out.write(a.tobytes())
    print(f"{dst.name}: {len(head)} ülke, {nv} köşe, {ni // 3} üçgen, {dst.stat().st_size // 1024} KB")


if __name__ == "__main__":
    build(ROOT / "data/countries.geojson", ROOT / "data/mesh_lo.bin")
    build(ROOT / "data/countries_hi.geojson", ROOT / "data/mesh_hi.bin")
    sys.exit(0)
