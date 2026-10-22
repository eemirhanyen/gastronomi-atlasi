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
      noWine: "Kayda değer üretim yok", wineRegions: "Şarap bölgeleri", wineTitle: "Şarap", wineProd: "Yıllık üretim: {v} ton ({y}), dünyada {r}. sırada",
      wineExp: "Şarap ihracatı: {v} ({y})", grapes: "Öne çıkan üzümler", wineStyles: "Tanınmış şaraplar ve tarzlar", regionsT: "Bölgeler",
      native: "yerli", red: "kırmızı", white: "beyaz", rose: "roze", other: "", sources: "Kaynaklar", researched: "Web araştırmasıyla derlendi ({d}).",
      restTitle: "Mutfağı deneyimlemek için restoranlar", restNote: "Web araştırmasıyla derlendi ({d}); açılış durumunu gitmeden önce kontrol edin.",
      kind_traditional: "Geleneksel", kind_fine_dining: "Fine dining", kind_casual: "Lokanta", kind_street_food: "Sokak lezzeti", kind_market: "Çarşı / pazar",
      credit: "Doç. Dr. Emirhan Yenişehirlioğlu tarafından hazırlanmıştır",
      rankScore: "En yüksek mutfak puanları", rankWine: "En çok şarap üreten ülkeler", showAll: "Tümü ({n})", showTop: "İlk 10",
      scoreKicker: "Mutfak puanı", worldRank: "Dünya sıralaması", of: "{n} ülke içinde",
      tier1: "Dünya mutfağının zirvesinde", tier2: "Güçlü ve etkili bir mutfak", tier3: "Bölgesinde tanınan bir mutfak", tier4: "Keşfedilmeyi bekleyen bir mutfak",
      relTitle: "Akraba yemekler", relSub: "Başka ülkelerde neredeyse aynı yemek", simTitle: "Benzer yemekler", relMap: "Haritada gör",
      relNote: "Benzerlik oranı yapay zekânın malzeme, teknik ve servis biçimine bakarak verdiği bir değerlendirmedir.", relOf: "{d} yemeğinin akrabaları",
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
      noWine: "No significant production", wineRegions: "Wine regions", wineTitle: "Wine", wineProd: "Annual production: {v} t ({y}), world rank #{r}",
      wineExp: "Wine exports: {v} ({y})", grapes: "Signature grapes", wineStyles: "Notable wines and styles", regionsT: "Regions",
      native: "native", red: "red", white: "white", rose: "rosé", other: "", sources: "Sources", researched: "Compiled with web research ({d}).",
      restTitle: "Restaurants to experience the cuisine", restNote: "Compiled with web research ({d}); check opening status before you go.",
      kind_traditional: "Traditional", kind_fine_dining: "Fine dining", kind_casual: "Casual", kind_street_food: "Street food", kind_market: "Market",
      credit: "Created by Assoc. Prof. Dr. Emirhan Yenişehirlioğlu",
      rankScore: "Top cuisine scores", rankWine: "Top wine producers", showAll: "All ({n})", showTop: "Top 10",
      scoreKicker: "Cuisine score", worldRank: "World rank", of: "among {n} countries",
      tier1: "At the top of world cuisine", tier2: "A strong, influential cuisine", tier3: "Well known in its region", tier4: "A cuisine waiting to be discovered",
      relTitle: "Related dishes", relSub: "Almost the same dish in other countries", simTitle: "Similar dishes", relMap: "Show on the map",
      relNote: "Similarity is an AI assessment of ingredients, technique and how the dish is served.", relOf: "Relatives of {d}",
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

  var lang = "tr", globe, labelEls = [], labelRank = 2;
  var LY = { color: "score", wr: false, text: "names", m3: false, m2: false, m1: false, mb: false };
  try { Object.assign(LY, JSON.parse(localStorage.getItem("ga-layers") || "{}")); } catch (e) { /* yok */ }
  // Puan renkleriyle (kırmızı-sarı-yeşil) karışmasın diye beyaz-mavi tonlar
  if (LY.score === false && LY.color === "score") LY.color = "none";
  delete LY.score;
  var MCOL = { 3: "#ffffff", 2: "#9fd8ff", 1: "#3fa7ff", b: "#c79bff", w: "#e0457b" };
  var MKEY = { 3: "m3", 2: "m2", 1: "m1", b: "mb", w: "wr" };
  // Şarap üretimi: log ölçek, 1 bin t -> 5 milyon t
  function wineColor(v, lift) {
    var k = Math.max(0, Math.min(1, (Math.log10(Math.max(v, 1)) - 3) / 3.7));
    var a = [246, 214, 224], b = [96, 12, 45];
    var c = [0, 1, 2].map(function (j) { var x = a[j] + (b[j] - a[j]) * k; return Math.round(x + (255 - x) * (lift || 0)); });
    return "rgb(" + c.join(",") + ")";
  }
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
  var dn = {};
  function cname(iso3) {
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
    updateStats();
    legend();
    renderRank();
    if (S.country) renderPanel();
    if (S.recipe) openRecipe(S.recipe[0], S.recipe[1], true);
    runSearch();
  }
  function legend() {
    var g = [];
    for (var v = 15; v <= 100; v += 5) g.push(scoreColor(v) + " " + ((v - 15) / 85 * 100).toFixed(0) + "%");
    function cb(k, label, extra) {
      return '<label class="ly"><input type="checkbox" data-ly="' + k + '"' + (LY[k] ? " checked" : "") + ">" + (extra || "") + "<span>" + label + "</span></label>";
    }
    var cnt = S.michelinCount || {};
    function mrow(a) {
      var k = MKEY[a];
      return cb(k, esc(t(a === "b" ? "bib" : "star" + a)) + (cnt[a] ? ' <em>' + cnt[a].toLocaleString(lang) + "</em>" : ""), '<i class="mdot" style="background:' + MCOL[a] + '"></i>');
    }
    document.getElementById("legend").innerHTML =
      '<details class="lg"' + (S.lgOpen !== false && (S.lgOpen || window.innerWidth > 720) ? " open" : "") + "><summary>" + esc(t("layers")) + "</summary>" +
      [["score", "colScore"], ["wine", "colWine"], ["none", "colNone"]].map(function (o) {
        return '<label class="ly"><input type="radio" name="lycolor" data-col="' + o[0] + '"' + (LY.color === o[0] ? " checked" : "") + "><span>" +
          (o[0] === "wine" ? "🍷 " : "") + esc(t(o[1])) + "</span></label>";
      }).join("") +
      (LY.color === "score" ? '<div class="lg-sub"><div class="lg-bar" style="background:linear-gradient(90deg,' + g.join(",") + ')"></div>' +
        '<div class="lg-ticks"><span>15</span><span>55</span><span>100</span></div><div class="lg-s">' + esc(t("scoreTitle")) + " · " + esc(t("scoreAI")) + "</div></div>" : "") +
      (LY.color === "wine" ? '<div class="lg-sub"><div class="lg-bar" style="background:linear-gradient(90deg,' + wineColor(1000) + "," + wineColor(30000) + "," + wineColor(1e6) + "," + wineColor(5e6) + ')"></div>' +
        '<div class="lg-ticks"><span>1K</span><span>100K</span><span>5M</span></div><div class="lg-s">' + esc(t("wineScale")) + '</div><div class="lg-none"><i></i>' + esc(t("noWine")) + "</div></div>" : "") +
      '<div class="lg-h">' + esc(t("michelin")) + "</div>" + mrow(3) + mrow(2) + mrow(1) + mrow("b") +
      '<div class="lg-h"></div>' + cb("wr", esc(t("wineRegions")) + (S.wineRegions ? " <em>" + S.wineRegions.length + "</em>" : ""), '<i class="mdot" style="background:' + MCOL.w + '"></i>') +
      '<div class="lg-h">' + esc(t("lyText")) + "</div>" +
      [["names", "txNames"], ["spice", "txSpice"], ["sauce", "txSauce"], ["off", "txOff"]].map(function (o) {
        return '<label class="ly"><input type="radio" name="lytext" data-tx="' + o[0] + '"' + (LY.text === o[0] ? " checked" : "") + "><span>" +
          (o[0] === "spice" ? "🌶️ " : o[0] === "sauce" ? "🥣 " : "") + esc(t(o[1])) + "</span></label>";
      }).join("") + "</details>";
    Array.prototype.forEach.call(document.querySelectorAll("[data-ly]"), function (x) {
      x.addEventListener("change", function () {
        LY[x.dataset.ly] = x.checked;
        try { localStorage.setItem("ga-layers", JSON.stringify(LY)); } catch (e) { /* yok */ }
        applyLayers();
      });
    });
    var det = document.querySelector("#legend details");
    det.addEventListener("toggle", function () { S.lgOpen = det.open; });
    Array.prototype.forEach.call(document.querySelectorAll("[data-col]"), function (x) {
      x.addEventListener("change", function () {
        LY.color = x.dataset.col;
        try { localStorage.setItem("ga-layers", JSON.stringify(LY)); } catch (e) { /* yok */ }
        S.rankAll = false;
        legend();
        renderRank();
        refresh();
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-tx]"), function (x) {
      x.addEventListener("change", function () {
        LY.text = x.dataset.tx;
        try { localStorage.setItem("ga-layers", JSON.stringify(LY)); } catch (e) { /* yok */ }
        updateLabels();
      });
    });
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
    if (LY.wr && !S.wineRegions) { loadWineRegions().then(applyLayers); return; }
    var pts = !S.michelin ? [] : S.michelin.filter(function (m) { return LY[MKEY[m[5]]]; });
    globe.htmlElementsData(htmlData());
    S.points = pts;
    globe.pointsData(pts);
    if (!pts.length) hideMcard();
  }
  // Küredeki HTML öğeleri: ülke etiketleri + (açıksa) şarap bölgesi işaretleri
  var labelFeats = null, wineObjs = null;
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
  function upgradeStep(pov) {
    var reach = Math.max(12, pov.altitude * 45), cl = Math.cos(pov.lat * Math.PI / 180), done = 0, more = false;
    var feats = S.geo.features;
    for (var i = 0; i < feats.length; i++) {
      var f = feats[i];
      if (f.__hi) continue;
      var h = hiGeo[f.properties.iso];
      if (!h) { f.__hi = true; continue; }
      var dy = (f.properties.ly || 0) - pov.lat, dx = ((((f.properties.lx || 0) - pov.lng) + 540) % 360 - 180) * Math.max(cl, 0.2);
      if (Math.sqrt(dx * dx + dy * dy) > reach) continue;
      if (done >= 8) { more = true; break; }
      var nf = { type: "Feature", properties: f.properties, geometry: h.geometry, __hi: true, __el: f.__el };
      feats[i] = nf;
      if (S.selected === f) S.selected = nf;
      if (S.hover === f) S.hover = nf;
      done++;
    }
    if (done) globe.polygonsData(feats.slice());
    if (more) upTimer = setTimeout(function () { upgradeStep(globe.pointOfView()); }, 120);
  }
  function htmlData() {
    if (!labelFeats) labelFeats = S.geo.features.filter(function (f) { return S.index[f.properties.iso]; });
    if (!(LY.wr && S.wineRegions)) return labelFeats;
    if (!wineObjs) wineObjs = S.wineRegions.map(function (m) { return { w: m }; });
    return labelFeats.concat(wineObjs);
  }
  function wineMark(m) {
    var d = document.createElement("div");
    d.className = "wmark";
    d.innerHTML = "<i></i><span>" + esc(m[0]) + "</span>";
    d.title = m[0];
    d.addEventListener("click", function (e) { e.stopPropagation(); showMcard(m); });
    m.__el = d;
    return d;
  }
  function loadWineRegions() {
    if (S.wLoading) return S.wLoading;
    // [ad, "", ülke, enlem, boylam, "w", açıklama, üzümler]: Michelin noktalarıyla aynı biçim
    S.wLoading = getJSON("data/wine_regions.json").then(function (d) {
      S.wineRegions = d.map(function (r) { return [r[0], "", r[1], r[2], r[3], "w", r[4], r[5]]; });
      legend();
      return S.wineRegions;
    }).catch(function () { S.wineRegions = []; return []; });
    return S.wLoading;
  }
  function loadMichelin() {
    if (S.mLoading) return S.mLoading;
    S.mLoading = getJSON("data/michelin.json").then(function (d) {
      S.michelin = d.items;
      S.michelinCount = {};
      d.items.forEach(function (m) { S.michelinCount[m[5]] = (S.michelinCount[m[5]] || 0) + 1; });
      legend();
      return d.items;
    }).catch(function () { S.michelin = []; showError(t("loadErr")); return []; });
    return S.mLoading;
  }

  // Michelin noktası: tıklanan konuma en yakın görünür nokta
  function nearestPoint(lat, lng) {
    if (!S.points || !S.points.length) return null;
    var alt = globe.pointOfView().altitude, thr = Math.max(0.15, alt * 0.9), best = null, bd = thr * thr;
    var cl = Math.cos(lat * Math.PI / 180);
    S.points.forEach(function (m) {
      var dy = m[3] - lat, dx = (((m[4] - lng) + 540) % 360 - 180) * cl, d = dx * dx + dy * dy;
      if (d < bd) { bd = d; best = m; }
    });
    return best;
  }
  function stars(a) { return a === "b" ? "Bib" : new Array(a + 1).join("★"); }
  function showMcard(m) {
    var c = document.getElementById("mcard");
    if (m[5] === "w") {
      c.innerHTML = '<button class="close" aria-label="' + esc(t("close")) + '">×</button>' +
        '<div class="mc-a" style="color:' + MCOL.w + '">🍷 ' + esc(t("wineRegions")) + "</div><b>" + esc(m[0]) + "</b><span>" + esc(cname(m[2])) + "</span>" +
        (L(m[6]) ? "<span>" + esc(L(m[6])) + "</span>" : "") + (m[7] && m[7].length ? "<span>🍇 " + esc(m[7].join(", ")) + "</span>" : "");
      c.hidden = false;
      c.querySelector(".close").addEventListener("click", hideMcard);
      if (S.mSel && S.mSel.__el) S.mSel.__el.classList.remove("on");
      S.mSel = m;
      if (m.__el) m.__el.classList.add("on");
      return;
    }
    c.innerHTML = '<button class="close" aria-label="' + esc(t("close")) + '">×</button>' +
      '<div class="mc-a" style="color:' + MCOL[m[5]] + '">' + (m[5] === "b" ? esc(t("bib")) : stars(m[5]) + " " + esc(t("star" + m[5]))) + "</div>" +
      "<b>" + esc(m[0]) + "</b><span>" + esc([m[1], m[2] ? cname(m[2]) : ""].filter(Boolean).join(", ")) + "</span>" +
      (m[6] ? "<span>" + esc(m[6]) + "</span>" : "") +
      (m[7] ? '<a href="' + esc(m[7]) + '" target="_blank" rel="noopener">' + esc(t("openGuide")) + " ↗</a>" : "");
    c.hidden = false;
    c.querySelector(".close").addEventListener("click", hideMcard);
    S.mSel = m;
    globe.pointsData(S.points);
  }
  function hideMcard() {
    var c = document.getElementById("mcard");
    if (c) c.hidden = true;
    if (S.mSel && S.mSel.__el) S.mSel.__el.classList.remove("on");
    if (S.mSel) { S.mSel = null; if (globe && S.points) globe.pointsData(S.points); }
  }
  function clickAt(coords, f) {
    if (S.relBack) hideRelMap();
    var m = coords && nearestPoint(coords.lat, coords.lng);
    if (m) { showMcard(m); return; }
    hideMcard();
    if (f) selectCountry(f.properties.iso, true); else closePanel();
  }
  // Sıralama kutusu: renk moduna göre ilk 10 (puan ya da şarap üretimi), istenirse tümü
  function renderRank() {
    var box = document.getElementById("rank");
    if (!box) return;
    var mode = LY.color === "wine" ? "wine" : "score";
    var list = Object.keys(S.index).map(function (k) { return S.index[k]; })
      .filter(function (c) { return mode === "wine" ? c.wine : c.score != null; })
      .sort(function (a, b) { return mode === "wine" ? b.wine - a.wine : b.score - a.score || cname(a.iso3).localeCompare(cname(b.iso3), lang); });
    if (!list.length || LY.color === "none") { box.hidden = true; return; }
    box.hidden = false;
    var all = !!S.rankAll, shown = all ? list : list.slice(0, 10), rank = 0, prev = null;
    var open = S.rkOpen !== undefined ? S.rkOpen : window.innerWidth > 720;
    var h = '<div class="rk-h"><b class="rk-title" role="button" tabindex="0">🏆 ' + esc(t(mode === "wine" ? "rankWine" : "rankScore")) + " " + (open ? "▾" : "▸") +
      "</b>" + (open ? '<button class="rk-toggle">' + esc(all ? t("showTop") : t("showAll", { n: list.length })) + "</button>" : "") + "</div>";
    if (!open) {
      box.innerHTML = h;
      box.querySelector(".rk-title").addEventListener("click", function () { S.rkOpen = true; renderRank(); });
      return;
    }
    h += '<ol class="rk-list">';
    shown.forEach(function (c, i) {
      var v = mode === "wine" ? c.wine : c.score;
      if (v !== prev) { rank = i + 1; prev = v; }        // eşit puanlar aynı sırayı paylaşır
      var col = mode === "wine" ? wineColor(v) : scoreColor(v);
      var val = mode === "wine" ? new Intl.NumberFormat(lang, { notation: "compact", maximumFractionDigits: 1 }).format(v) + " t" : v;
      h += '<li><button data-iso="' + c.iso3 + '"' + (S.country && S.country.iso3 === c.iso3 ? ' class="on"' : "") + '><span class="rk-n">' + rank +
        '</span><span class="rk-f">' + flag(c.iso2) + '</span><span class="rk-c">' + esc(cname(c.iso3)) +
        '</span><span class="rk-v" style="--c:' + col + (mode === "wine" && v > 60000 ? ";color:#fff" : "") + '">' + val + "</span></button></li>";
    });
    box.innerHTML = h + "</ol>";
    box.querySelector(".rk-toggle").addEventListener("click", function () { S.rankAll = !S.rankAll; renderRank(); });
    box.querySelector(".rk-title").addEventListener("click", function () { S.rkOpen = false; renderRank(); });
    Array.prototype.forEach.call(box.querySelectorAll("[data-iso]"), function (b) {
      b.addEventListener("click", function () { selectCountry(b.dataset.iso, true); });
    });
  }
  function updateStats() {
    var c = 0, r = 0;
    Object.keys(S.index).forEach(function (k) { if (S.index[k].recipes) { c++; r += S.index[k].recipes; } });
    document.getElementById("stats").textContent = r ? t("stats", { c: c, r: r }) : "";
  }

  // ------------------------------------------------------------ küre
  function has(f) { var c = S.index[f.properties.iso]; return !!(c && (c.recipes || c.signature || c.score != null)); }
  function capColor(f) {
    var c = S.index[f.properties.iso], lift = f === S.selected ? 0.35 : f === S.hover ? 0.2 : 0;
    var blank = f === S.selected ? "#6a5442" : f === S.hover ? "#4a3d33" : LY.color === "none" ? "#3a2e25" : "#2b231d";
    if (LY.color === "wine") return c && c.wine ? wineColor(c.wine, lift) : blank;
    if (LY.color !== "score" || !c || c.score == null) return blank;
    return scoreColor(c.score, lift);
  }
  function applyLabel(el) {
    el.style.visibility = LY.text !== "off" && el.textContent && el.dataset.front !== "0" && +el.dataset.rank <= labelRank ? "visible" : "hidden";
  }
  function initGlobe() {
    var el = document.getElementById("globe");
    globe = Globe()(el)
      .backgroundColor("#120d0a")
      .showAtmosphere(true).atmosphereColor("#f0a23b").atmosphereAltitude(0.16)
      .polygonsData(S.geo.features)
      // Düşük kabartma: yakınlaşınca adaların yan duvarları gölge şeridi gibi görünmesin
      .polygonAltitude(function (f) { return f === S.selected ? 0.02 : f === S.hover && has(f) ? 0.012 : has(f) ? 0.004 : 0.002; })
      .polygonCapColor(capColor)
      .polygonSideColor(function () { return "rgba(20,12,6,0.55)"; })
      .polygonStrokeColor(function () { return "rgba(18,13,10,0.9)"; })
      .polygonLabel(function (f) {
        var c = S.index[f.properties.iso];
        var sub = (c && c.score != null ? " · <b>" + c.score + "</b>" : "") + (c && c.top ? " <span>· " + esc(L(c.top)) + "</span>" : "");
        return '<div class="tip">' + flag(iso2Of(f.properties.iso)) + " " + esc(cname(f.properties.iso)) + sub + "</div>";
      })
      .onPolygonHover(function (f) { S.hover = f; el.style.cursor = f ? "pointer" : "grab"; refresh(); })
      .onPolygonClick(function (f, ev, coords) { clickAt(coords, f); })
      .onGlobeClick(function (coords) { clickAt(coords, null); })
      .pointsData([])
      .pointLat(function (m) { return m[3]; })
      .pointLng(function (m) { return m[4]; })
      .pointColor(function (m) { return m === S.mSel ? "#ff2d55" : MCOL[m[5]]; })
      // Düz diskler: yakından bakınca kule gibi görünmesinler
      .pointAltitude(function (m) { return m === S.mSel ? 0.012 : 0.0012; })
      .pointRadius(function (m) { return m === S.mSel ? 0.12 : m[5] === "b" ? 0.05 : 0.05 + m[5] * 0.015; })
      .pointResolution(10)
      .pointsMerge(true)
      .pointsTransitionDuration(0)
      .polygonsTransitionDuration(200)
      .htmlElementsData(htmlData())
      .htmlLat(function (f) { return f.w ? f.w[3] : f.properties.ly; })
      .htmlLng(function (f) { return f.w ? f.w[4] : f.properties.lx; })
      .htmlAltitude(function (f) { return f.w ? 0.006 : 0.015; })
      .htmlElement(function (f) {
        if (f.__el) return f.__el;
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
        if (d.classList.contains("wmark")) d.style.visibility = v ? "visible" : "hidden"; else applyLabel(d);
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
      var c = centroid(f), mobile = window.innerWidth <= 720;
      globe.pointOfView({ lat: c.lat - (mobile ? 8 : 0), lng: c.lng + (mobile ? 0 : 10), altitude: Math.max(1.15, Math.min(2.3, c.span / 18)) }, 1000);
    }
    document.getElementById("hint").classList.add("gone");
    var p = document.getElementById("panel");
    p.classList.add("open"); p.setAttribute("aria-hidden", "false");
    document.body.classList.add("panel-open");
    refresh();
    return loadCountry(iso).then(function (c) {
      S.country = c || { iso3: iso, missing: true };
      renderPanel();
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
    p.classList.remove("open"); p.setAttribute("aria-hidden", "true");
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
    var c = S.country, body = document.getElementById("panel-body");
    if (!c) return;
    var h = '<div class="c-head"><div class="c-flag">' + flag(iso2Of(c.iso3)) + '</div><div><h2>' + esc(cname(c.iso3)) + "</h2>" +
      (c.recipes && c.recipes.length ? "<p>" + esc(t("recipesN", { n: c.recipes.length })) + "</p>" : "") + "</div></div>";
    if (c.score) h += scoreCard(c);
    if (c.missing) {
      body.innerHTML = h + '<div class="sec"><div class="nodata">' + esc(t("noData")) + "</div></div>";
      return;
    }
    if (c.signature && c.signature.length) {
      h += '<section class="sec"><h3>' + esc(t("signature")) + '</h3><div class="sig">' + c.signature.slice(0, 6).map(function (s) {
        return '<div class="sig-card">' + photo(s.image, "", "") + '<div class="t"><b>' + esc(L(s.name)) + "</b>" +
          (s.native && s.native !== L(s.name) ? "<i>" + esc(s.native) + "</i>" : "") + "<p>" + esc(L(s.desc)) + "</p></div></div>";
      }).join("") + "</div></section>";
    }
    function flav(list, key, icon) {
      if (!list || !list.length) return "";
      return '<section class="sec"><h3>' + esc(t(key)) + '</h3><div class="flv">' + list.map(function (x) {
        return '<div class="flv-i"><span>' + icon + "</span><div><b>" + esc(L(x.name)) + "</b>" + (L(x.desc) ? "<p>" + esc(L(x.desc)) + "</p>" : "") + "</div></div>";
      }).join("") + "</div></section>";
    }
    h += flav(c.spices, "spices", "🌶️") + flav(c.sauces, "sauces", "🥣");
    h += wineSec(c) + restSec(c);
    h += '<section class="sec" id="msec"></section>';
    h += '<section class="sec"><h3>' + esc(t("production")) + "</h3>" + bars(c.production, "prod") + "</section>";
    h += '<section class="sec"><h3>' + esc(t("exports")) + "</h3>" + bars(c.exports, "exp") + "</section>";
    h += '<section class="sec" id="rsec"><h3>' + esc(t("recipes")) + "<small>" + esc(t("recipesN", { n: (c.recipes || []).length })) + "</small></h3>";
    if (!c.recipes || !c.recipes.length) {
      h += '<div class="nodata">' + esc(t("noRecipes")) + "</div>";
    } else {
      var cats = [];
      c.recipes.forEach(function (r) { if (cats.indexOf(r.category) < 0) cats.push(r.category); });
      h += '<div class="r-tools"><input id="rfilter" type="search" placeholder="' + esc(t("filter")) + '" value="' + esc(S.filter) + '"></div>';
      h += '<div class="chips"><button class="chip' + (S.cat ? "" : " on") + '" data-cat="">' + esc(t("all")) + "</button>" +
        cats.map(function (k) { return '<button class="chip' + (S.cat === k ? " on" : "") + '" data-cat="' + k + '">' + (CAT_ICON[k] || "") + " " + esc(t("cat." + k)) + "</button>"; }).join("") + "</div>";
      h += '<div id="rlist"></div>';
    }
    h += "</section>";
    body.innerHTML = h;
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
    renderMichelin(c.iso3);
    animateScore();
    Array.prototype.forEach.call(body.querySelectorAll(".wreg"), function (b) {
      b.addEventListener("click", function () {
        var r = c.wine.regions[+b.dataset.i];
        if (!LY.wr) { LY.wr = true; legend(); }
        loadWineRegions().then(function () {
          applyLayers();
          var m = (S.wineRegions || []).find(function (x) { return x[2] === c.iso3 && x[0] === r.name; });
          globe.pointOfView({ lat: r.lat - (window.innerWidth <= 720 ? 2 : 0), lng: r.lng + (window.innerWidth <= 720 ? 0 : 3), altitude: 0.5 }, 1200);
          if (m) showMcard(m);
        });
      });
    });
  }

  function srcList(src) {
    if (!src || !src.length) return "";
    return '<details class="srcs"><summary>' + esc(t("sources")) + " (" + src.length + ")</summary>" + src.map(function (x) {
      return '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.title) + "</a>";
    }).join("") + "</details>";
  }
  function fmtN(v) { return new Intl.NumberFormat(lang).format(Math.round(v)); }
  function wineSec(c) {
    var w = c.wine;
    if (!w) return "";
    var h = '<section class="sec wine"><h3>🍷 ' + esc(t("wineTitle")) + "</h3>";
    if (w.production) h += '<div class="w-prod">' + esc(t("wineProd", { v: fmtN(w.production.value), y: w.production.year, r: w.production.rank })) +
      (w.exports ? "<br>" + esc(t("wineExp", { v: fmtUSD(w.exports.value), y: w.exports.year })) : "") + "</div>";
    if (w.summary && L(w.summary)) h += '<p class="w-sum">' + esc(L(w.summary)) + "</p>";
    if (w.grapes && w.grapes.length) h += "<h4>" + esc(t("grapes")) + '</h4><div class="grapes">' + w.grapes.map(function (g) {
      return '<span class="grape ' + g.type + '" title="' + esc(L(g.desc)) + '">' + esc(g.name) + (g.native ? " <em>" + esc(t("native")) + "</em>" : "") + "</span>";
    }).join("") + "</div>";
    if (w.regions && w.regions.length) h += "<h4>" + esc(t("regionsT")) + '</h4><div class="wregs">' + w.regions.map(function (r, i) {
      return '<button class="wreg" data-i="' + i + '"><b>' + esc(r.name) + "</b>" + esc(L(r.desc)) + "</button>";
    }).join("") + "</div>";
    if (w.styles && w.styles.length) h += "<h4>" + esc(t("wineStyles")) + "</h4>" + w.styles.map(function (x) {
      return '<div class="wsty"><b>' + esc(x.name) + "</b> " + esc(L(x.desc)) + "</div>";
    }).join("");
    if (w.date) h += '<div class="src">' + esc(t("researched", { d: w.date })) + "</div>" + srcList(w.sources);
    return h + "</section>";
  }
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
          if (!LY[k]) { LY[k] = true; legend(); applyLayers(); }
          globe.pointOfView({ lat: m[3] - (window.innerWidth <= 720 ? 1.5 : 0), lng: m[4] + (window.innerWidth <= 720 ? 0 : 2.5), altitude: 0.35 }, 1200);
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
    card.querySelector(".close").addEventListener("click", hideRelMap);
    Array.prototype.forEach.call(card.querySelectorAll(".rel-i"), function (b) {
      b.addEventListener("click", function () { openRecipe(b.dataset.iso, b.dataset.id); });
    });
    S.relBack = [iso, r.id];
  }
  function hideRelMap() {
    document.getElementById("relcard").hidden = true;
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
      if (!document.getElementById("modal").hidden) closeRecipe(); else closePanel();
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
      bind();
      initGlobe();
      setLang(lang);
      applyLayers();
      fromHash();
    }).catch(function (e) { console.error(e); showError(t("loadErr")); });
  }
  window.GA = { state: S, selectCountry: selectCountry, openRecipe: openRecipe, pov: function (a, b, c) { globe.controls().autoRotate = false; globe.pointOfView({ lat: a, lng: b, altitude: c }, 0); } };
  start();
})();
