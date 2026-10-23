(function () {
  "use strict";

  var T = {
    tr: {
      title: "Dünya Gastronomi Atlası", subtitle: "Ülkelerin mutfağı, tarlası ve sofrası", hint: "Bir ülkeye tıkla",
      searchPh: "Yemek ya da ülke ara…", close: "Kapat", stats: "{c} ülke · {r} tarif",
      signature: "Simge lezzetler", production: "En çok üretilen tarım ürünleri", exports: "En çok ihraç edilen tarım ve gıda ürünleri",
      recipes: "Tarifler A–Z", recipesN: "{n} tarif", filter: "Bu ülkede ara…", all: "Tümü", noRecipes: "Bu ülke için henüz tarif yok.",
      noMatch: "Eşleşen tarif yok.", noData: "Bu ülke için henüz veri yok.", noFao: "FAO verisi yok.",
      faoSrc: "Kaynak: FAOSTAT, {y}", tonnes: "ton", servings: "{n} kişilik", min: "{n} dk", hours: "{h} sa {m} dk",
      easy: "Kolay", medium: "Orta", hard: "Zor", ingredients: "Malzemeler", steps: "Yapılışı", tip: "İpucu",
      aiNote: "Bu tarif yapay zekâ tarafından yazıldı ve ikinci bir yapay zekâ geçişinde kontrol edildi. İnsan editörden geçmedi; denerken kendi mutfak bilgine de güven.",
      aiNoteUnrev: "Bu tarif yapay zekâ tarafından yazıldı, henüz kontrol edilmedi.",
      photo: "Fotoğraf", noPhoto: "Bu yemek için serbest lisanslı fotoğraf bulunamadı.", searchEmpty: "Sonuç yok.", country: "Ülke",
      loadErr: "Veri yüklenemedi.", scoreTitle: "Mutfağın dünyadaki etkisi ve tanınırlığı", scoreAI: "AI değerlendirmesi, 0–100", noScore: "Puan yok",
      layers: "Katmanlar", lyScore: "Mutfak puanı renkleri", lyLabels: "Ülke adları", michelin: "Michelin Rehberi",
      star3: "3 yıldız", star2: "2 yıldız", star1: "1 yıldız", bib: "Bib Gourmand", bibNote: "uygun fiyatlı, iyi yemek",
      michelinSrc: "Kaynak: Michelin Rehberi verisinden derlenen açık veri seti (resmi değil)", openGuide: "Michelin Rehberi'nde gör",
      michelinIn: "Michelin yıldızlı restoranlar", noMichelin: "Bu ülkede Michelin Rehberi'nde yıldızlı restoran yok ya da rehber bu ülkeyi kapsamıyor.",
      more: "+{n} restoran daha (küredeki katmanda)", google: "Google'da yüksek puanlı restoranlar", googleNote: "En az {n} yorumu olanlar arasından, Google'ın bu ülke için döndürdüğü sonuçlara göre.",
      googleNone: "Şu an gösterilemiyor.", reviews: "{n} yorum", loading: "Yükleniyor…",
      lyText: "Küredeki yazılar", txNames: "Ülke adları", txSpice: "Baharat haritası", txSauce: "Sos haritası", txOff: "Kapalı",
      spices: "Sevilen baharatlar", sauces: "Sevilen soslar",
      lyColor: "Küre rengi", colScore: "Mutfak puanı", colWine: "Şarap üretimi", colNone: "Renksiz", wineScale: "Yıllık şarap üretimi (ton) · FAOSTAT",
      colCoffee: "Kahve üretimi", colCocoa: "Kakao üretimi", coffeeScale: "Yıllık yeşil kahve üretimi (ton) · FAOSTAT", cocoaScale: "Yıllık kakao çekirdeği üretimi (ton) · FAOSTAT",
      coffeeRegions: "Kahve bölgeleri", cocoaRegions: "Kakao bölgeleri", coffeeTitle: "Kahve", cocoaTitle: "Kakao ve çikolata",
      coffeeProd: "Yıllık yeşil kahve üretimi: {v} ton ({y}), dünyada {r}. sırada", cocoaProd: "Yıllık kakao üretimi: {v} ton ({y}), dünyada {r}. sırada",
      coffeeExp: "Kahve ihracatı: {v} ({y})", cocoaExp: "Çikolata ürünleri ihracatı: {v} ({y})", coffeeVar: "Öne çıkan türler ve çeşitler", cocoaVar: "Kakao türleri",
      coffeeStyles: "Kahve kültürü ve hazırlanış", cocoaStyles: "Çikolata gelenekleri", rankCoffee: "En çok kahve üreten ülkeler", rankCocoa: "En çok kakao üreten ülkeler",
      arabica: "arabica", robusta: "robusta", criollo: "criollo", forastero: "forastero", trinitario: "trinitario", productLayers: "Üretim bölgeleri",
      noWine: "Kayda değer üretim yok", wineRegions: "Şarap bölgeleri", wineTitle: "Şarap", wineProd: "Yıllık üretim: {v} ton ({y}), dünyada {r}. sırada",
      wineExp: "Şarap ihracatı: {v} ({y})", grapes: "Öne çıkan üzümler", wineStyles: "Tanınmış şaraplar ve tarzlar", regionsT: "Bölgeler",
      native: "yerli", red: "kırmızı", white: "beyaz", rose: "roze", other: "", sources: "Kaynaklar", researched: "Web araştırmasıyla derlendi ({d}).",
      restTitle: "Mutfağı deneyimlemek için restoranlar", restNote: "Web araştırmasıyla derlendi ({d}); açılış durumunu gitmeden önce kontrol edin.",
      kind_traditional: "Geleneksel", kind_fine_dining: "Fine dining", kind_casual: "Lokanta", kind_street_food: "Sokak lezzeti", kind_market: "Çarşı / pazar",
      credit: "Doç. Dr. Emirhan Yenişehirlioğlu tarafından hazırlanmıştır",
      rankScore: "En yüksek mutfak puanları", rankWine: "En çok şarap üreten ülkeler", showAll: "Tümü ({n})", showTop: "İlk 10",
      scoreKicker: "Mutfak puanı", worldRank: "Dünya sıralaması", of: "{n} ülke içinde",
      tier1: "Dünya mutfağının zirvesinde", tier2: "Güçlü ve etkili bir mutfak", tier3: "Bölgesinde tanınan bir mutfak", tier4: "Keşfedilmeyi bekleyen bir mutfak",
      top10: "Ölmeden önce tadılması gereken 10 yemek", top10Short: "Ölmeden Önce 10 Yemek",
      top10Sub: "Uluslararası listelere ve gastronomi yayınlarına dayanarak atlas tariflerinden seçildi (yapay zekâ, web araştırması).",
      top10Map: "Hepsini haritada gör",
      clickInfo: "Ayrıntı için tıkla", openCountry: "Ülke sayfasını aç",
      relTitle: "Akraba yemekler", relSub: "Başka ülkelerde neredeyse aynı yemek", simTitle: "Benzer yemekler", relMap: "Haritada gör",
      relNote: "Benzerlik oranı yapay zekânın malzeme, teknik ve servis biçimine bakarak verdiği bir değerlendirmedir.", relOf: "{d} yemeğinin akrabaları",
      lens_cuisine: "Mutfak", lens_spice: "Baharat", lens_sauce: "Sos", lens_wine: "Şarap", lens_coffee: "Kahve", lens_cocoa: "Çikolata", lens_michelin: "Michelin", lens_top10: "En İyi 10",
      capScore: "Mutfak puanı · yapay zekâ değerlendirmesi", capSpice: "Küredeki yazılar: her ülkenin en sevilen baharatı", capSauce: "Küredeki yazılar: her ülkenin en sevilen sosu",
      capMichelin: "Michelin Rehberi restoranları · bir noktaya dokun", capTop10: "Ölmeden önce tadılması gereken 10 yemek · birine dokun",
      wineCap: "Yıllık şarap üretimi (ton)", coffeeCap: "Yıllık kahve üretimi (ton)", cocoaCap: "Yıllık kakao üretimi (ton)",
      namesT: "Ülke adlarını göster", rankT: "Sıralamayı göster", regionsChip: "Bölgeler", top10Open: "Listeyi aç", rankMichelin: "En çok Michelin yıldızı olan ülkeler",
      sigShort: "Simge lezzet", michStars: "{n} Michelin yıldızı", noMich: "Michelin yıldızı yok", tab_genel: "Genel", tab_tarif: "Tarifler", tab_restoran: "Restoranlar", tab_tarim: "Tarım", goRecipes: "Bu mutfaktan {n} tarifin tamamı",
      help: "Nasıl kullanılır?", next: "İleri", skip: "Geç", begin: "Başla",
      intro1T: "Bir ülkeye dokun", intro1: "Mutfak puanını, simge lezzetleri ve fotoğraflı tarifleri gör.",
      intro2T: "Mercekleri dene", intro2: "Alttaki simgelerle küreyi şarap, kahve, çikolata, baharat ya da Michelin haritasına çevir.",
      intro3T: "Bir yemek ara", intro3: "Üstteki kutuya bir yemek ya da ülke adı yaz; doğrudan tarife git.",
      cat: { soup: "Çorba", main: "Ana yemek", side: "Yan yemek", salad: "Salata", bread: "Ekmek", pastry: "Hamur işi", dessert: "Tatlı", drink: "İçecek", snack: "Atıştırmalık", breakfast: "Kahvaltı", sauce: "Sos", street_food: "Sokak lezzeti" }
    },
    en: {
      title: "World Gastronomy Atlas", subtitle: "Every country's kitchen, fields and table", hint: "Click a country",
      searchPh: "Search a dish or country…", close: "Close", stats: "{c} countries · {r} recipes",
      signature: "Signature flavours", production: "Top agricultural products", exports: "Top agricultural & food exports",
      recipes: "Recipes A–Z", recipesN: "{n} recipes", filter: "Search this country…", all: "All", noRecipes: "No recipes for this country yet.",
      noMatch: "No matching recipes.", noData: "No data for this country yet.", noFao: "No FAO data.",
      faoSrc: "Source: FAOSTAT, {y}", tonnes: "t", servings: "Serves {n}", min: "{n} min", hours: "{h} h {m} min",
      easy: "Easy", medium: "Medium", hard: "Hard", ingredients: "Ingredients", steps: "Method", tip: "Tip",
      aiNote: "This recipe was written by AI and checked in a second AI pass. No human editor reviewed it; trust your own kitchen sense too.",
      aiNoteUnrev: "This recipe was written by AI and has not been checked yet.",
      photo: "Photo", noPhoto: "No freely licensed photo found for this dish.", searchEmpty: "No results.", country: "Country",
      loadErr: "Could not load data.", scoreTitle: "Global influence and recognition of the cuisine", scoreAI: "AI assessment, 0–100", noScore: "No score",
      layers: "Layers", lyScore: "Cuisine score colours", lyLabels: "Country names", michelin: "Michelin Guide",
      star3: "3 stars", star2: "2 stars", star1: "1 star", bib: "Bib Gourmand", bibNote: "good food, good value",
      michelinSrc: "Source: open dataset compiled from the Michelin Guide (unofficial)", openGuide: "View in the Michelin Guide",
      michelinIn: "Michelin-starred restaurants", noMichelin: "No Michelin-starred restaurants here, or the Guide does not cover this country.",
      more: "+{n} more (see the globe layer)", google: "Highly rated on Google", googleNote: "Among places with at least {n} reviews, from Google's results for this country.",
      googleNone: "Not available right now.", reviews: "{n} reviews", loading: "Loading…",
      lyText: "Text on the globe", txNames: "Country names", txSpice: "Spice map", txSauce: "Sauce map", txOff: "Off",
      spices: "Favourite spices", sauces: "Favourite sauces",
      lyColor: "Globe colour", colScore: "Cuisine score", colWine: "Wine production", colNone: "No colour", wineScale: "Annual wine production (t) · FAOSTAT",
      colCoffee: "Coffee production", colCocoa: "Cocoa production", coffeeScale: "Annual green coffee production (t) · FAOSTAT", cocoaScale: "Annual cocoa bean production (t) · FAOSTAT",
      coffeeRegions: "Coffee regions", cocoaRegions: "Cacao regions", coffeeTitle: "Coffee", cocoaTitle: "Cacao and chocolate",
      coffeeProd: "Annual green coffee production: {v} t ({y}), world rank #{r}", cocoaProd: "Annual cocoa production: {v} t ({y}), world rank #{r}",
      coffeeExp: "Coffee exports: {v} ({y})", cocoaExp: "Chocolate product exports: {v} ({y})", coffeeVar: "Species and varieties", cocoaVar: "Cacao types",
      coffeeStyles: "Coffee culture and preparation", cocoaStyles: "Chocolate traditions", rankCoffee: "Top coffee producers", rankCocoa: "Top cocoa producers",
      arabica: "arabica", robusta: "robusta", criollo: "criollo", forastero: "forastero", trinitario: "trinitario", productLayers: "Production regions",
      noWine: "No significant production", wineRegions: "Wine regions", wineTitle: "Wine", wineProd: "Annual production: {v} t ({y}), world rank #{r}",
      wineExp: "Wine exports: {v} ({y})", grapes: "Signature grapes", wineStyles: "Notable wines and styles", regionsT: "Regions",
      native: "native", red: "red", white: "white", rose: "rosé", other: "", sources: "Sources", researched: "Compiled with web research ({d}).",
      restTitle: "Restaurants to experience the cuisine", restNote: "Compiled with web research ({d}); check opening status before you go.",
      kind_traditional: "Traditional", kind_fine_dining: "Fine dining", kind_casual: "Casual", kind_street_food: "Street food", kind_market: "Market",
      credit: "Created by Assoc. Prof. Dr. Emirhan Yenişehirlioğlu",
      rankScore: "Top cuisine scores", rankWine: "Top wine producers", showAll: "All ({n})", showTop: "Top 10",
      scoreKicker: "Cuisine score", worldRank: "World rank", of: "among {n} countries",
      tier1: "At the top of world cuisine", tier2: "A strong, influential cuisine", tier3: "Well known in its region", tier4: "A cuisine waiting to be discovered",
      top10: "10 dishes to eat before you die", top10Short: "10 Dishes Before You Die",
      top10Sub: "Chosen from the atlas recipes based on international rankings and food writing (AI, web research).",
      top10Map: "Show all on the map",
      clickInfo: "Click for details", openCountry: "Open country page",
      relTitle: "Related dishes", relSub: "Almost the same dish in other countries", simTitle: "Similar dishes", relMap: "Show on the map",
      relNote: "Similarity is an AI assessment of ingredients, technique and how the dish is served.", relOf: "Relatives of {d}",
      lens_cuisine: "Cuisine", lens_spice: "Spices", lens_sauce: "Sauces", lens_wine: "Wine", lens_coffee: "Coffee", lens_cocoa: "Chocolate", lens_michelin: "Michelin", lens_top10: "Top 10",
      capScore: "Cuisine score · AI assessment", capSpice: "Labels: each country's favourite spice", capSauce: "Labels: each country's favourite sauce",
      capMichelin: "Michelin Guide restaurants · tap a dot", capTop10: "10 dishes to eat before you die · tap one",
      wineCap: "Annual wine production (t)", coffeeCap: "Annual coffee production (t)", cocoaCap: "Annual cocoa production (t)",
      namesT: "Show country names", rankT: "Show ranking", regionsChip: "Regions", top10Open: "Open the list", rankMichelin: "Most Michelin stars by country",
      sigShort: "Signature dish", michStars: "{n} Michelin stars", noMich: "No Michelin stars", tab_genel: "Overview", tab_tarif: "Recipes", tab_restoran: "Restaurants", tab_tarim: "Farming", goRecipes: "All {n} recipes from this cuisine",
      help: "How to use", next: "Next", skip: "Skip", begin: "Start",
      intro1T: "Tap a country", intro1: "See its cuisine score, signature flavours and recipes with photos.",
      intro2T: "Try the lenses", intro2: "Use the icons at the bottom to turn the globe into a wine, coffee, chocolate, spice or Michelin map.",
      intro3T: "Search a dish", intro3: "Type a dish or country in the box at the top and jump straight to the recipe.",
      cat: { soup: "Soup", main: "Main", side: "Side", salad: "Salad", bread: "Bread", pastry: "Pastry", dessert: "Dessert", drink: "Drink", snack: "Snack", breakfast: "Breakfast", sauce: "Sauce", street_food: "Street food" }
    }
  };
  var CAT_ICON = { soup: "🍲", main: "🍛", side: "🥔", salad: "🥗", bread: "🍞", pastry: "🥟", dessert: "🍰", drink: "🍵", snack: "🥨", breakfast: "🍳", sauce: "🫙", street_food: "🌯" };
  // Puan renkleri: düşük kırmızı, orta sarı, yüksek yeşil
  var STOPS = [[15, [192, 57, 43]], [35, [226, 120, 50]], [55, [233, 196, 70]], [75, [130, 186, 80]], [95, [38, 150, 85]]];
  function scoreRGB(v) {
    if (v <= STOPS[0][0]) return STOPS[0][1];
    for (var i = 1; i < STOPS.length; i++) {
      if (v <= STOPS[i][0]) {
        var a = STOPS[i - 1], b = STOPS[i], k = (v - a[0]) / (b[0] - a[0]);
        return [0, 1, 2].map(function (j) { return Math.round(a[1][j] + (b[1][j] - a[1][j]) * k); });
      }
    }
    return STOPS[STOPS.length - 1][1];
  }
  function scoreColor(v, lift) {
    var c = scoreRGB(v).map(function (x) { return Math.round(x + (255 - x) * (lift || 0)); });
    return "rgb(" + c.join(",") + ")";
  }

  // Ülke yüzeyinin küreden yüksekliği; noktalar ve işaretler bunun hemen üstünde.
  // 0.003 altına inme: büyük ülkelerin düz üçgenleri küre yüzeyine gömülür, siyah titreşimli alanlar oluşur (z-fighting).
  var GROUND = 0.005;
  var lang = "tr", globe, labelEls = [], labelRank = 2;
  // Mercekler: tek dokunuşla küre rengi, noktalar, yazılar, sıralama ve panelin açılış sekmesi birlikte değişir
  var LENSES = ["cuisine", "spice", "sauce", "wine", "coffee", "cocoa", "michelin", "top10"];
  var LENS_ICON = { cuisine: "🍽️", spice: "🌶️", sauce: "🥣", wine: "🍷", coffee: "☕", cocoa: "🍫", michelin: "⭐", top10: "🏆" };
  var PREF = { lens: "cuisine", names: true, regions: true, m3: true, m2: true, m1: true, mb: false };
  try { Object.assign(PREF, JSON.parse(localStorage.getItem("ga-prefs") || "{}")); } catch (e) { /* yok */ }
  if (LENSES.indexOf(PREF.lens) < 0) PREF.lens = "cuisine";
  function savePrefs() { try { localStorage.setItem("ga-prefs", JSON.stringify(PREF)); } catch (e) { /* yok */ } }
  var LY = {};
  function deriveLY() {
    var l = PREF.lens;
    LY.color = PRODS[l] ? l : l === "michelin" ? "none" : "score";
    LY.text = l === "spice" || l === "sauce" ? l : PREF.names ? "names" : "off";
    Object.keys(PRODS).forEach(function (k) { LY[PRODS[k].ly] = l === k && PREF.regions; });
    ["m3", "m2", "m1", "mb"].forEach(function (k) { LY[k] = l === "michelin" && PREF[k]; });
  }
  var MCOL = { 3: "#ffffff", 2: "#9fd8ff", 1: "#3fa7ff", b: "#c79bff", w: "#5a2a12", c: "#5a2a12", k: "#5a2a12" };
  var MKEY = { 3: "m3", 2: "m2", 1: "m1", b: "mb", w: "wr", c: "cr", k: "kr" };
  // Üretim katmanları: şarap, kahve, kakao (FAO üretimiyle renk, araştırmadan bölge noktaları, panel bölümü)
  // Üretim mercekleri ortak "miktar" ölçeği kullanır (açık krem -> koyu turuncu). Kırmızı-yeşil yalnızca mutfak puanı içindir:
  // az üretmek "kötü" değildir, aynı renk iki farklı anlam taşımasın.
  var QTY_A = [252, 236, 210], QTY_B = [190, 74, 14];
  var PRODS = {
    wine: { code: "w", ly: "wr", icon: "🍷", file: "data/regions_wine.json", a: QTY_A, b: QTY_B, max: 5e6, tick: "5M" },
    coffee: { code: "c", ly: "cr", icon: "☕", file: "data/regions_coffee.json", a: QTY_A, b: QTY_B, max: 3.5e6, tick: "3.5M" },
    cocoa: { code: "k", ly: "kr", icon: "🍫", file: "data/regions_cocoa.json", a: QTY_A, b: QTY_B, max: 2e6, tick: "2M" }
  };
  var CODE2PROD = { w: "wine", c: "coffee", k: "cocoa" };
  // Üretim: log ölçek, 1 bin t -> ürünün dünya zirvesi
  function prodColor(key, v, lift) {
    var P = PRODS[key], top = Math.log10(P.max);
    var k = Math.max(0, Math.min(1, (Math.log10(Math.max(v, 1)) - 3) / (top - 3)));
    var a = P.a, b = P.b;
    var c = [0, 1, 2].map(function (j) { var x = a[j] + (b[j] - a[j]) * k; return Math.round(x + (255 - x) * (lift || 0)); });
    return "rgb(" + c.join(",") + ")";
  }
  function wineColor(v, lift) { return prodColor("wine", v, lift); }
  var S = { geo: null, index: {}, search: [], cache: {}, selected: null, hover: null, country: null, filter: "", cat: "" };

  // ------------------------------------------------------------ yardımcılar
  function t(k, v) {
    var s = k.split(".").reduce(function (o, p) { return o && o[p]; }, T[lang]);
    if (s == null) s = k;
    if (v) Object.keys(v).forEach(function (x) { s = s.split("{" + x + "}").join(v[x]); });
    return s;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function L(o) { return o ? (o[lang] || o.en || o.tr || "") : ""; }
  // Bayraklar resim olarak (Windows bayrak emojisi göstermiyor). Kaynak: flag-icons (MIT)
  function flag(iso2) {
    if (!iso2 || !/^[A-Za-z]{2}$/.test(iso2)) return '<span class="flg flg-x"></span>';
    return '<img class="flg" src="flags/' + iso2.toLowerCase() + '.svg" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">';
  }
  function iso2Of(iso3) {
    var c = S.index[iso3]; if (c && c.iso2) return c.iso2;
    var f = S.geo && S.geo.features.find(function (x) { return x.properties.iso === iso3; });
    return f && f.properties.iso2;
  }
  // ISO kodu olmayan ya da özel adlandırılan yerler
  var NAMES = { CYN: { tr: "KKTC", en: "Northern Cyprus" } };
  var dn = {};
  function cname(iso3) {
    if (NAMES[iso3]) return NAMES[iso3][lang] || NAMES[iso3].en;
    var c = S.index[iso3], f0 = S.geo && S.geo.features.find(function (x) { return x.properties.iso === iso3; });
    var iso2 = (c && c.iso2) || (f0 && f0.properties.iso2);
    if (iso2) {
      try {
        dn[lang] = dn[lang] || new Intl.DisplayNames([lang], { type: "region" });
        var n = dn[lang].of(iso2);
        if (n && n !== iso2) return n;
      } catch (e) { /* eski tarayıcı */ }
    }
    var f = S.geo && S.geo.features.find(function (x) { return x.properties.iso === iso3; });
    return f ? f.properties.name : iso3;
  }
  function norm(s) {
    return String(s || "").toLocaleLowerCase(lang).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i");
  }
  function getJSON(u) {
    return fetch(u).then(function (r) { if (!r.ok) throw new Error(u + " " + r.status); return r.json(); });
  }
  function showError(m) {
    var e = document.getElementById("error"); e.textContent = m; e.hidden = false;
    setTimeout(function () { e.hidden = true; }, 6000);
  }
  function fmtTime(m) {
    if (!m) return "";
    return m < 60 ? t("min", { n: m }) : t("hours", { h: Math.floor(m / 60), m: m % 60 });
  }
  function fmtTonnes(v) {
    return new Intl.NumberFormat(lang, { notation: "compact", maximumFractionDigits: 1 }).format(v) + " " + t("tonnes");
  }
  function fmtUSD(v) {
    return new Intl.NumberFormat(lang, { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }).format(v * 1000);
  }
  function photo(img, cat, cls) {
    var icon = CAT_ICON[cat] || "🍽️";
    return '<div class="ph ' + (cls || "") + '">' + icon +
      (img && img.url ? '<img loading="lazy" alt="" src="' + esc(img.url) + '" onerror="this.remove()">' : "") + "</div>";
  }

  // ------------------------------------------------------------ dil
  function setLang(l) {
    lang = l;
    try { localStorage.setItem("ga-lang", l); } catch (e) { /* yok */ }
    document.documentElement.lang = l;
    document.title = t("title");
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) { el.textContent = t(el.dataset.i18n); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-ph]"), function (el) { el.placeholder = t(el.dataset.i18nPh); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-aria]"), function (el) { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    Array.prototype.forEach.call(document.querySelectorAll(".lang button"), function (b) { b.classList.toggle("on", b.dataset.lang === l); });
    updateLabels();
    dock();
    legend();
    if (!document.getElementById("intro").hidden) intro(true, S.introStep);
    renderRank();
    if (S.country) renderPanel();
    if (S.recipe) openRecipe(S.recipe[0], S.recipe[1], true);
    runSearch();
  }
  function scoreBar() {
    var g = [];
    for (var v = 15; v <= 100; v += 5) g.push(scoreColor(v) + " " + ((v - 15) / 85 * 100).toFixed(0) + "%");
    return '<div class="lg-scale"><div class="lg-bar" style="background:linear-gradient(90deg,' + g.join(",") + ')"></div>' +
      '<div class="lg-ticks"><span>15</span><span>55</span><span>100</span></div></div>';
  }
  function prodBar(k) {
    var P = PRODS[k];
    return '<div class="lg-scale"><div class="lg-bar" style="background:linear-gradient(90deg,' + prodColor(k, 1000) + "," + prodColor(k, 30000) + "," +
      prodColor(k, P.max / 5) + "," + prodColor(k, P.max) + ')"></div><div class="lg-ticks"><span>1K</span><span>100K</span><span>' + P.tick + "</span></div></div>";
  }
  // Seçili merceğe göre alt şerit: renk ölçeği + açıklama + o merceğe özgü küçük ayarlar
  function legend() {
    var l = PREF.lens, h = "", tools = "";
    function chip(key, on, label, dot, title) {
      return '<button class="lg-chip' + (on ? " on" : "") + '" data-pref="' + key + '"' + (title ? ' title="' + esc(title) + '"' : "") + ' aria-pressed="' + !!on + '">' +
        (dot ? '<i style="background:' + dot + '"></i>' : "") + label + "</button>";
    }
    if (l === "cuisine" || l === "spice" || l === "sauce") {
      h = scoreBar() + '<span class="lg-cap">' + esc(t(l === "cuisine" ? "capScore" : l === "spice" ? "capSpice" : "capSauce")) + "</span>";
    } else if (PRODS[l]) {
      var n = S.regions && S.regions[l];
      h = prodBar(l) + '<span class="lg-cap">' + esc(t(l + "Cap")) + " · FAOSTAT</span>";
      tools += chip("regions", PREF.regions, esc(t("regionsChip")) + (n ? " <em>" + n.length + "</em>" : ""), "radial-gradient(circle at 35% 35%,#a5582a,#3a1808 70%);box-shadow:0 0 0 1.5px #fff");
    } else if (l === "michelin") {
      var cnt = S.michelinCount || {};
      h = '<span class="lg-cap">' + esc(t("capMichelin")) + "</span>";
      tools += [3, 2, 1, "b"].map(function (a) {
        var k = MKEY[a];
        return chip(k, PREF[k], (a === "b" ? "Bib" : stars(a)) + (cnt[a] ? " <em>" + cnt[a].toLocaleString(lang) + "</em>" : ""), MCOL[a], t(a === "b" ? "bib" : "star" + a));
      }).join("");
    } else if (l === "top10") {
      h = '<span class="lg-cap">' + esc(t("capTop10")) + "</span>";
      tools += '<button class="lg-chip" data-act="toplist">📜 ' + esc(t("top10Open")) + "</button>";
    }
    if (l !== "spice" && l !== "sauce" && l !== "top10") tools += chip("names", PREF.names, "Aa", "", t("namesT"));
    if (l !== "top10") tools += '<button class="lg-chip lg-rk' + (rankOpen() ? " on" : "") + '" data-act="rank" title="' + esc(t("rankT")) + '" aria-pressed="' + rankOpen() + '">🏆</button>';
    var box = document.getElementById("legend");
    box.className = "legend lg-" + l;
    box.innerHTML = '<div class="lg-main">' + h + "</div>" + (tools ? '<div class="lg-tools">' + tools + "</div>" : "");
    measureBottom();
    Array.prototype.forEach.call(box.querySelectorAll("[data-pref]"), function (b) {
      b.addEventListener("click", function () {
        var k = b.dataset.pref;
        PREF[k] = !PREF[k];
        savePrefs(); deriveLY();
        if (k === "names") updateLabels();
        legend(); applyLayers();
      });
    });
    Array.prototype.forEach.call(box.querySelectorAll("[data-act]"), function (b) {
      b.addEventListener("click", function () {
        if (b.dataset.act === "toplist") openTop();
        else { S.rkOpen = !rankOpen(); renderRank(); legend(); }
      });
    });
  }
  // Alt şeridin yüksekliği: sıralama, nokta kartı ve tanıtım kutusu her zaman onun üstünde dursun
  function measureBottom() {
    var b = document.getElementById("bottom");
    if (b) document.documentElement.style.setProperty("--bh", (b.offsetHeight + 18) + "px");
  }
  window.addEventListener("resize", function () { measureBottom(); });
  function rankOpen() { return S.rkOpen !== undefined ? S.rkOpen : window.innerWidth > 720; }
  function dock() {
    var d = document.getElementById("dock");
    d.innerHTML = LENSES.map(function (l) {
      return '<button class="lens' + (PREF.lens === l ? " on" : "") + '" data-lens="' + l + '" aria-pressed="' + (PREF.lens === l) + '">' +
        '<span class="li">' + LENS_ICON[l] + '</span><span class="ll">' + esc(t("lens_" + l)) + "</span></button>";
    }).join("");
    Array.prototype.forEach.call(d.querySelectorAll(".lens"), function (b) {
      b.addEventListener("click", function () { setLens(b.dataset.lens); });
    });
    var on = d.querySelector(".lens.on");
    if (on && d.scrollWidth > d.clientWidth) d.scrollLeft = on.offsetLeft - (d.clientWidth - on.offsetWidth) / 2;
  }
  function lensTab(c) {
    var l = PREF.lens;
    if (PRODS[l] && c && c[l]) return "icecek";
    if (l === "michelin") return "restoran";
    return "genel";
  }
  function setLens(l) {
    if (l === PREF.lens && l !== "top10") return;
    PREF.lens = l; savePrefs(); deriveLY();
    S.rankAll = false;
    hideMcard();
    S.topOn = false;
    updateLabels(); dock(); legend(); renderRank();
    if (l === "top10") enterTop(); else applyLayers();
    if (S.country && !S.country.missing) {
      S.tab = lensTab(S.country);
      if (PRODS[l] && S.country[l]) S.sub = l;
      renderPanel();
    }
  }
  function labelText(f) {
    var c = S.index[f.properties.iso];
    if (LY.text === "spice") return c && c.spice ? L(c.spice) : "";
    if (LY.text === "sauce") return c && c.sauce ? L(c.sauce) : "";
    return cname(f.properties.iso);
  }
  function updateLabels() {
    labelEls.forEach(function (x) {
      x[0].textContent = labelText(x[1]);
      x[0].classList.toggle("flav", LY.text === "spice" || LY.text === "sauce");
      applyLabel(x[0]);
    });
  }
  function applyLayers() {
    if (!globe) return;
    labelEls.forEach(function (x) { applyLabel(x[0]); });
    refresh();
    var want = LY.m3 || LY.m2 || LY.m1 || LY.mb;
    if (want && !S.michelin) { loadMichelin().then(applyLayers); return; }
    var need = Object.keys(PRODS).filter(function (k) { return LY[PRODS[k].ly] && !(S.regions && S.regions[k]); });
    if (need.length) { Promise.all(need.map(loadRegions)).then(applyLayers); return; }
    var pts = !S.michelin ? [] : S.michelin.filter(function (m) { return LY[MKEY[m[5]]]; });
    globe.htmlElementsData(htmlData());
    S.points = pts;
    globe.pointsData(pts);
    if (!pts.length) hideMcard();
  }
  // Küredeki HTML öğeleri: ülke etiketleri + (açıksa) şarap bölgesi işaretleri
  var labelFeats = null, regionObjs = {};
  // Yakınlaşınca görünen ülkelerin sınırlarını ayrıntılı (1:50m) sürümle değiştir. Uzaktan bakışta hızlı sürüm kalır.
  var hiGeo = null, hiLoading = null, upTimer = null;
  function upgradeGeo(pov) {
    if (!hiLoading) {
      hiLoading = getJSON("data/countries_hi.geojson").then(function (g) {
        hiGeo = {};
        g.features.forEach(function (f) { hiGeo[f.properties.iso] = f; });
      }).catch(function () { hiGeo = {}; });
    }
    hiLoading.then(function () {
      clearTimeout(upTimer);
      upTimer = setTimeout(function () { upgradeStep(globe.pointOfView()); }, 250);
    });
  }
  // Sınır çatlaklarını önlemek için: görünen ülkeler + komşuları birlikte geçer; ardından kalan ülkeler
  // arka planda küçük gruplar halinde geçer. Böylece kısa süre sonra tüm sınırlar aynı ayrıntıda olur.
  var hiBox = null, hiNb = null;
  var BIG = { RUS: 1, CAN: 1, USA: 1, ATA: 1, GRL: 1, AUS: 1, IDN: 1, CHN: 1, BRA: 1, NOR: 1, CHL: 1, ARG: 1, PHL: 1, JPN: 1, GBR: 1 };
  function bboxOf(geom) {
    var b = [180, 90, -180, -90];
    (geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates).forEach(function (pl) {
      pl[0].forEach(function (p) { if (p[0] < b[0]) b[0] = p[0]; if (p[1] < b[1]) b[1] = p[1]; if (p[0] > b[2]) b[2] = p[0]; if (p[1] > b[3]) b[3] = p[1]; });
    });
    return b;
  }
  function neighbours(iso) {
    if (!hiNb) {
      hiBox = {}; hiNb = {};
      Object.keys(hiGeo).forEach(function (k) { hiBox[k] = bboxOf(hiGeo[k].geometry); });
    }
    if (!hiNb[iso]) {
      var a = hiBox[iso], out = [];
      if (a) Object.keys(hiBox).forEach(function (k) {
        var b = hiBox[k];
        if (k !== iso && a[0] <= b[2] + 0.2 && b[0] <= a[2] + 0.2 && a[1] <= b[3] + 0.2 && b[1] <= a[3] + 0.2) out.push(k);
      });
      hiNb[iso] = out;
    }
    return hiNb[iso];
  }
  function upgradeStep(pov) {
    var reach = Math.max(12, pov.altitude * 45), cl = Math.cos(pov.lat * Math.PI / 180);
    var feats = S.geo.features, want = {}, idx = {};
    feats.forEach(function (f, i) { idx[f.properties.iso] = i; });
    feats.forEach(function (f) {
      if (f.__hi) return;
      var dy = (f.properties.ly || 0) - pov.lat, dx = ((((f.properties.lx || 0) - pov.lng) + 540) % 360 - 180) * Math.max(cl, 0.2);
      if (Math.sqrt(dx * dx + dy * dy) <= reach) {
        want[f.properties.iso] = 1;
        neighbours(f.properties.iso).forEach(function (k) { want[k] = 1; });
      }
    });
    var list = Object.keys(want).filter(function (k) { return idx[k] != null && !feats[idx[k]].__hi; });
    var background = false;
    if (!list.length) {                    // görünür bölge bitti: kalanları arka planda geçir
      // Çok büyük geometriler (Rusya, Kanada…) arka planda geçirilmez: tek başına saniyelerce donma yapar.
      // Onlar yalnızca ekrana girince (ya da komşusu girince) geçer. Antarktika hiç geçmez.
      list = feats.filter(function (f) { return !f.__hi && !BIG[f.properties.iso]; }).map(function (f) { return f.properties.iso; });
      background = true;
    }
    var batch = list.slice(0, background ? 6 : 12);
    batch.forEach(function (iso) {
      var i = idx[iso], f = feats[i], h = hiGeo[iso];
      if (!h || iso === "ATA") { f.__hi = true; return; }
      var nf = { type: "Feature", properties: f.properties, geometry: h.geometry, cap: h.cap, __hi: true, __el: f.__el };
      feats[i] = nf;
      if (S.selected === f) S.selected = nf;
      if (S.hover === f) S.hover = nf;
    });
    if (batch.length) globe.polygonsData(polyItems());
    if (list.length > batch.length || background && list.length) {
      upTimer = setTimeout(function () { upgradeStep(globe.pointOfView()); }, background ? 400 : 120);
    }
  }
  function htmlData() {
    if (!labelFeats) labelFeats = S.geo.features.filter(function (f) { return S.index[f.properties.iso]; });
    var out = labelFeats;
    Object.keys(PRODS).forEach(function (k) {
      if (!(LY[PRODS[k].ly] && S.regions && S.regions[k])) return;
      if (!regionObjs[k]) regionObjs[k] = S.regions[k].map(function (m) { return { w: m }; });
      out = out.concat(regionObjs[k]);
    });
    if (S.topOn && S.topObjs) out = out.concat(S.topObjs);
    return out;
  }

  // ------------------------------------------------------------ Ölmeden önce 10 yemek
  function loadTop() {
    if (!S.topLoading) S.topLoading = getJSON("data/top10.json").catch(function () { return null; });
    return S.topLoading;
  }
  function openTop() {
    loadTop().then(function (d) {
      if (!d || !d.items || !d.items.length) return;
      return Promise.all(d.items.map(function (it) { return loadCountry(it.iso); })).then(function (cs) {
        S.topCs = cs;
        var h = '<div class="top-h"><div class="top-k">🏆</div><h2>' + esc(t("top10")) + "</h2><p>" + esc(t("top10Sub")) + "</p>" +
          '<button class="rel-map top-map">🌍 ' + esc(t("top10Map")) + '</button></div><ol class="top-list">';
        d.items.forEach(function (it, i) {
          var c = cs[i], r = c && c.recipes.find(function (x) { return x.id === it.id; });
          if (!r) return;
          h += '<li><button class="top-i" data-iso="' + it.iso + '" data-id="' + esc(it.id) + '">' + photo(r.image, r.category, "top-ph") +
            '<span class="top-n">' + it.rank + '</span><span class="top-t"><b>' + esc(L(r.name)) + "</b><em>" + flag(iso2Of(it.iso)) + " " +
            esc(cname(it.iso)) + "</em><span>" + esc(L(it.why)) + "</span></span></button></li>";
        });
        h += "</ol>" + (d.sources && d.sources.length ? srcList(d.sources) : "") +
          '<div class="src">' + esc(t("researched", { d: d.date })) + "</div>";
        var body = document.getElementById("top-body");
        body.innerHTML = h;
        Array.prototype.forEach.call(body.querySelectorAll(".top-i"), function (b) {
          b.addEventListener("click", function () { closeTop(); openRecipe(b.dataset.iso, b.dataset.id); });
        });
        body.querySelector(".top-map").addEventListener("click", showTopOnMap);
        document.getElementById("topmodal").hidden = false;
      });
    });
  }
  function closeTop() { document.getElementById("topmodal").hidden = true; }
  function showTopOnMap() { closeTop(); setLens("top10"); }
  // "En İyi 10" merceği: kürede numaralı işaretler, sıralama kutusunda fotoğraflı liste
  function enterTop() {
    loadTop().then(function (d) {
      if (PREF.lens !== "top10" || !d || !d.items) return;
      S.top = d;
      S.topObjs = d.items.map(function (it) {
        var a = anchor(it.iso) || { lat: 0, lng: 0 };
        return { t: it, w: null, lat: a.lat, lng: a.lng };
      });
      S.topOn = true;
      applyLayers();
      labelEls.forEach(function (x) { applyLabel(x[0]); });
      renderRank();
      globe.controls().autoRotate = false;
      if (!S.country) globe.pointOfView({ lat: 22, lng: 25, altitude: window.innerWidth <= 720 ? 3.2 : 2.6 }, 1200);
    });
  }
  function topMark(o) {
    var d = document.createElement("div");
    d.className = "tmark";
    var n = S.names && S.names[o.t.iso + "/" + o.t.id];
    d.innerHTML = "<b>" + o.t.rank + "</b><span>" + esc(n ? (lang === "tr" ? n[2] : n[3]) : o.t.id) + "</span>";
    d.addEventListener("click", function (e) { e.stopPropagation(); openRecipe(o.t.iso, o.t.id); });
    return d;
  }
  function wineMark(m) {
    var d = document.createElement("div");
    d.className = "wmark wm-" + m[5];
    d.innerHTML = "<i></i><span>" + esc(m[0]) + "</span>";
    d.addEventListener("mouseenter", function (e) { showPtip(m, e.clientX, e.clientY); });
    d.addEventListener("mouseleave", function () { showPtip(null); });
    d.addEventListener("click", function (e) { e.stopPropagation(); showMcard(m); });
    m.__el = d;
    return d;
  }
  // [ad, "", ülke, enlem, boylam, kod (w/c/k), açıklama, çeşitler]: Michelin noktalarıyla aynı biçim
  var regLoading = {};
  function loadRegions(key) {
    if (regLoading[key]) return regLoading[key];
    S.regions = S.regions || {};
    regLoading[key] = getJSON(PRODS[key].file).then(function (d) {
      S.regions[key] = d.map(function (r) { return [r[0], "", r[1], r[2], r[3], PRODS[key].code, r[4], r[5]]; });
      if (key === "wine") S.wineRegions = S.regions[key];
      legend();
      return S.regions[key];
    }).catch(function () { S.regions[key] = []; return []; });
    return regLoading[key];
  }
  function loadWineRegions() { return loadRegions("wine"); }
  function loadMichelin() {
    if (S.mLoading) return S.mLoading;
    S.mLoading = getJSON("data/michelin.json").then(function (d) {
      S.michelin = d.items;
      S.michelinCount = {};
      d.items.forEach(function (m) { S.michelinCount[m[5]] = (S.michelinCount[m[5]] || 0) + 1; });
      legend(); renderRank();
      return d.items;
    }).catch(function () { S.michelin = []; showError(t("loadErr")); return []; });
    return S.mLoading;
  }

  // Michelin noktası: tıklanan konuma en yakın görünür nokta
  function nearestPoint(lat, lng, k) {
    if (!S.points || !S.points.length) return null;
    var alt = globe.pointOfView().altitude, thr = Math.max(0.08, alt * (k || 0.9)), best = null, bd = thr * thr;
    var cl = Math.cos(lat * Math.PI / 180);
    S.points.forEach(function (m) {
      var dy = m[3] - lat, dx = (((m[4] - lng) + 540) % 360 - 180) * cl, d = dx * dx + dy * dy;
      if (d < bd) { bd = d; best = m; }
    });
    return best;
  }
  // Üzerine gelince küçük bilgi: Michelin noktaları ve şarap bölgeleri
  function ptipHtml(m) {
    if (CODE2PROD[m[5]]) return '<span style="color:var(--accent)">' + PRODS[CODE2PROD[m[5]]].icon + "</span> <b>" + esc(m[0]) + "</b> <span>· " + esc(cname(m[2])) + "</span>";
    return '<span style="color:' + MCOL[m[5]] + '">' + (m[5] === "b" ? "Bib" : stars(m[5])) + "</span> <b>" + esc(m[0]) + "</b> <span>· " +
      esc([m[1], m[2] ? cname(m[2]) : ""].filter(Boolean).join(", ")) + "</span>";
  }
  function showPtip(m, x, y) {
    var t = document.getElementById("ptip");
    if (!m) { t.hidden = true; document.body.classList.remove("pt-hover"); return; }
    t.innerHTML = ptipHtml(m) + '<em>' + esc(t_("clickInfo")) + "</em>";
    t.style.left = x + 14 + "px"; t.style.top = y + 14 + "px";
    t.hidden = false;
    document.body.classList.add("pt-hover");
  }
  function t_(k) { return t(k); }
  var hoverRaf = 0;
  function bindPointHover() {
    var el = document.getElementById("globe");
    el.addEventListener("mousemove", function (e) {
      if (hoverRaf) return;
      hoverRaf = requestAnimationFrame(function () {
        hoverRaf = 0;
        if (!S.points || !S.points.length) { showPtip(null); return; }
        var r = el.getBoundingClientRect(), c = globe.toGlobeCoords(e.clientX - r.left, e.clientY - r.top);
        var m = c && nearestPoint(c.lat, c.lng, 0.35);
        showPtip(m, e.clientX, e.clientY);
        if (m) el.style.cursor = "pointer";
      });
    });
    el.addEventListener("mouseleave", function () { showPtip(null); });
  }
  function stars(a) { return a === "b" ? "Bib" : new Array(a + 1).join("★"); }
  function showMcard(m) {
    var c = document.getElementById("mcard");
    if (CODE2PROD[m[5]]) {
      c.innerHTML = '<button class="close" aria-label="' + esc(t("close")) + '">×</button>' +
        '<div class="mc-a" style="color:var(--accent)">' + PRODS[CODE2PROD[m[5]]].icon + " " + esc(t(CODE2PROD[m[5]] + "Regions")) + "</div><b>" + esc(m[0]) + "</b><span>" + esc(cname(m[2])) + "</span>" +
        (L(m[6]) ? "<span>" + esc(L(m[6])) + "</span>" : "") + (m[7] && m[7].length ? "<span>🍇 " + esc(m[7].join(", ")) + "</span>" : "") +
        '<button class="mc-c" data-iso="' + m[2] + '">' + esc(t("openCountry")) + " →</button>";
      c.hidden = false;
      c.querySelector(".close").addEventListener("click", hideMcard);
      bindCardCountry(c);
      if (S.mSel && S.mSel.__el) S.mSel.__el.classList.remove("on");
      S.mSel = m;
      if (m.__el) m.__el.classList.add("on");
      return;
    }
    c.innerHTML = '<button class="close" aria-label="' + esc(t("close")) + '">×</button>' +
      '<div class="mc-a" style="color:' + MCOL[m[5]] + '">' + (m[5] === "b" ? esc(t("bib")) : stars(m[5]) + " " + esc(t("star" + m[5]))) + "</div>" +
      "<b>" + esc(m[0]) + "</b><span>" + esc([m[1], m[2] ? cname(m[2]) : ""].filter(Boolean).join(", ")) + "</span>" +
      (m[6] ? "<span>" + esc(m[6]) + "</span>" : "") +
      (m[7] ? '<a href="' + esc(m[7]) + '" target="_blank" rel="noopener">' + esc(t("openGuide")) + " ↗</a>" : "") +
      (m[2] ? '<button class="mc-c" data-iso="' + m[2] + '">' + esc(t("openCountry")) + " →</button>" : "");
    c.hidden = false;
    c.querySelector(".close").addEventListener("click", hideMcard);
      bindCardCountry(c);
    S.mSel = m;
    globe.pointsData(S.points);
  }
  function bindCardCountry(c) {
    var b = c.querySelector(".mc-c");
    if (b) b.addEventListener("click", function () { var iso = b.dataset.iso; hideMcard(); selectCountry(iso, false); });
  }
  function hideMcard() {
    var c = document.getElementById("mcard");
    if (c) c.hidden = true;
    if (S.mSel && S.mSel.__el) S.mSel.__el.classList.remove("on");
    if (S.mSel) { S.mSel = null; if (globe && S.points) globe.pointsData(S.points); }
  }
  // Tıklanan ekran noktasındaki ülke: konum hesaplanır, ülke sınırlarıyla (nokta-çokgen testi) eşleştirilir
  function inRing(x, y, r) {
    var inside = false;
    for (var i = 0, j = r.length - 1; i < r.length; j = i++) {
      var xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  function featureAt(lat, lng) {
    var feats = S.geo.features;
    for (var i = 0; i < feats.length; i++) {
      var f = feats[i], g = f.geometry;
      var b = f.__bb || (f.__bb = bboxOf(g));
      if (lng < b[0] || lng > b[2] || lat < b[1] || lat > b[3]) continue;
      var polys = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
      for (var k = 0; k < polys.length; k++) {
        var pl = polys[k], ins = false;
        for (var q = 0; q < pl.length; q++) if (inRing(lng, lat, pl[q])) ins = !ins;   // delikler çift-tek kuralıyla
        if (ins) return f;
      }
    }
    return null;
  }
  // Michelin noktası yalnızca ekranda gerçekten yakınsa seçilir (piksel cinsinden)
  function pointNear(lat, lng, x, y, tol) {
    var m = nearestPoint(lat, lng);
    if (!m) return null;
    var c = globe.getScreenCoords(m[3], m[4], GROUND);
    return c && Math.hypot(c.x - x, c.y - y) <= tol ? m : null;
  }
  function bindClick() {
    var el = document.getElementById("globe"), down = null;
    el.addEventListener("pointerdown", function (e) {
      down = e.isPrimary ? { x: e.clientX, y: e.clientY, t: Date.now(), touch: e.pointerType !== "mouse" } : null;
    });
    el.addEventListener("pointerup", function (e) {
      var d = down; down = null;
      if (!d || e.button > 0 || e.target.closest(".wmark, .tmark")) return;
      // Küçük kaymaya tolerans: fare 5 px, dokunmatik 10 px (süre sınırı yok: yavaş cihazda olaylar gecikebiliyor)
      if (Math.hypot(e.clientX - d.x, e.clientY - d.y) > (d.touch ? 10 : 5)) return;
      var r = el.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      var c = globe.toGlobeCoords(x, y);
      if (!c) return;                                   // kürenin dışı (uzay)
      if (S.relBack) hideRelMap();
      var m = pointNear(c.lat, c.lng, x, y, d.touch ? 18 : 10);
      if (m) { showMcard(m); return; }
      clickAt(c, featureAt(c.lat, c.lng));
    });
  }
  function clickAt(coords, f) {
    if (S.relBack) hideRelMap();
    hideMcard();
    if (f) selectCountry(f.properties.iso, true); else closePanel();
  }
  // Sıralama kutusu: seçili merceğe göre (puan, üretim, Michelin yıldızı ya da 10 yemek)
  function rankList() {
    var l = PREF.lens;
    if (l === "michelin") {
      if (!S.michelin) return null;
      var by = {};
      S.michelin.forEach(function (m) { if (m[5] !== "b" && m[2]) by[m[2]] = (by[m[2]] || 0) + m[5]; });
      return Object.keys(by).filter(function (k) { return S.index[k]; }).map(function (k) { return { c: S.index[k], v: by[k] }; })
        .sort(function (a, b) { return b.v - a.v; });
    }
    var prod = PRODS[l] ? l : null;
    return Object.keys(S.index).map(function (k) { return S.index[k]; })
      .filter(function (c) { return prod ? c[prod] : c.score != null; })
      .map(function (c) { return { c: c, v: prod ? c[prod] : c.score }; })
      .sort(function (a, b) { return b.v - a.v || cname(a.c.iso3).localeCompare(cname(b.c.iso3), lang); });
  }
  function renderRank() {
    var box = document.getElementById("rank");
    if (!box) return;
    var l = PREF.lens, open = rankOpen();
    if (!open) { box.hidden = true; return; }
    if (l === "top10") return renderTopRank(box);
    var list = rankList();
    if (!list || !list.length) { box.hidden = true; return; }
    box.hidden = false;
    var prod = PRODS[l] ? l : null, mich = l === "michelin";
    var title = mich ? "rankMichelin" : prod ? "rank" + l.charAt(0).toUpperCase() + l.slice(1) : "rankScore";
    var all = !!S.rankAll, shown = all ? list : list.slice(0, 10), rank = 0, prev = null;
    var h = '<div class="rk-h"><b>' + LENS_ICON[l] + " " + esc(t(title)) + '</b><button class="rk-x" aria-label="' + esc(t("close")) + '">×</button></div><ol class="rk-list">';
    shown.forEach(function (o, i) {
      var c = o.c, v = o.v;
      if (v !== prev) { rank = i + 1; prev = v; }        // eşit değerler aynı sırayı paylaşır
      var col = mich ? "#9fd8ff" : prod ? prodColor(l, v) : scoreColor(v);
      var val = mich ? v + " ★" : prod ? new Intl.NumberFormat(lang, { notation: "compact", maximumFractionDigits: 1 }).format(v) + " t" : v;
      h += '<li><button data-iso="' + c.iso3 + '"' + (S.country && S.country.iso3 === c.iso3 ? ' class="on"' : "") + '><span class="rk-n">' + rank +
        '</span><span class="rk-f">' + flag(c.iso2) + '</span><span class="rk-c">' + esc(cname(c.iso3)) +
        '</span><span class="rk-v" style="--c:' + col + (prod && v > 60000 ? ";color:#fff" : "") + '">' + val + "</span></button></li>";
    });
    h += "</ol>" + (list.length > 10 ? '<button class="rk-toggle">' + esc(all ? t("showTop") : t("showAll", { n: list.length })) + "</button>" : "");
    box.innerHTML = h;
    var tg = box.querySelector(".rk-toggle");
    if (tg) tg.addEventListener("click", function () { S.rankAll = !S.rankAll; renderRank(); });
    box.querySelector(".rk-x").addEventListener("click", function () { S.rkOpen = false; renderRank(); legend(); });
    Array.prototype.forEach.call(box.querySelectorAll("[data-iso]"), function (b) {
      b.addEventListener("click", function () { selectCountry(b.dataset.iso, true); });
    });
  }
  function renderTopRank(box) {
    var d = S.top;
    if (!d) { box.hidden = true; return; }
    box.hidden = false;
    var h = '<div class="rk-h"><b>🏆 ' + esc(t("top10")) + '</b><button class="rk-x" aria-label="' + esc(t("close")) + '">×</button></div><ol class="rk-list rk-top">';
    d.items.forEach(function (it) {
      var n = S.names && S.names[it.iso + "/" + it.id];
      h += '<li><button data-iso="' + it.iso + '" data-id="' + esc(it.id) + '"><span class="rk-n tn">' + it.rank + '</span><span class="rk-c"><b>' +
        esc(n ? (lang === "tr" ? n[2] : n[3]) : it.id) + "</b><em>" + flag(iso2Of(it.iso)) + " " + esc(cname(it.iso)) + "</em></span></button></li>";
    });
    box.innerHTML = h + '</ol><button class="rk-toggle" data-act="toplist">📜 ' + esc(t("top10Open")) + "</button>";
    box.querySelector(".rk-x").addEventListener("click", function () { S.rkOpen = false; renderRank(); legend(); });
    box.querySelector(".rk-toggle").addEventListener("click", openTop);
    Array.prototype.forEach.call(box.querySelectorAll("[data-id]"), function (b) {
      b.addEventListener("click", function () { openRecipe(b.dataset.iso, b.dataset.id); });
    });
  }
  function stats() {
    var c = 0, r = 0;
    Object.keys(S.index).forEach(function (k) { if (S.index[k].recipes) { c++; r += S.index[k].recipes; } });
    return r ? t("stats", { c: c, r: r.toLocaleString(lang) }) : "";
  }

  // ------------------------------------------------------------ küre
  function has(f) { var c = S.index[f.properties.iso]; return !!(c && (c.recipes || c.signature || c.score != null)); }
  // Küreye verilen çokgen öğeleri. Büyük ülkelerde dolgu ("cap": yırtılmaya karşı parçalanmış geometri) ve sınır çizgisi
  // (özgün geometri, dolgusuz) iki ayrı öğedir; böylece parça kenarlarına çizgi çizilmez. Bkz. scripts/build_geo.py
  function polyItems() {
    var out = [];
    S.geo.features.forEach(function (f) {
      if (!f.__items) {
        f.__items = f.cap
          ? [{ __f: f, __k: "cap", geometry: f.cap }, { __f: f, __k: "line", geometry: f.geometry }]
          : [{ __f: f, __k: "both", geometry: f.geometry }];
      }
      out.push.apply(out, f.__items);
    });
    return out;
  }
  function capColor(d) {
    if (d.__k === "line") return null;
    var f = d.__f, c = S.index[f.properties.iso], lift = f === S.selected ? 0.35 : f === S.hover ? 0.2 : 0;
    // Ürün modlarında üretimi olmayan ülkeler mavi-gri: kahverengi ölçekle karışmasın
    var blank = f === S.selected ? "#6a5442" : f === S.hover ? "#4a3d33" : LY.color === "none" ? "#3a2e25" : PRODS[LY.color] ? "#2e3743" : "#2b231d";
    if (PRODS[LY.color]) return c && c[LY.color] ? prodColor(LY.color, c[LY.color], lift) : blank;
    if (LY.color !== "score" || !c || c.score == null) return blank;
    return scoreColor(c.score, lift);
  }
  // Üzerine gelince ülke etiketinin ikinci kısmı seçili merceğe göre: şarap merceğinde şarap üretimi, Michelin'de yıldız vb.
  function tipSub(iso, c) {
    if (!c) return "";
    var l = PREF.lens, P = PRODS[l];
    if (P) return " <span>· " + P.icon + " " + (c[l] ? esc(fmtTonnes(c[l])) : esc(t("noWine"))) + "</span>";
    if (l === "spice") return c.spice ? " <span>· 🌶️ " + esc(L(c.spice)) + "</span>" : "";
    if (l === "sauce") return c.sauce ? " <span>· 🥣 " + esc(L(c.sauce)) + "</span>" : "";
    if (l === "michelin") {
      if (!S.michelin) return "";
      if (!S.mStars) { S.mStars = {}; S.michelin.forEach(function (m) { if (m[5] !== "b" && m[2]) S.mStars[m[2]] = (S.mStars[m[2]] || 0) + m[5]; }); }
      return " <span>· " + esc(S.mStars[iso] ? t("michStars", { n: S.mStars[iso] }) : t("noMich")) + "</span>";
    }
    return (c.score != null ? " · <b>" + c.score + "</b>" : "") + (c.top ? " <span>· " + esc(t("sigShort")) + ": " + esc(L(c.top)) + "</span>" : "");
  }
  function applyLabel(el) {
    el.style.visibility = !S.topOn && LY.text !== "off" && el.textContent && el.dataset.front !== "0" && +el.dataset.rank <= labelRank ? "visible" : "hidden";
  }
  function initGlobe() {
    var el = document.getElementById("globe");
    globe = Globe()(el)
      .backgroundColor("#120d0a")
      .showAtmosphere(true).atmosphereColor("#f0a23b").atmosphereAltitude(0.16)
      .polygonsData(polyItems())
      // Düşük kabartma: yakınlaşınca adaların yan duvarları gölge şeridi gibi görünmesin
      // Tüm katmanlar aynı yükseklikte: ülke yüzeyi ile noktalar/işaretler arasında açıyla bakınca kayma (paralaks) olmasın.
      // Seçim ve üzerine gelme yükseklikle değil renkle gösterilir.
      .polygonAltitude(GROUND)
      .polygonCapColor(capColor)
      .polygonSideColor(function (d) { return d.__k === "cap" ? null : "rgba(20,12,6,0.55)"; })
      .polygonStrokeColor(function (d) { return d.__k === "cap" ? null : "rgba(18,13,10,0.9)"; })
      .polygonLabel(function (d) {
        var f = d.__f;
        var c = S.index[f.properties.iso];
        var sub = tipSub(f.properties.iso, c);
        return '<div class="tip">' + flag(iso2Of(f.properties.iso)) + " " + esc(cname(f.properties.iso)) + sub + "</div>";
      })
      .onPolygonHover(function (d) { var f = d ? d.__f : null; if (f === S.hover) return; S.hover = f; el.style.cursor = f ? "pointer" : "grab"; refresh(); })
      // Tıklama globe.gl'e bırakılmaz (bkz. bindClick): kütüphane tıklanan nesneyi 50 ms'de bir güncellenen
      // "üzerinde durulan" bilgisinden alıyor; dokunmatik ekranda ilk dokunuş boşa gidiyordu.
      .pointsData([])
      .pointLat(function (m) { return m[3]; })
      .pointLng(function (m) { return m[4]; })
      .pointColor(function (m) { return m === S.mSel ? "#ff2d55" : MCOL[m[5]]; })
      // Düz diskler: yakından bakınca kule gibi görünmesinler
      .pointAltitude(function (m) { return m === S.mSel ? GROUND + 0.004 : GROUND + 0.0002; })
      .pointRadius(function (m) { return m === S.mSel ? 0.12 : m[5] === "b" ? 0.05 : 0.05 + m[5] * 0.015; })
      .pointResolution(10)
      .pointsMerge(true)
      .pointsTransitionDuration(0)
      .polygonsTransitionDuration(200)
      .htmlElementsData(htmlData())
      .htmlLat(function (f) { return f.t ? f.lat : f.w ? f.w[3] : f.properties.ly; })
      .htmlLng(function (f) { return f.t ? f.lng : f.w ? f.w[4] : f.properties.lx; })
      .htmlAltitude(function () { return GROUND + 0.0004; })
      .htmlElement(function (f) {
        if (f.__el) return f.__el;
        if (f.t) return (f.__el = topMark(f));
        if (f.w) return (f.__el = wineMark(f.w));
        var d = document.createElement("div");
        f.__el = d;
        d.className = "clabel r" + Math.min(6, f.properties.rank || 6);
        d.textContent = labelText(f);
        d.dataset.rank = f.properties.rank || 9;
        labelEls.push([d, f]);
        return d;
      })
      .htmlElementVisibilityModifier(function (d, v) {
        d.dataset.front = v ? "1" : "0";
        if (d.classList.contains("wmark") || d.classList.contains("tmark")) d.style.visibility = v ? "visible" : "hidden"; else applyLabel(d);
      })
      .onZoom(function (pov) {
        el.classList.toggle("zoomed", pov.altitude < 0.9);
        if (pov.altitude < 1.4) upgradeGeo(pov);
        var r = pov.altitude > 2.2 ? 2 : pov.altitude > 1.5 ? 3 : pov.altitude > 1.0 ? 4 : pov.altitude > 0.6 ? 5 : 9;
        if (r !== labelRank) { labelRank = r; labelEls.forEach(function (x) { applyLabel(x[0]); }); }
      });
    var mat = globe.globeMaterial();
    mat.color.set("#1d3040");
    if (mat.emissive) mat.emissive.set("#0c1620");
    mat.shininess = 6;
    globe.pointOfView({ lat: 34, lng: 28, altitude: 2.1 }, 0);
    var ctl = globe.controls();
    // Kullanıcı küreye dokunduğu an (sürükleme, yakınlaştırma, tıklama) dönme kalıcı olarak durur
    ctl.addEventListener("start", function () { ctl.autoRotate = false; });
    el.addEventListener("wheel", function () { ctl.autoRotate = false; }, { passive: true });
    ctl.autoRotate = true; ctl.autoRotateSpeed = 0.3; ctl.minDistance = 130; ctl.maxDistance = 600;
    function size() { globe.width(window.innerWidth).height(window.innerHeight); }
    window.addEventListener("resize", size);
    size();
  }
  function refresh() { globe.polygonAltitude(globe.polygonAltitude()).polygonCapColor(globe.polygonCapColor()); }

  function centroid(f) {
    var g = f.geometry, rings = g.type === "Polygon" ? [g.coordinates[0]] : g.coordinates.map(function (p) { return p[0]; });
    rings.sort(function (a, b) { return b.length - a.length; });
    var r = rings[0], x = 0, y = 0, a = 180, b = -180, c = 90, d = -90;
    r.forEach(function (p) { x += p[0]; y += p[1]; a = Math.min(a, p[0]); b = Math.max(b, p[0]); c = Math.min(c, p[1]); d = Math.max(d, p[1]); });
    return { lng: x / r.length, lat: y / r.length, span: Math.max(b - a, d - c) };
  }

  // ------------------------------------------------------------ ülke paneli
  function selectCountry(iso, fly) {
    var f = S.geo.features.find(function (x) { return x.properties.iso === iso; });
    S.selected = f || null;
    S.filter = ""; S.cat = "";
    globe.controls().autoRotate = false;
    if (f && fly !== false) {
      var c = centroid(f), mobile = isMobile(), alt = Math.max(1.15, Math.min(2.3, c.span / 18));
      globe.pointOfView({ lat: c.lat - (mobile ? alt * 9 : 0), lng: c.lng + (mobile ? 0 : 10), altitude: alt }, 1000);
    }
    if (!document.getElementById("intro").hidden) endIntro();
    var p = document.getElementById("panel");
    p.classList.add("open"); p.setAttribute("aria-hidden", "false");
    if (!S.country || S.country.iso3 !== iso) sheet("half");
    document.body.classList.add("panel-open");
    refresh();
    return loadCountry(iso).then(function (c) {
      S.country = c || { iso3: iso, missing: true };
      S.tab = lensTab(S.country);
      S.sub = PRODS[PREF.lens] ? PREF.lens : null;
      renderPanel();
      document.getElementById("panel-body").scrollTop = 0;
      setHash();
      return S.country;
    });
  }
  function loadCountry(iso) {
    if (S.cache[iso] !== undefined) return Promise.resolve(S.cache[iso]);
    if (!S.index[iso]) { S.cache[iso] = null; return Promise.resolve(null); }
    return getJSON("data/countries/" + iso + ".json").then(function (c) { S.cache[iso] = c; return c; })
      .catch(function () { showError(t("loadErr")); return null; });
  }
  function closePanel() {
    if (!S.country && !S.selected) return;
    S.selected = null; S.country = null;
    var p = document.getElementById("panel");
    p.classList.remove("open", "full"); p.setAttribute("aria-hidden", "true");
    document.body.classList.remove("panel-open");
    refresh();
    renderRank();
    setHash();
  }

  function bars(block, kind) {
    if (!block || !block.items || !block.items.length) return '<div class="nodata">' + esc(t("noFao")) + "</div>";
    var max = block.items[0].value || 1;
    var color = kind === "exp" ? "var(--accent-2)" : "var(--leaf)";
    return '<div class="bars">' + block.items.map(function (it) {
      return '<div class="bar" style="--c:' + color + '"><span title="' + esc(L(it.name)) + '">' + esc(L(it.name)) + "</span><b>" +
        (kind === "exp" ? fmtUSD(it.value) : fmtTonnes(it.value)) + '</b><i style="--w:' + Math.max(2, it.value / max * 100).toFixed(1) + '%"></i></div>';
    }).join("") + '</div><div class="src">' + esc(t("faoSrc", { y: block.year })) + "</div>";
  }

  function worldRank(iso) {
    var mine = S.index[iso] && S.index[iso].score, n = 0, better = 0;
    Object.keys(S.index).forEach(function (k) {
      var v = S.index[k].score;
      if (v == null) return;
      n++;
      if (v > mine) better++;
    });
    return { rank: better + 1, n: n };
  }
  function scoreCard(c) {
    var v = c.score.score, col = scoreColor(v), wr = worldRank(c.iso3);
    var R = 42, C = 2 * Math.PI * R, off = C * (1 - v / 100);
    var tier = v >= 90 ? "tier1" : v >= 75 ? "tier2" : v >= 55 ? "tier3" : "tier4";
    var medal = wr.rank === 1 ? "🥇 " : wr.rank === 2 ? "🥈 " : wr.rank === 3 ? "🥉 " : "";
    return '<div class="sc" style="--sc:' + col + '">' +
      '<div class="sc-ring"><svg viewBox="0 0 100 100" aria-hidden="true">' +
      '<circle cx="50" cy="50" r="' + R + '" class="sc-track"/>' +
      '<circle cx="50" cy="50" r="' + R + '" class="sc-arc" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + C.toFixed(1) + '" data-off="' + off.toFixed(1) + '"/></svg>' +
      '<div class="sc-num"><b>' + v + "</b><span>/100</span></div></div>" +
      '<div class="sc-body"><div class="sc-kick">' + esc(t("scoreKicker")) + '</div><div class="sc-tier">' + esc(t(tier)) + "</div>" +
      '<div class="sc-rank">' + medal + esc(t("worldRank")) + ": <b>" + wr.rank + ".</b> <span>" + esc(t("of", { n: wr.n })) + "</span></div>" +
      '<p>' + esc(L(c.score.why)) + "</p><small>" + esc(t("scoreTitle")) + " · " + esc(t("scoreAI")) + "</small></div></div>";
  }
  function animateScore() {
    var a = document.querySelector("#panel-body .sc-arc");
    if (!a) return;
    requestAnimationFrame(function () { requestAnimationFrame(function () { a.style.strokeDashoffset = a.dataset.off; }); });
  }
  function renderPanel() {
    var c = S.country, head = document.getElementById("panel-head"), body = document.getElementById("panel-body");
    if (!c) return;
    var nrec = (c.recipes || []).length, idx = S.index[c.iso3] || {};
    var tabs = [["genel", esc(t("tab_genel"))]];
    var prods = c.missing ? [] : Object.keys(PRODS).filter(function (k) { return c[k]; });
    if (!c.missing) {
      if (nrec) tabs.push(["tarif", esc(t("tab_tarif")) + " <em>" + nrec + "</em>"]);
      // Tek ürün varsa adıyla, birden çoksa simgeleriyle (dock'taki simgelerle aynı)
      if (prods.length) tabs.push(["icecek", prods.map(function (k) { return esc(t("lens_" + k)); }).join(" · ")]);
      tabs.push(["restoran", esc(t("tab_restoran"))]);
      if (c.production || c.exports) tabs.push(["tarim", esc(t("tab_tarim"))]);
    }
    if (!tabs.some(function (x) { return x[0] === S.tab; })) S.tab = "genel";
    if (prods.indexOf(S.sub) < 0) S.sub = prods[0];
    head.innerHTML = '<div class="c-head"><div class="c-flag">' + flag(iso2Of(c.iso3)) + '</div><div class="c-t"><h2>' + esc(cname(c.iso3)) + "</h2><p>" +
      (idx.score != null ? '<span class="c-sc" title="' + esc(t("scoreKicker")) + '" style="--c:' + scoreColor(idx.score) + '">' + esc(t("scoreKicker")) + " " + idx.score + "</span>" : "") +
      (idx.top ? "<span>" + esc(t("sigShort")) + ": " + esc(L(idx.top)) + "</span>" : "") + "</p></div></div>" +
      (tabs.length > 1 ? '<div class="tabs" role="tablist">' + tabs.map(function (x) {
        return '<button role="tab" class="tab' + (S.tab === x[0] ? " on" : "") + '" data-tab="' + x[0] + '" aria-selected="' + (S.tab === x[0]) + '">' + x[1] + "</button>";
      }).join("") + "</div>" : "");
    Array.prototype.forEach.call(head.querySelectorAll(".tab"), function (b) {
      b.addEventListener("click", function () { setTab(b.dataset.tab); });
    });
    renderBody();
  }
  function setTab(k) {
    S.tab = k;
    var head = document.getElementById("panel-head");
    Array.prototype.forEach.call(head.querySelectorAll(".tab"), function (x) {
      x.classList.toggle("on", x.dataset.tab === k); x.setAttribute("aria-selected", x.dataset.tab === k);
    });
    var on = head.querySelector(".tab.on"), tb = head.querySelector(".tabs");
    if (on && tb && (on.offsetLeft < tb.scrollLeft || on.offsetLeft + on.offsetWidth > tb.scrollLeft + tb.clientWidth)) tb.scrollLeft = on.offsetLeft - 16;
    renderBody();
    document.getElementById("panel-body").scrollTop = 0;
  }
  function renderBody() {
    var c = S.country, body = document.getElementById("panel-body"), nrec = (c.recipes || []).length;
    var prods = c.missing ? [] : Object.keys(PRODS).filter(function (k) { return c[k]; });
    var h = "";
    if (c.missing) {
      body.innerHTML = '<div class="sec"><div class="nodata">' + esc(t("noData")) + "</div></div>";
      return;
    }
    if (S.tab === "genel") {
      if (c.score) h += scoreCard(c);
      if (c.signature && c.signature.length) {
        h += '<section class="sec"><h3>' + esc(t("signature")) + '</h3><div class="sig">' + c.signature.slice(0, 6).map(function (s) {
          return '<div class="sig-card">' + photo(s.image, "", "") + '<div class="t"><b>' + esc(L(s.name)) + "</b>" +
            (s.native && s.native !== L(s.name) ? "<i>" + esc(s.native) + "</i>" : "") + "<p>" + esc(L(s.desc)) + "</p></div></div>";
        }).join("") + "</div></section>";
      }
      if (nrec) h += '<button class="go-rec" data-go="tarif">📖 ' + esc(t("goRecipes", { n: nrec })) + " →</button>";
      h += flav(c.spices, "spices", "🌶️") + flav(c.sauces, "sauces", "🥣");
    } else if (S.tab === "tarif") {
      h += recSec(c);
    } else if (S.tab === "icecek") {
      if (prods.length > 1) h += '<div class="seg">' + prods.map(function (k) {
        return '<button class="' + (S.sub === k ? "on" : "") + '" data-sub="' + k + '">' + PRODS[k].icon + " " + esc(t("lens_" + k)) + "</button>";
      }).join("") + "</div>";
      h += prodSec(c, S.sub);
    } else if (S.tab === "restoran") {
      var ms = '<section class="sec" id="msec"></section>', rs = restSec(c);
      h += PREF.lens === "michelin" ? ms + rs : rs + ms;
    } else if (S.tab === "tarim") {
      h += '<section class="sec"><h3>' + esc(t("production")) + "</h3>" + bars(c.production, "prod") + "</section>";
      h += '<section class="sec"><h3>' + esc(t("exports")) + "</h3>" + bars(c.exports, "exp") + "</section>";
    }
    body.innerHTML = h;
    Array.prototype.forEach.call(body.querySelectorAll("[data-go]"), function (b) {
      b.addEventListener("click", function () { setTab(b.dataset.go); });
    });
    Array.prototype.forEach.call(body.querySelectorAll("[data-sub]"), function (b) {
      b.addEventListener("click", function () { S.sub = b.dataset.sub; renderBody(); });
    });
    if (S.tab === "tarif") bindRecSec(body);
    if (S.tab === "restoran") renderMichelin(c.iso3);
    if (S.tab === "genel") animateScore();
    Array.prototype.forEach.call(body.querySelectorAll(".wreg"), function (b) {
      b.addEventListener("click", function () {
        var key = b.dataset.k || "wine", r = c[key].regions[+b.dataset.i];
        if (!PREF.regions) { PREF.regions = true; savePrefs(); }
        if (PREF.lens !== key) setLens(key); else { deriveLY(); legend(); }
        sheet("half");
        loadRegions(key).then(function () {
          applyLayers();
          var m = (S.regions[key] || []).find(function (x) { return x[2] === c.iso3 && x[0] === r.name; });
          flyTo(r.lat, r.lng, 0.5);
          if (m) showMcard(m);
        });
      });
    });
  }
  // Seçili noktaya uç: masaüstünde panelin solunda, telefonda yarım sayfanın üstünde kalsın
  function flyTo(lat, lng, alt) {
    var mobile = window.innerWidth <= 720;
    globe.pointOfView({ lat: lat - (mobile ? alt * 3.2 : 0), lng: lng + (mobile ? 0 : alt * 6), altitude: alt }, 1200);
  }
  function flav(list, key, icon) {
    if (!list || !list.length) return "";
    return '<section class="sec"><h3>' + esc(t(key)) + '</h3><div class="flv">' + list.map(function (x) {
      return '<div class="flv-i"><span>' + icon + "</span><div><b>" + esc(L(x.name)) + "</b>" + (L(x.desc) ? "<p>" + esc(L(x.desc)) + "</p>" : "") + "</div></div>";
    }).join("") + "</div></section>";
  }
  function recSec(c) {
    var h = '<section class="sec" id="rsec">';
    if (!c.recipes || !c.recipes.length) return h + '<div class="nodata">' + esc(t("noRecipes")) + "</div></section>";
    var cats = [];
    c.recipes.forEach(function (r) { if (cats.indexOf(r.category) < 0) cats.push(r.category); });
    h += '<div class="r-tools"><input id="rfilter" type="search" placeholder="' + esc(t("filter")) + '" value="' + esc(S.filter) + '"></div>';
    h += '<div class="chips"><button class="chip' + (S.cat ? "" : " on") + '" data-cat="">' + esc(t("all")) + "</button>" +
      cats.map(function (k) { return '<button class="chip' + (S.cat === k ? " on" : "") + '" data-cat="' + k + '">' + (CAT_ICON[k] || "") + " " + esc(t("cat." + k)) + "</button>"; }).join("") + "</div>";
    return h + '<div id="rlist"></div></section>';
  }
  function bindRecSec(body) {
    var inp = document.getElementById("rfilter");
    if (inp) inp.addEventListener("input", function () { S.filter = inp.value; renderList(); });
    Array.prototype.forEach.call(body.querySelectorAll(".chip"), function (b) {
      b.addEventListener("click", function () {
        S.cat = b.dataset.cat;
        Array.prototype.forEach.call(body.querySelectorAll(".chip"), function (x) { x.classList.toggle("on", x === b); });
        renderList();
      });
    });
    renderList();
  }

  // Telefonda panel alttan açılan sayfa: yarım ya da tam. Tutamaçtan sürüklenir, içerik kaydırılınca tama geçer.
  function isMobile() { return window.innerWidth <= 720; }
  function sheet(state) {
    var p = document.getElementById("panel");
    p.classList.toggle("full", state === "full");
  }
  function bindSheet() {
    var p = document.getElementById("panel"), body = document.getElementById("panel-body");
    var y0 = null, base = 0, dy = 0;
    p.addEventListener("pointerdown", function (e) {
      if (!isMobile() || !e.target.closest(".p-grab, .c-head")) return;
      y0 = e.clientY; dy = 0;
      base = p.classList.contains("full") ? 0 : p.offsetHeight - window.innerHeight * 0.56;
      p.style.transition = "none";
      try { p.setPointerCapture(e.pointerId); } catch (x) { /* yok */ }
    });
    p.addEventListener("pointermove", function (e) {
      if (y0 == null) return;
      dy = e.clientY - y0;
      p.style.transform = "translateY(" + Math.max(0, base + dy) + "px)";
    });
    function end() {
      if (y0 == null) return;
      y0 = null;
      p.style.transition = ""; p.style.transform = "";
      var full = p.classList.contains("full");
      if (Math.abs(dy) < 6) sheet(full ? "half" : "full");
      else if (dy < -50) sheet("full");
      else if (dy > 60) { if (full) sheet("half"); else closePanel(); }
    }
    p.addEventListener("pointerup", end);
    p.addEventListener("pointercancel", end);
    body.addEventListener("scroll", function () {
      if (isMobile() && body.scrollTop > 12 && !p.classList.contains("full")) sheet("full");
    }, { passive: true });
  }

  function srcList(src) {
    if (!src || !src.length) return "";
    return '<details class="srcs"><summary>' + esc(t("sources")) + " (" + src.length + ")</summary>" + src.map(function (x) {
      return '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.title) + "</a>";
    }).join("") + "</details>";
  }
  function fmtN(v) { return new Intl.NumberFormat(lang).format(Math.round(v)); }
  // Şarap / kahve / kakao bölümü (aynı yapı)
  function prodSec(c, key) {
    var w = c[key], P = PRODS[key];
    if (!w) return "";
    var vars = w.varieties || w.grapes || [];
    var T = key === "wine" ? { title: "wineTitle", prod: "wineProd", exp: "wineExp", vr: "grapes", st: "wineStyles" }
      : { title: key + "Title", prod: key + "Prod", exp: key + "Exp", vr: key + "Var", st: key + "Styles" };
    var h = '<section class="sec wine prod-' + key + '"><h3>' + P.icon + " " + esc(t(T.title)) + "</h3>";
    if (w.production) h += '<div class="w-prod">' + esc(t(T.prod, { v: fmtN(w.production.value), y: w.production.year, r: w.production.rank })) +
      (w.exports ? "<br>" + esc(t(T.exp, { v: fmtUSD(w.exports.value), y: w.exports.year })) : "") + "</div>";
    if (w.summary && L(w.summary)) h += '<p class="w-sum">' + esc(L(w.summary)) + "</p>";
    if (vars.length) h += "<h4>" + esc(t(T.vr)) + '</h4><div class="grapes">' + vars.map(function (g) {
      return '<span class="grape ' + g.type + '" title="' + esc(L(g.desc)) + '">' + esc(g.name) + (g.native ? " <em>" + esc(t("native")) + "</em>" : "") + "</span>";
    }).join("") + "</div>";
    if (w.regions && w.regions.length) h += "<h4>" + esc(t("regionsT")) + '</h4><div class="wregs">' + w.regions.map(function (r, i) {
      return '<button class="wreg" data-k="' + key + '" data-i="' + i + '"><b>' + esc(r.name) + "</b>" + esc(L(r.desc)) + "</button>";
    }).join("") + "</div>";
    if (w.styles && w.styles.length) h += "<h4>" + esc(t(T.st)) + "</h4>" + w.styles.map(function (x) {
      return '<div class="wsty"><b>' + esc(typeof x.name === "string" ? x.name : L(x.name)) + "</b> " + esc(L(x.desc)) + "</div>";
    }).join("");
    if (w.date) h += '<div class="src">' + esc(t("researched", { d: w.date })) + "</div>" + srcList(w.sources);
    return h + "</section>";
  }
  function wineSec(c) { return prodSec(c, "wine"); }
  function restSec(c) {
    var r = c.restaurants;
    if (!r || !r.restaurants || !r.restaurants.length) return "";
    return '<section class="sec"><h3>🍽️ ' + esc(t("restTitle")) + '</h3><div class="glist">' + r.restaurants.map(function (x) {
      return '<a class="grow" href="' + esc(x.url) + '" target="_blank" rel="noopener"><span class="gr">' + new Array(x.price + 1).join("$") +
        "</span><span><b>" + esc(x.name) + "</b>" + esc([x.city, t("kind_" + x.kind)].filter(Boolean).join(" · ")) + "<br>" + esc(L(x.known_for)) + "</span></a>";
    }).join("") + '</div><div class="src">' + esc(t("restNote", { d: r.date })) + "</div>" + srcList(r.sources) + "</section>";
  }

  function renderMichelin(iso) {
    var box = document.getElementById("msec");
    if (!box) return;
    loadMichelin().then(function (all) {
      if (!S.country || S.country.iso3 !== iso) return;
      var list = all.filter(function (m) { return m[2] === iso && m[5] !== "b"; });
      var h = "<h3>" + esc(t("michelinIn")) + "<small>" + esc(t("michelin")) + "</small></h3>";
      if (!list.length) { box.innerHTML = h + '<div class="nodata">' + esc(t("noMichelin")) + "</div>"; return; }
      var cnt = { 3: 0, 2: 0, 1: 0 };
      list.forEach(function (m) { cnt[m[5]]++; });
      h += '<div class="mcount">' + [3, 2, 1].filter(function (a) { return cnt[a]; }).map(function (a) {
        return '<span style="--c:' + MCOL[a] + '">' + stars(a) + " <b>" + cnt[a] + "</b></span>";
      }).join("") + "</div>";
      h += '<div class="mlist">' + list.slice(0, 12).map(function (m, i) {
        return '<button class="mrow" data-i="' + i + '"><i style="color:' + MCOL[m[5]] + '">' + stars(m[5]) + "</i><span><b>" + esc(m[0]) + "</b>" +
          esc([m[1], m[6]].filter(Boolean).join(" · ")) + "</span></button>";
      }).join("") + "</div>" + (list.length > 12 ? '<div class="src">' + esc(t("more", { n: list.length - 12 })) + "</div>" : "") +
        '<div class="src">' + esc(t("michelinSrc")) + "</div>";
      box.innerHTML = h;
      Array.prototype.forEach.call(box.querySelectorAll(".mrow"), function (b) {
        b.addEventListener("click", function () {
          var m = list[+b.dataset.i];
          var k = MKEY[m[5]];
          if (!PREF[k]) { PREF[k] = true; savePrefs(); }
          if (PREF.lens !== "michelin") setLens("michelin"); else { deriveLY(); legend(); applyLayers(); }
          sheet("half");
          flyTo(m[3], m[4], 0.35);
          showMcard(m);
        });
      });
    });
  }

  function renderList() {
    var box = document.getElementById("rlist"), c = S.country;
    if (!box || !c) return;
    var q = norm(S.filter), coll = new Intl.Collator(lang, { sensitivity: "base" });
    var list = c.recipes.filter(function (r) {
      if (S.cat && r.category !== S.cat) return false;
      return !q || norm(L(r.name) + " " + (r.native || "") + " " + r.name.en).indexOf(q) >= 0;
    }).sort(function (a, b) { return coll.compare(L(a.name), L(b.name)); });
    if (!list.length) { box.innerHTML = '<div class="nodata">' + esc(t("noMatch")) + "</div>"; return; }
    var h = "", last = "";
    list.forEach(function (r) {
      var first = L(r.name).charAt(0).toLocaleUpperCase(lang);
      if (first !== last) { h += '<div class="letter">' + esc(first) + "</div>"; last = first; }
      h += '<button class="r-item" data-id="' + esc(r.id) + '">' + photo(r.image, r.category) + "<div><b>" + esc(L(r.name)) + "</b><span>" +
        esc(t("cat." + r.category)) + " · " + esc(fmtTime(r.time_min)) + " · " + esc(t(r.difficulty)) + "</span></div></button>";
    });
    box.innerHTML = h;
    Array.prototype.forEach.call(box.querySelectorAll(".r-item"), function (b) {
      b.addEventListener("click", function () { openRecipe(c.iso3, b.dataset.id); });
    });
  }

  // ------------------------------------------------------------ tarif
  function openRecipe(iso, id, quiet) {
    return loadCountry(iso).then(function (c) {
      var r = c && c.recipes.find(function (x) { return x.id === id; });
      if (!r) return;
      S.recipe = [iso, id];
      var img = r.image;
      var h = photo(img, r.category, "hero") + '<div class="r-main">' +
        '<button class="r-country" data-country="' + iso + '">' + flag(c.iso2) + " " + esc(cname(iso)) + "</button>" +
        '<h2 id="r-title">' + esc(L(r.name)) + "</h2>" +
        (r.native && r.native !== L(r.name) ? '<div class="r-native">' + esc(r.native) + "</div>" : "") +
        '<p class="r-desc">' + esc(L(r.desc)) + "</p>" +
        '<div class="meta"><span>' + (CAT_ICON[r.category] || "") + " " + esc(t("cat." + r.category)) + "</span><span>⏱ " + esc(fmtTime(r.time_min)) +
        "</span><span>👥 " + esc(t("servings", { n: r.servings })) + "</span><span>" + esc(t(r.difficulty)) + "</span></div>" +
        '<div class="cols"><div><h4>' + esc(t("ingredients")) + '</h4><ul class="ing">' +
        (r.ingredients[lang] || r.ingredients.en).map(function (x) { return '<li><label><input type="checkbox"><span>' + esc(x) + "</span></label></li>"; }).join("") +
        "</ul></div><div><h4>" + esc(t("steps")) + '</h4><ol class="steps">' +
        (r.steps[lang] || r.steps.en).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>" +
        (L(r.tip) ? '<div class="r-tip"><b>' + esc(t("tip")) + ":</b> " + esc(L(r.tip)) + "</div>" : "") + "</div></div>" +
        relBox(r) +
        '<div class="r-foot">' + esc(r.reviewed ? t("aiNote") : t("aiNoteUnrev")) + "<br>" +
        (img && img.url ? esc(t("photo")) + ": " + (img.credit ? esc(img.credit) + ", " : "") + (img.license ? esc(img.license) + ", " : "") +
          '<a href="' + esc(img.source || img.page) + '" target="_blank" rel="noopener">Wikimedia Commons</a>' : esc(t("noPhoto"))) +
        "</div></div>";
      document.getElementById("recipe-body").innerHTML = h;
      document.querySelector("#recipe-body .r-country").addEventListener("click", function () {
        closeRecipe(); selectCountry(iso, true);
      });
      Array.prototype.forEach.call(document.querySelectorAll("#recipe-body .rel-i"), function (b) {
        b.addEventListener("click", function () { openRecipe(b.dataset.iso, b.dataset.id); });
      });
      var mapBtn = document.querySelector("#recipe-body .rel-map");
      if (mapBtn) mapBtn.addEventListener("click", function () { showRelMap(iso, r); });
      var m = document.getElementById("modal");
      m.hidden = false;
      if (!quiet) m.querySelector(".recipe").scrollTop = 0;
      setHash();
    });
  }
  function relName(x) {
    var n = S.names && S.names[x.iso + "/" + x.id];
    return n ? (lang === "tr" ? n[2] : n[3]) : x.id;
  }
  function relRow(x) {
    return '<button class="rel-i" data-iso="' + x.iso + '" data-id="' + esc(x.id) + '"><span class="rel-f">' + flag(iso2Of(x.iso)) + "</span><span class=\"rel-t\"><b>" +
      esc(relName(x)) + " <em>" + esc(cname(x.iso)) + "</em></b>" + esc(L(x.why)) + '</span><span class="rel-p' + (x.score >= 90 ? " hi" : "") + '">%' + x.score + "</span></button>";
  }
  function relBox(r) {
    var rel = (r.relatives || []).filter(function (x) { return S.names && S.names[x.iso + "/" + x.id]; });
    if (!rel.length) return "";
    var hi = rel.filter(function (x) { return x.score >= 90; }), lo = rel.filter(function (x) { return x.score < 90; });
    var h = '<section class="rel">';
    if (hi.length) h += "<h4>🧬 " + esc(t("relTitle")) + "</h4><p class=\"rel-sub\">" + esc(t("relSub")) + "</p>" + hi.map(relRow).join("");
    if (lo.length) h += "<h4" + (hi.length ? ' class="mt"' : "") + ">" + esc(t("simTitle")) + "</h4>" + lo.slice(0, 5).map(relRow).join("");
    h += '<div class="rel-foot"><button class="rel-map">🌍 ' + esc(t("relMap")) + "</button><small>" + esc(t("relNote")) + "</small></div></section>";
    return h;
  }

  // Akrabaları kürede yaylarla göster
  function anchor(iso) {
    var f = S.geo.features.find(function (x) { return x.properties.iso === iso; });
    if (!f) return null;
    if (f.properties.ly != null) return { lat: f.properties.ly, lng: f.properties.lx };
    var c = centroid(f); return { lat: c.lat, lng: c.lng };
  }
  function showRelMap(iso, r) {
    var from = anchor(iso);
    if (!from) return;
    var rel = (r.relatives || []).filter(function (x) { return S.names && S.names[x.iso + "/" + x.id]; });
    var arcs = [], seen = {};
    rel.forEach(function (x) {
      var to = anchor(x.iso);
      if (!to || seen[x.iso]) return;
      seen[x.iso] = 1;
      arcs.push({ s: from, e: to, hi: x.score >= 90 });
    });
    closeRecipe();
    closePanel();
    hideMcard();
    globe.arcsData(arcs)
      .arcStartLat(function (a) { return a.s.lat; }).arcStartLng(function (a) { return a.s.lng; })
      .arcEndLat(function (a) { return a.e.lat; }).arcEndLng(function (a) { return a.e.lng; })
      .arcColor(function (a) { return a.hi ? ["rgba(255,209,102,0.95)", "rgba(255,120,80,0.95)"] : ["rgba(255,209,102,0.5)", "rgba(200,200,220,0.45)"]; })
      .arcStroke(function (a) { return a.hi ? 0.7 : 0.4; })
      .arcDashLength(0.5).arcDashGap(0.15).arcDashAnimateTime(2200).arcAltitudeAutoScale(0.45);
    globe.ringsData([from]).ringLat(function (d) { return d.lat; }).ringLng(function (d) { return d.lng; })
      .ringColor(function () { return function (k) { return "rgba(255,209,102," + (1 - k) + ")"; }; })
      .ringMaxRadius(4).ringPropagationSpeed(2).ringRepeatPeriod(1200);
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat: from.lat, lng: from.lng, altitude: 2.3 }, 1200);
    var card = document.getElementById("relcard");
    card.innerHTML = '<button class="close" aria-label="' + esc(t("close")) + '">×</button><div class="rc-h">' + flag(iso2Of(iso)) + " " +
      esc(t("relOf", { d: L(r.name) })) + "</div>" + rel.map(relRow).join("");
    card.hidden = false;
    document.body.classList.add("rel-open");
    card.querySelector(".close").addEventListener("click", hideRelMap);
    Array.prototype.forEach.call(card.querySelectorAll(".rel-i"), function (b) {
      b.addEventListener("click", function () { openRecipe(b.dataset.iso, b.dataset.id); });
    });
    S.relBack = [iso, r.id];
  }
  function hideRelMap() {
    document.getElementById("relcard").hidden = true;
    document.body.classList.remove("rel-open");
    if (globe) { globe.arcsData([]); globe.ringsData([]); }
    S.relBack = null;
  }

  function closeRecipe() {
    document.getElementById("modal").hidden = true;
    S.recipe = null;
    setHash();
  }

  // ------------------------------------------------------------ genel arama
  var active = -1;
  function runSearch() {
    var inp = document.getElementById("q"), box = document.getElementById("results");
    var q = norm(inp.value.trim());
    if (q.length < 2) { box.hidden = true; return; }
    var out = [];
    Object.keys(S.index).forEach(function (iso) {
      if (norm(cname(iso)).indexOf(q) >= 0 || norm(iso) === q) out.push({ type: "c", iso: iso, score: norm(cname(iso)).indexOf(q) === 0 ? 0 : 1 });
    });
    S.search.forEach(function (s) {
      var hay = norm(s[2] + " " + s[3] + " " + s[4]);
      var i = hay.indexOf(q);
      if (i >= 0) out.push({ type: "r", iso: s[0], id: s[1], name: lang === "tr" ? s[2] : s[3], score: i === 0 ? 2 : 3 });
    });
    out.sort(function (a, b) { return a.score - b.score; });
    out = out.slice(0, 30);
    active = -1;
    box.innerHTML = out.length ? out.map(function (o, i) {
      var c = S.index[o.iso] || {};
      return '<button data-i="' + i + '">' + '<span class="flag">' + (o.type === "c" ? flag(c.iso2) : "🍽️") + '</span><span class="rn"><b>' +
        esc(o.type === "c" ? cname(o.iso) : o.name) + "</b><span>" + esc(o.type === "c" ? t("country") : flag(c.iso2) + " " + cname(o.iso)) + "</span></span></button>";
    }).join("") : '<div class="empty">' + esc(t("searchEmpty")) + "</div>";
    box.hidden = false;
    Array.prototype.forEach.call(box.querySelectorAll("button"), function (b) {
      b.addEventListener("click", function () { pick(out[+b.dataset.i]); });
    });
    box._out = out;
  }
  function pick(o) {
    if (!o) return;
    document.getElementById("results").hidden = true;
    document.getElementById("q").blur();
    if (o.type === "c") selectCountry(o.iso, true);
    else selectCountry(o.iso, true).then(function () { openRecipe(o.iso, o.id); });
  }

  // ------------------------------------------------------------ ilk ziyaret tanıtımı (3 adım, bir kez)
  var INTRO = [["🌍", "intro1T", "intro1", ""], ["🔭", "intro2T", "intro2", "hl-dock"], ["🔎", "intro3T", "intro3", "hl-search"]];
  function intro(force, step) {
    if (!force) {
      try { if (localStorage.getItem("ga-intro")) return; } catch (e) { return; }
      if (location.hash || S.country) return;
    }
    S.introStep = step || 0;
    var x = INTRO[S.introStep], box = document.getElementById("intro"), last = S.introStep === INTRO.length - 1;
    document.body.classList.remove("hl-dock", "hl-search");
    if (x[3]) document.body.classList.add(x[3]);
    box.innerHTML = '<div class="in-card" role="dialog" aria-modal="false"><div class="in-ic">' + x[0] + "</div>" +
      (S.introStep === 0 ? '<div class="in-k">' + esc(stats()) + "</div>" : "") +
      "<h3>" + esc(t(x[1])) + "</h3><p>" + esc(t(x[2])) + '</p><div class="in-f"><span class="in-dots">' +
      INTRO.map(function (_, i) { return "<i" + (i === S.introStep ? ' class="on"' : "") + "></i>"; }).join("") + "</span>" +
      (last ? "" : '<button class="in-skip">' + esc(t("skip")) + "</button>") +
      '<button class="in-next">' + esc(t(last ? "begin" : "next")) + "</button></div></div>";
    box.hidden = false;
    var sk = box.querySelector(".in-skip");
    if (sk) sk.addEventListener("click", endIntro);
    box.querySelector(".in-next").addEventListener("click", function () { if (last) endIntro(); else intro(true, S.introStep + 1); });
  }
  function endIntro() {
    document.getElementById("intro").hidden = true;
    document.body.classList.remove("hl-dock", "hl-search");
    try { localStorage.setItem("ga-intro", "1"); } catch (e) { /* yok */ }
  }

  // ------------------------------------------------------------ adres çubuğu (#TUR veya #TUR/baklava)
  var hashLock = false;
  function setHash() {
    var h = S.recipe ? S.recipe[0] + "/" + S.recipe[1] : S.country ? S.country.iso3 : "";
    hashLock = true;
    history.replaceState(null, "", h ? "#" + h : location.pathname + location.search);
    hashLock = false;
  }
  function fromHash() {
    var h = decodeURIComponent(location.hash.slice(1));
    if (!h) return;
    var p = h.split("/");
    if (!/^[A-Z]{3}$/.test(p[0])) return;
    selectCountry(p[0], true).then(function () { if (p[1]) openRecipe(p[0], p[1]); });
  }

  // ------------------------------------------------------------ başlat
  function bind() {
    document.getElementById("helpbtn").addEventListener("click", function () { intro(true, 0); });
    bindSheet();
    Array.prototype.forEach.call(document.querySelectorAll("[data-tclose]"), function (b) { b.addEventListener("click", closeTop); });
    Array.prototype.forEach.call(document.querySelectorAll(".lang button"), function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });
    document.getElementById("close").addEventListener("click", closePanel);
    Array.prototype.forEach.call(document.querySelectorAll("[data-close]"), function (b) { b.addEventListener("click", closeRecipe); });
    var q = document.getElementById("q"), box = document.getElementById("results");
    q.addEventListener("input", runSearch);
    q.addEventListener("focus", runSearch);
    q.addEventListener("keydown", function (e) {
      var btns = box.querySelectorAll("button");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        active = Math.max(0, Math.min(btns.length - 1, active + (e.key === "ArrowDown" ? 1 : -1)));
        Array.prototype.forEach.call(btns, function (b, i) { b.classList.toggle("act", i === active); });
      } else if (e.key === "Enter") {
        pick(box._out && box._out[active < 0 ? 0 : active]);
      } else if (e.key === "Escape") { box.hidden = true; q.blur(); }
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".search")) box.hidden = true; });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (!document.getElementById("intro").hidden) endIntro();
      else if (!document.getElementById("topmodal").hidden) closeTop();
      else if (!document.getElementById("modal").hidden) closeRecipe(); else closePanel();
    });
    window.addEventListener("hashchange", function () { if (!hashLock) fromHash(); });
  }

  function start() {
    try { var saved = localStorage.getItem("ga-lang"); if (saved && T[saved]) lang = saved; } catch (e) { /* yok */ }
    Promise.all([
      getJSON("data/countries.geojson"),
      getJSON("data/index.json").catch(function () { return { countries: [] }; }),
      getJSON("data/search.json").catch(function () { return []; })
    ]).then(function (r) {
      S.geo = r[0];
      r[1].countries.forEach(function (c) { S.index[c.iso3] = c; });
      S.search = r[2];
      S.names = {};
      r[2].forEach(function (x) { S.names[x[0] + "/" + x[1]] = x; });
      deriveLY();
      bind();
      initGlobe();
      setLang(lang);
      if (PREF.lens === "top10") enterTop(); else applyLayers();
      bindPointHover();
      bindClick();
      fromHash();
      setTimeout(function () { intro(false, 0); }, 1500);
    }).catch(function (e) { console.error(e); showError(t("loadErr")); });
  }
  window.GA = { state: S, globe: function () { return globe; }, selectCountry: selectCountry, openRecipe: openRecipe, pov: function (a, b, c) { globe.controls().autoRotate = false; globe.pointOfView({ lat: a, lng: b, altitude: c }, 0); } };
  start();
})();
