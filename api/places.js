// Google'da yüksek puanlı restoranlar (Places API New, Text Search).
// Google verisi depoya yazılmaz; istek anında çekilir ve CDN'de 24 saat tutulur.
// Ortam değişkeni: GOOGLE_PLACES_KEY. Günlük istek sınırı Google Cloud kotasından ayarlanır.
const COUNTRIES = require("./_countries.json");
const MIN_REVIEWS = 500, FALLBACK_MIN = 100, TOP = 5;

module.exports = async function handler(req, res) {
  const url = new URL(req.url, "http://x");
  const keys = [...url.searchParams.keys()];
  const iso = url.searchParams.get("iso");
  // Önbelleği atlatan rastgele parametreleri kabul etme
  if (keys.length !== 1 || !iso || !COUNTRIES[iso]) {
    res.statusCode = 400;
    res.setHeader("Cache-Control", "public, s-maxage=86400");
    return res.end(JSON.stringify({ error: "bad request" }));
  }
  const key = process.env.GOOGLE_PLACES_KEY;
  if (!key) {
    res.statusCode = 503;
    res.setHeader("Cache-Control", "public, s-maxage=3600");
    return res.end(JSON.stringify({ error: "not configured" }));
  }
  try {
    const r = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "places.id,places.displayName,places.rating,places.userRatingCount,places.shortFormattedAddress,places.formattedAddress,places.googleMapsUri"
      },
      body: JSON.stringify({ textQuery: "best restaurants in " + COUNTRIES[iso], includedType: "restaurant", pageSize: 20, languageCode: "en" })
    });
    if (!r.ok) throw new Error("google " + r.status);
    const d = await r.json();
    const all = (d.places || []).filter(p => p.rating && p.userRatingCount);
    let min = MIN_REVIEWS;
    let list = all.filter(p => p.userRatingCount >= min);
    if (list.length < 3) { min = FALLBACK_MIN; list = all.filter(p => p.userRatingCount >= min); }
    list.sort((a, b) => b.rating - a.rating || b.userRatingCount - a.userRatingCount);
    const places = list.slice(0, TOP).map(p => ({
      name: (p.displayName && p.displayName.text) || "",
      rating: p.rating,
      count: p.userRatingCount,
      address: p.shortFormattedAddress || p.formattedAddress || "",
      url: p.googleMapsUri
    }));
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=3600");
    res.end(JSON.stringify({ iso, minReviews: min, places }));
  } catch (e) {
    res.statusCode = 502;
    res.setHeader("Cache-Control", "public, s-maxage=1800");
    res.end(JSON.stringify({ error: String(e.message || e) }));
  }
};
