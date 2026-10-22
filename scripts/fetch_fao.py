#!/usr/bin/env python3
"""
Tarım üretimi ve tarım/gıda ihracatı: FAOSTAT toplu indirme dosyaları.

  - QCL (Crops and livestock products): eleman 5510 "Production" (ton)
  - TCL (Crops and livestock products trade): eleman 5922 "Export value" (1000 ABD doları)

Her ülke için en son yıldaki ilk TOP ürün yazılır: data/fao.json
Toplam/grup kalemleri (FAO ürün kodu >= 1700) çıkarılır.
Ürün adları İngilizcedir; Türkçe karşılıkları içerik hattında çevrilir.
"""
import csv
import io
import json
import os
import sys
import time
import urllib.request
import zipfile
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REF = json.load(open(os.path.join(ROOT, "scripts", "countries_ref.json"), encoding="utf-8"))
OUT = os.path.join(ROOT, "data", "fao.json")
UA = {"User-Agent": "gastronomi-atlasi/1.0"}
TOP = 10

# FAO dosya adları zaman zaman değişiyor: sırayla denenir
CANDIDATES = {
    "QCL": [
        "https://fenixservices.fao.org/faostat/static/bulkdownloads/Production_Crops_Livestock_E_All_Data_(Normalized).zip",
        "https://bulks-faostat.fao.org/production/Production_Crops_Livestock_E_All_Data_(Normalized).zip",
        "https://fenixservices.fao.org/faostat/static/bulkdownloads/Production_Crops_Livestock_E_All_Data.zip",
        "https://bulks-faostat.fao.org/production/Production_Crops_Livestock_E_All_Data_NOFLAG.zip",
        "https://bulks-faostat.fao.org/production/Production_Crops_Livestock_E_All_Data.zip",
    ],
    "TCL": [
        "https://fenixservices.fao.org/faostat/static/bulkdownloads/Trade_CropsLivestock_E_All_Data_(Normalized).zip",
        "https://bulks-faostat.fao.org/production/Trade_CropsLivestock_E_All_Data_(Normalized).zip",
        "https://fenixservices.fao.org/faostat/static/bulkdownloads/Trade_CropsLivestock_E_All_Data.zip",
        "https://bulks-faostat.fao.org/production/Trade_CropsLivestock_E_All_Data_NOFLAG.zip",
        "https://bulks-faostat.fao.org/production/Trade_CropsLivestock_E_All_Data.zip",
    ],
}
ELEMENT = {"QCL": "5510", "TCL": "5922"}
# Ayrıca saklanan kalemler (tüm ülkeler, en son yıl): şarap ve üzüm
SPECIAL = {564: "wine", 560: "grapes"}


def log(m):
    print(m, flush=True)


def download(code):
    for url in CANDIDATES[code]:
        try:
            log(f"  deneniyor: {url}")
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=600) as r:
                raw = r.read()
            if raw[:2] != b"PK":
                log("    zip değil, atlandı")
                continue
            log(f"    indirildi ({len(raw) // 1048576} MB)")
            return url, zipfile.ZipFile(io.BytesIO(raw))
        except Exception as e:
            log(f"    olmadı: {e}")
        time.sleep(2)
    raise RuntimeError(f"{code} dosyası indirilemedi")


def m49_to_iso():
    out = {}
    for iso, c in REF.items():
        if c.get("m49") is not None:
            out[int(c["m49"])] = iso
    return out


def rows(z):
    """Ana CSV'yi satır satır okur (normalize ya da geniş biçim)."""
    name = [n for n in z.namelist() if n.lower().endswith(".csv") and "all_data" in n.lower()]
    name = name or [n for n in z.namelist() if n.lower().endswith(".csv")]
    name.sort(key=lambda n: z.getinfo(n).file_size, reverse=True)
    log(f"    dosya: {name[0]}")
    with z.open(name[0]) as f:
        text = io.TextIOWrapper(f, encoding="latin-1", newline="")
        yield from csv.DictReader(text)


def num(s):
    try:
        return float(s)
    except (TypeError, ValueError):
        return None


def collect(code):
    url, z = download(code)
    m2i, el = m49_to_iso(), ELEMENT[code]
    # ülke -> yıl -> ürün -> değer
    data = defaultdict(lambda: defaultdict(dict))
    names = {}
    n = 0
    for r in rows(z):
        if r.get("Element Code") != el:
            continue
        try:
            item_code = int(r.get("Item Code") or 0)
        except ValueError:
            continue
        if item_code >= 1700 or item_code < 15 or "total" in (r.get("Item") or "").lower():
            continue                      # grup toplamları ve "Total Merchandise Trade" (10)
        m49 = (r.get("Area Code (M49)") or "").lstrip("'")
        if not m49.isdigit() or int(m49) not in m2i:
            continue
        iso = m2i[int(m49)]
        names[item_code] = r.get("Item")
        if "Year" in r:                   # normalize biçim
            y, v = r.get("Year"), num(r.get("Value"))
            if v is not None and y and y.isdigit():
                data[iso][int(y)][item_code] = v
        else:                             # geniş biçim: Y2021, Y2022 …
            for k, val in r.items():
                if k and k.startswith("Y") and k[1:].isdigit() and len(k) == 5:
                    v = num(val)
                    if v is not None:
                        data[iso][int(k[1:])][item_code] = v
        n += 1
    log(f"  {code}: {n} satır, {len(data)} ülke")
    special = {}
    for code, key in SPECIAL.items():
        per = {}
        for iso, years in data.items():
            ys = [y for y in sorted(years, reverse=True) if code in years[y]]
            if ys and years[ys[0]][code] > 0:
                per[iso] = {"year": ys[0], "value": round(years[ys[0]][code])}
        ranked = sorted(per, key=lambda i: -per[i]["value"])
        for n, iso in enumerate(ranked, 1):
            per[iso]["rank"] = n
        special[key] = {"countries": per, "n": len(per)}
    out = {}
    for iso, years in data.items():
        # en az 5 kalemi olan en son yıl
        ys = [y for y in sorted(years, reverse=True) if len(years[y]) >= 5]
        if not ys:
            continue
        y = ys[0]
        top = sorted(years[y].items(), key=lambda kv: -kv[1])[:TOP]
        out[iso] = {"year": y, "items": [[c, round(v)] for c, v in top if v > 0]}
    return url, out, names, special


def main():
    result = {"generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "items": {}}
    for code, key, unit in (("QCL", "production", "t"), ("TCL", "exports", "1000 USD")):
        log(f"{code} ({key})")
        url, per, names, special = collect(code)
        result[key + "_special"] = special
        result[key] = per
        result[key + "_meta"] = {"source": url, "unit": unit, "element": ELEMENT[code]}
        for c, nme in names.items():
            result["items"][str(c)] = nme
    used = {str(c) for k in ("production", "exports") for v in result[k].values() for c, _ in v["items"]}
    result["items"] = {c: n for c, n in result["items"].items() if c in used}
    json.dump(result, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    tr = result["production"].get("TUR")
    log(f"Yazıldı: {OUT} — üretim {len(result['production'])} ülke, ihracat {len(result['exports'])} ülke, {len(used)} ürün")
    if tr:
        log("  TUR üretim: " + ", ".join(f"{result['items'][str(c)]} {v}" for c, v in tr["items"][:5]))


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"HATA: {e}")
        sys.exit(1)
