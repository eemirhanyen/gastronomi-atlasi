#!/usr/bin/env python3
"""
Yemek fotoğrafları: aday bulma + AI görsel doğrulama.

  cands   Her yemek ve simge lezzet için serbest lisanslı aday fotoğraflar (Wikipedia sayfa görselleri +
          Wikimedia Commons dosya araması; yemeğin kendi adıyla). AI yok.
  verify  Claude her yemeğin adaylarına bakar: fotoğraf GERÇEKTEN bu yemeği mi gösteriyor? (akraba yemek,
          çiğ malzeme, genel kategori, logo/harita/kişi -> elenir). Eşiği geçen en iyi aday seçilir, yoksa fotoğraf yok.
  credits Seçilen fotoğrafların yazar/lisans künyesi (Commons extmetadata).

Sonuç: data/work/photos.json  {anahtar: {"url","page","score"} | None}
Anahtar: tarif "ISO_yemek-id", simge lezzet "ISO~sig~ad".
Kullanım: ONLY=TUR,ITA python scripts/photos.py cands verify credits
"""
import concurrent.futures as cf
import json
import os
import re
import sys
import threading
import time
import urllib.parse
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import content as C  # noqa: E402

CANDS = os.path.join(C.WORK, "photo_cands.json")
OUT = os.path.join(C.WORK, "photos.json")
MIN_SCORE = int(os.environ.get("PHOTO_MIN", "7"))
MAX_CANDS = 5
LOCK = threading.Lock()


def items():
    """[(anahtar, iso, ad_en, yerel_ad, açıklama, malzemeler, wiki_en)]"""
    out = []
    for iso in C.targets():
        plan = C.jload(os.path.join(C.WORK, "plan", iso + ".json"))
        if not plan:
            continue
        for s in plan.get("signature", []):
            out.append((f"{iso}~sig~{C.slug(s['en'])}", iso, s["en"], s.get("native") or "", s.get("desc_en") or "", [], s.get("wiki_en")))
        for d in plan["dishes"]:
            r = C.jload(C.recipe_path(iso, d["id"]))
            if not r:
                continue
            out.append((f"{iso}_{d['id']}", iso, r["name"].get("en") or d["en"], r.get("native") or d.get("native") or "",
                        r["desc"].get("en", ""), r["ingredients"].get("en", [])[:12], d.get("wiki_en")))
    return out


# ------------------------------------------------------------------ Wikimedia
def wm(host, params):
    url = f"https://{host}/w/api.php?" + urllib.parse.urlencode({**params, "format": "json", "formatversion": "2"})
    for i in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=C.UA), timeout=60) as r:
                return json.loads(r.read())
        except Exception:
            if i == 4:
                return {}
            time.sleep(3 * (i + 1))


def wiki_images(gen):
    """generator sonuçlarından (sayfa) kapak görselleri."""
    out = []
    for p in sorted((gen.get("query") or {}).get("pages", []), key=lambda p: p.get("index", 0)):
        th = p.get("thumbnail")
        if th and p.get("pageimage"):
            out.append({"url": th["source"], "file": "File:" + p["pageimage"], "via": "wiki:" + p["title"],
                        "page": "https://en.wikipedia.org/wiki/" + urllib.parse.quote(p["title"].replace(" ", "_"))})
    return out


def commons_images(gen):
    out = []
    for p in sorted((gen.get("query") or {}).get("pages", []), key=lambda p: p.get("index", 0)):
        ii = (p.get("imageinfo") or [{}])[0]
        if ii.get("mime") not in ("image/jpeg", "image/png", "image/webp") or not ii.get("thumburl"):
            continue
        if (ii.get("width") or 0) < 300:
            continue
        out.append({"url": ii["thumburl"], "file": p["title"], "via": "commons", "page": ii.get("descriptionurl")})
    return out


def find(item):
    key, iso, en, native, desc, ingr, wiki = item
    cands = []
    if wiki:
        cands += wiki_images(wm("en.wikipedia.org", {"action": "query", "titles": wiki, "redirects": 1, "prop": "pageimages",
                                                     "piprop": "thumbnail|name", "pithumbsize": 640, "pilicense": "free"}))
    cands += wiki_images(wm("en.wikipedia.org", {"action": "query", "generator": "search", "gsrsearch": en, "gsrlimit": 3,
                                                 "prop": "pageimages", "piprop": "thumbnail|name", "pithumbsize": 640, "pilicense": "free"}))
    for q in [en] + ([native] if native and native.lower() != en.lower() else []):
        cands += commons_images(wm("commons.wikimedia.org", {"action": "query", "generator": "search", "gsrsearch": q, "gsrnamespace": 6,
                                                             "gsrlimit": 4, "prop": "imageinfo", "iiprop": "url|mime|size",
                                                             "iiurlwidth": 640}))
    seen, uniq = set(), []
    for c in cands:
        if c["file"] in seen:
            continue
        seen.add(c["file"])
        uniq.append(c)
    return key, uniq[:MAX_CANDS]


def stage_cands():
    done = C.jload(CANDS, {})
    todo = [it for it in items() if it[0] not in done]
    C.log(f"cands: {len(todo)} öğe")
    n = 0
    with cf.ThreadPoolExecutor(int(os.environ.get("WORKERS", "6"))) as ex:
        for key, cs in ex.map(find, todo):
            done[key] = cs
            n += 1
            if n % 300 == 0:
                C.jsave(CANDS, done)
                C.log(f"  {n}/{len(todo)}")
    C.jsave(CANDS, done)
    C.log(f"  adaylı: {sum(1 for v in done.values() if v)} / {len(done)}")


# ------------------------------------------------------------------ AI görsel doğrulama
VERIFY_SYSTEM = """You check photos for a world food atlas. You get one dish and up to 5 numbered candidate photos.
For each photo give a score 0-10 for how clearly it shows THIS specific dish as served/prepared:
10 = unmistakably this dish; 7-9 = this dish, minor doubt; 4-6 = a related or similar dish, a generic version, or unclear; 0-3 = something else
(raw ingredient only, the plant/animal, a different dish, a map, logo, building, person, text, drawing).
Be strict: e.g. for "Adana kebab" a photo of thin meatball skewers on bamboo sticks is a different kebab (<=5).
Reply with ONLY JSON: {"scores":[n, ...], "best": index_of_best_photo_or_null}"""


def stage_verify():
    cands = C.jload(CANDS, {})
    done = C.jload(OUT, {})
    meta = {it[0]: it for it in items()}
    todo = [k for k, v in cands.items() if k in meta and k not in done]
    C.log(f"verify: {len(todo)} öğe")
    reqs, ids = [], {}
    for n, key in enumerate(todo):
        cs = cands[key]
        if not cs:
            done[key] = None
            continue
        _, iso, en, native, desc, ingr, _w = meta[key]
        content = [{"type": "text", "text": f"Dish: {en}" + (f" ({native})" if native else "") + f"\nCountry: {C.REF[iso]['name']}\n"
                                            f"About: {desc[:300]}\nIngredients: {', '.join(ingr)[:400]}"}]
        for i, c in enumerate(cs):
            content += [{"type": "text", "text": f"Photo {i}:"}, {"type": "image", "source": {"type": "url", "url": c["url"]}}]
        cid = f"ph{n}"
        ids[cid] = key
        reqs.append({"custom_id": cid, "params": {"model": os.environ.get("PHOTO_MODEL", C.MODEL), "max_tokens": 300,
                                                  "system": VERIFY_SYSTEM, "messages": [{"role": "user", "content": content}]}})
    if reqs:
        for cid, text in C.run_batch(reqs, "verify").items():
            key = ids[cid]
            try:
                v = C.extract_json(text)
                scores = [int(x) for x in (v.get("scores") or [])]
                best = v.get("best")
                if best is None and scores:
                    best = max(range(len(scores)), key=lambda i: scores[i])
                best = int(best) if best is not None else None
                if best is not None and best < len(scores) and scores[best] >= MIN_SCORE and best < len(cands[key]):
                    c = cands[key][best]
                    done[key] = {"url": c["url"], "file": c["file"], "page": c["page"], "score": scores[best]}
                else:
                    done[key] = None
            except Exception as e:
                C.log(f"  {key}: çözülemedi {e}")
    C.jsave(OUT, done)
    ok = sum(1 for v in done.values() if v)
    C.log(f"  fotoğraflı: {ok} / {len(done)} (eşik {MIN_SCORE})")


# ------------------------------------------------------------------ künye
def stage_credits():
    done = C.jload(OUT, {})
    need = sorted({v["file"] for v in done.values() if v and "license" not in v})
    C.log(f"credits: {len(need)} dosya")
    info = {}
    for k in range(0, len(need), 40):
        part = need[k:k + 40]
        d = wm("commons.wikimedia.org", {"action": "query", "titles": "|".join(part), "prop": "imageinfo", "iiprop": "extmetadata|url"})
        for p in (d.get("query") or {}).get("pages", []):
            ii = (p.get("imageinfo") or [{}])[0]
            md = ii.get("extmetadata", {})
            info[p["title"]] = {"credit": C.strip_html(md.get("Artist", {}).get("value"))[:120],
                                "license": C.strip_html(md.get("LicenseShortName", {}).get("value"))[:40],
                                "source": ii.get("descriptionurl")}
        time.sleep(0.3)
    bad = 0
    for key, v in done.items():
        if v and v["file"] in info:
            v.update(info[v["file"]])
            lic = (v.get("license") or "").lower()
            # Serbest olmayan / belirsiz lisans: kullanma
            if not lic or "fair use" in lic or "non-free" in lic:
                done[key] = None
                bad += 1
            elif not v.get("credit") or "no machine-readable" in v["credit"].lower():
                v["credit"] = ""
    C.jsave(OUT, done)
    C.log(f"  künyeli: {sum(1 for v in done.values() if v and v.get('license'))}; lisansı uygun olmadığı için elenen: {bad}")


STAGES = {"cands": stage_cands, "verify": stage_verify, "credits": stage_credits}

if __name__ == "__main__":
    names = sys.argv[1:] or ["cands", "verify", "credits"]
    if "verify" in names and not os.environ.get("ANTHROPIC_API_KEY"):
        C.log("HATA: ANTHROPIC_API_KEY yok"); sys.exit(1)
    for n in names:
        C.log(f"=== {n}")
        STAGES[n]()
    C.log(f"Token: giriş {C.USAGE['in']}, çıkış {C.USAGE['out']}")
