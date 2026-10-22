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
      loadErr: "Veri yüklenemedi.",
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
      loadErr: "Could not load data.",
      cat: { soup: "Soup", main: "Main", side: "Side", salad: "Salad", bread: "Bread", pastry: "Pastry", dessert: "Dessert", drink: "Drink", snack: "Snack", breakfast: "Breakfast", sauce: "Sauce", street_food: "Street food" }
    }
  };
  var CAT_ICON = { soup: "🍲", main: "🍛", side: "🥔", salad: "🥗", bread: "🍞", pastry: "🥟", dessert: "🍰", drink: "🍵", snack: "🥨", breakfast: "🍳", sauce: "🫙", street_food: "🌯" };
  var REGION = { Africa: "#c9733a", Americas: "#b9493a", Asia: "#d6a33c", Europe: "#7f9a4e", Oceania: "#4f8f8a" };

  var lang = "tr", globe, labelEls = [], labelRank = 2;
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
  function flag(iso2) {
    if (!iso2 || iso2.length !== 2) return "🏳️";
    return String.fromCodePoint.apply(null, iso2.toUpperCase().split("").map(function (c) { return 127397 + c.charCodeAt(0); }));
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
    labelEls.forEach(function (x) { x[0].textContent = cname(x[1].properties.iso); });
    updateStats();
    if (S.country) renderPanel();
    if (S.recipe) openRecipe(S.recipe[0], S.recipe[1], true);
    runSearch();
  }
  function updateStats() {
    var c = 0, r = 0;
    Object.keys(S.index).forEach(function (k) { if (S.index[k].recipes) { c++; r += S.index[k].recipes; } });
    document.getElementById("stats").textContent = r ? t("stats", { c: c, r: r }) : "";
  }

  // ------------------------------------------------------------ küre
  function has(f) { var c = S.index[f.properties.iso]; return !!(c && (c.recipes || c.signature)); }
  function capColor(f) {
    var c = S.index[f.properties.iso];
    var base = (c && REGION[c.region]) || "#3a3029";
    if (!has(f)) return f === S.hover ? "#4a3d33" : "#2b231d";
    if (f === S.selected) return "#f0a23b";
    return f === S.hover ? shade(base, 0.25) : base;
  }
  function shade(hex, k) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    function m(x) { return Math.round(x + (255 - x) * k); }
    return "rgb(" + m(r) + "," + m(g) + "," + m(b) + ")";
  }
  function applyLabel(el) {
    el.style.visibility = el.dataset.front !== "0" && +el.dataset.rank <= labelRank ? "visible" : "hidden";
  }
  function initGlobe() {
    var el = document.getElementById("globe");
    globe = Globe()(el)
      .backgroundColor("#120d0a")
      .showAtmosphere(true).atmosphereColor("#f0a23b").atmosphereAltitude(0.16)
      .polygonsData(S.geo.features)
      .polygonAltitude(function (f) { return f === S.selected ? 0.04 : f === S.hover && has(f) ? 0.022 : has(f) ? 0.01 : 0.005; })
      .polygonCapColor(capColor)
      .polygonSideColor(function () { return "rgba(20,12,6,0.55)"; })
      .polygonStrokeColor(function () { return "rgba(18,13,10,0.9)"; })
      .polygonLabel(function (f) {
        var c = S.index[f.properties.iso];
        var sub = c && c.top ? " <span>· " + esc(L(c.top)) + "</span>" : "";
        return '<div class="tip">' + flag(iso2Of(f.properties.iso)) + " " + esc(cname(f.properties.iso)) + sub + "</div>";
      })
      .onPolygonHover(function (f) { S.hover = f; el.style.cursor = f ? "pointer" : "grab"; refresh(); })
      .onPolygonClick(function (f) { selectCountry(f.properties.iso, true); })
      .onGlobeClick(function () { closePanel(); })
      .polygonsTransitionDuration(200)
      .htmlElementsData(S.geo.features)
      .htmlLat(function (f) { return f.properties.ly; })
      .htmlLng(function (f) { return f.properties.lx; })
      .htmlAltitude(0.015)
      .htmlElement(function (f) {
        var d = document.createElement("div");
        d.className = "clabel r" + Math.min(6, f.properties.rank || 6);
        d.textContent = cname(f.properties.iso);
        d.dataset.rank = f.properties.rank || 9;
        labelEls.push([d, f]);
        return d;
      })
      .htmlElementVisibilityModifier(function (d, v) { d.dataset.front = v ? "1" : "0"; applyLabel(d); })
      .onZoom(function (pov) {
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
    refresh();
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

  function renderPanel() {
    var c = S.country, body = document.getElementById("panel-body");
    if (!c) return;
    var h = '<div class="c-head"><div class="c-flag">' + flag(iso2Of(c.iso3)) + '</div><div><h2>' + esc(cname(c.iso3)) + "</h2>" +
      (c.recipes && c.recipes.length ? "<p>" + esc(t("recipesN", { n: c.recipes.length })) + "</p>" : "") + "</div></div>";
    if (c.missing) {
      body.innerHTML = h + '<div class="sec"><div class="nodata">' + esc(t("noData")) + "</div></div>";
      return;
    }
    if (c.signature && c.signature.length) {
      h += '<section class="sec"><h3>' + esc(t("signature")) + '</h3><div class="sig">' + c.signature.map(function (s) {
        return '<div class="sig-card">' + photo(s.image, "", "") + '<div class="t"><b>' + esc(L(s.name)) + "</b>" +
          (s.native && s.native !== L(s.name) ? "<i>" + esc(s.native) + "</i>" : "") + "<p>" + esc(L(s.desc)) + "</p></div></div>";
      }).join("") + "</div></section>";
    }
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
        '<div class="r-foot">' + esc(r.reviewed ? t("aiNote") : t("aiNoteUnrev")) + "<br>" +
        (img && img.url ? esc(t("photo")) + ": " + (img.credit ? esc(img.credit) + ", " : "") + (img.license ? esc(img.license) + ", " : "") +
          '<a href="' + esc(img.source || img.page) + '" target="_blank" rel="noopener">Wikimedia Commons</a>' : esc(t("noPhoto"))) +
        "</div></div>";
      document.getElementById("recipe-body").innerHTML = h;
      document.querySelector("#recipe-body .r-country").addEventListener("click", function () {
        closeRecipe(); selectCountry(iso, true);
      });
      var m = document.getElementById("modal");
      if (m.hidden) { m.hidden = false; if (!quiet) m.querySelector(".recipe").scrollTop = 0; }
      setHash();
    });
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
      getJSON("data/ne_110m_countries.geojson"),
      getJSON("data/index.json").catch(function () { return { countries: [] }; }),
      getJSON("data/search.json").catch(function () { return []; })
    ]).then(function (r) {
      S.geo = r[0];
      r[1].countries.forEach(function (c) { S.index[c.iso3] = c; });
      S.search = r[2];
      bind();
      initGlobe();
      setLang(lang);
      fromHash();
    }).catch(function (e) { console.error(e); showError(t("loadErr")); });
  }
  window.GA = { state: S, selectCountry: selectCountry, openRecipe: openRecipe };
  start();
})();
