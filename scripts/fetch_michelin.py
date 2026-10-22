#!/usr/bin/env python3
"""
Michelin rehberindeki yıldızlı (1-3) ve Bib Gourmand restoranlar: data/michelin.json

Kaynak: topluluk tarafından Michelin Rehberi sitesinden derlenen açık veri seti
https://github.com/ngshiheng/michelin-my-maps (resmi Michelin verisi değildir).
Yalnızca ad, şehir, ülke, konum, ödül, mutfak türü ve rehber bağlantısı alınır;
rehberdeki tanıtım metinleri alınmaz.
"""
import csv
import io
import json
import os
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REF = json.load(open(os.path.join(ROOT, "scripts", "countries_ref.json"), encoding="utf-8"))
OUT = os.path.join(ROOT, "data", "michelin.json")
SRC = "https://raw.githubusercontent.com/ngshiheng/michelin-my-maps/main/data/michelin_my_maps.csv"
AWARD = {"3 Stars": 3, "2 Stars": 2, "1 Star": 1, "Bib Gourmand": "b"}
ALIAS = {
    "USA": "USA", "United Kingdom": "GBR", "Chinese Mainland": "CHN", "Hong Kong SAR": "CHN", "Macau SAR": "CHN",
    "Taiwan Region": "TWN", "Dubai": "ARE", "Abu Dhabi": "ARE", "Principality of Monaco": "MCO",
    "The Philippines": "PHL", "South Korea": "KOR", "Czechia": "CZE", "Türkiye": "TUR",
}


def main():
    by_name = {v["name"].lower(): k for k, v in REF.items()}
    with urllib.request.urlopen(urllib.request.Request(SRC, headers={"User-Agent": "gastronomi-atlasi/1.0"}), timeout=300) as r:
        text = r.read().decode("utf-8")
    items, unknown = [], {}
    for row in csv.DictReader(io.StringIO(text)):
        aw = AWARD.get((row.get("Award") or "").strip())
        if aw is None:
            continue
        try:
            lat, lng = round(float(row["Latitude"]), 5), round(float(row["Longitude"]), 5)
        except (TypeError, ValueError):
            continue
        parts = [p.strip() for p in (row.get("Location") or "").split(",")]
        country = parts[-1] if parts else ""
        iso = ALIAS.get(country) or by_name.get(country.lower())
        if not iso:
            unknown[country] = unknown.get(country, 0) + 1
        city = parts[0] if len(parts) > 1 else ""
        items.append([row["Name"].strip(), city, iso, lat, lng, aw, (row.get("Cuisine") or "").strip()[:60],
                      row.get("Url") or "", 1 if str(row.get("GreenStar")).strip() in ("1", "True", "true") else 0])
    if len(items) < 1000:
        raise RuntimeError(f"çok az kayıt: {len(items)}")
    items.sort(key=lambda x: (0 if x[5] == "b" else -x[5]))
    json.dump({"generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "source": "https://github.com/ngshiheng/michelin-my-maps",
               "fields": ["name", "city", "iso3", "lat", "lng", "award", "cuisine", "url", "green"], "items": items},
              open(OUT, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    stars = sum(1 for x in items if x[5] != "b")
    print(f"Yazıldı: {len(items)} restoran ({stars} yıldızlı, {len(items) - stars} Bib Gourmand)")
    if unknown:
        print("Ülkesi eşleşmeyen:", unknown)


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"HATA: {e}")
        sys.exit(1)
