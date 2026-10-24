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
      loadErr: "Veri yüklenemedi.", scoreTitle: "Dört alt puanın ortalaması", scoreAI: "yapay zekâ değerlendirmesi, 0–100", sub_influence: "Dünyadaki etki ve tanınırlık", sub_richness: "Zenginlik ve çeşitlilik", sub_heritage: "Kültürel miras", sub_products: "Özgün ürün ve teknikler", noScore: "Puan yok",
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
      yarnT: "Yumakla oyna", yarnOn: "Tarçın yumağı gördü! Bitirmek için 🧶 ya da Esc.", yarnBye: "Mrr… bir daha!",
      catWake: "Mrrr? Uyanmıştım zaten…", catPurr: "Mrrr… 💛", catLove: "Mrrr! Artık dostuz. 🐾", b_catfriend: "Kedi dostu", bh_catfriend: "Tarçın'ı 8 kez sev", catMore: "Bir tane daha", catHint: "Tıkla: ipucu · Üstünde gezdir: sev 🐾", catMuseH: "Tarçın düşünüyor…", catHide: "Tarçın'ı sakla", catHidden: "Tarçın uyumaya gitti. 🐱 düğmesiyle geri çağırabilirsin.", catHello: "Miyav! Ben Tarçın.", catT: "Tarçın'ı çağır",
      settingsT: "Görünüm ayarları",
      favT: "Favorilere ekle", favAdded: "Favorilere eklendi: ", favsT: "Favori tariflerim", shareT: "Tarifi paylaş", linkCopied: "Bağlantı kopyalandı: ",
      passT: "Gastronomi pasaportu", quizT: "Bu yemek hangi ülkenin?", diceT: "Rastgele bir ülkeye uç", stampNew: "Yeni damga: ", badgeNew: "Yeni rozet: ",
      passSub: "{d} tarif açtın · bilgi yarışmasında en iyi serin {q}", badgesT: "Rozetler", stampsT: "Damgalar", noStamps: "Henüz damga yok. Bir ülkeye dokun ya da 🎲 ile rastgele uç.",
      reg_Africa: "Afrika", reg_Americas: "Amerika", reg_Asia: "Asya", reg_Europe: "Avrupa", reg_Oceania: "Okyanusya",
      streak: "Seri", best: "En iyi", quizQ: "Bu yemek ({d}) hangi ülkenin mutfağından?", quizYes: "Doğru! Afiyet olsun.", quizNo: "Olmadı; bu yemek {c} mutfağından.", toRecipe: "Tarife git",
      b_first: "İlk damga", bh_first: "Bir ülkeyi aç", b_trav10: "Gezgin", bh_trav10: "10 ülke", b_trav25: "Kâşif", bh_trav25: "25 ülke", b_trav100: "Dünya gurmesi", bh_trav100: "100 ülke",
      b_reg_Africa: "Afrika kâşifi", bh_reg_Africa: "Afrika'dan 5 ülke", b_reg_Americas: "Amerika kâşifi", bh_reg_Americas: "Amerika'dan 5 ülke", b_reg_Asia: "Asya kâşifi", bh_reg_Asia: "Asya'dan 5 ülke",
      b_reg_Europe: "Avrupa kâşifi", bh_reg_Europe: "Avrupa'dan 5 ülke", b_reg_Oceania: "Ada gezgini", bh_reg_Oceania: "Okyanusya'dan 3 ülke",
      b_rec10: "Tarif avcısı", bh_rec10: "10 tarif aç", b_rec50: "Aşçıbaşı", bh_rec50: "50 tarif aç", b_top10: "Ölmeden önce", bh_top10: "En İyi 10'un hepsini aç",
      b_quiz5: "Keskin damak", bh_quiz5: "Yarışmada 5'lik seri", b_quiz15: "Gurme dedektif", bh_quiz15: "Yarışmada 15'lik seri",
      customT: "Geleneksel eşlik", pairT: "Şarap eşleştirmesi", pairWhy: "Neden uyumlu?", pairSoft: "Alkolsüz alternatif", pairLocal: "yerel",
      pairNote: "Sommelyer yaklaşımıyla yapay zekâ önerisidir; ülkede şarap üretiliyorsa önce yerel üzümler önerilir.",
      sigShort: "Simge lezzet", michStars: "{n} Michelin yıldızı", noMich: "Michelin yıldızı yok", tab_genel: "Genel", tab_tarif: "Tarifler", tab_restoran: "Restoranlar", tab_tarim: "Tarım", goRecipes: "Bu mutfaktan {n} tarifin tamamı",
      help: "Nasıl kullanılır?", toNight: "Gece moduna geç", toDay: "Gündüz moduna geç", next: "İleri", skip: "Geç", begin: "Başla",
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
      loadErr: "Could not load data.", scoreTitle: "Average of four sub-scores", scoreAI: "AI assessment, 0–100", sub_influence: "Global influence and recognition", sub_richness: "Richness and variety", sub_heritage: "Culinary heritage", sub_products: "Distinctive products and techniques", noScore: "No score",
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
      yarnT: "Play with yarn", yarnOn: "Tarçın spotted the yarn! Press 🧶 or Esc to stop.", yarnBye: "Mrr… again!",
      catWake: "Mrrr? I was awake anyway…", catPurr: "Purrr… 💛", catLove: "Purrr! We're friends now. 🐾", b_catfriend: "Cat friend", bh_catfriend: "Pet Tarçın 8 times", catMore: "Another one", catHint: "Click: a tip · Stroke me: pet 🐾", catMuseH: "Tarçın is pondering…", catHide: "Hide Tarçın", catHidden: "Tarçın went for a nap. Call her back with the 🐱 button.", catHello: "Meow! I'm Tarçın.", catT: "Call Tarçın",
      settingsT: "View settings",
      favT: "Add to favourites", favAdded: "Added to favourites: ", favsT: "My favourite recipes", shareT: "Share recipe", linkCopied: "Link copied: ",
      passT: "Gastronomy passport", quizT: "Which country is this dish from?", diceT: "Fly to a random country", stampNew: "New stamp: ", badgeNew: "New badge: ",
      passSub: "{d} recipes opened · best quiz streak {q}", badgesT: "Badges", stampsT: "Stamps", noStamps: "No stamps yet. Tap a country or fly somewhere random with 🎲.",
      reg_Africa: "Africa", reg_Americas: "Americas", reg_Asia: "Asia", reg_Europe: "Europe", reg_Oceania: "Oceania",
      streak: "Streak", best: "Best", quizQ: "Which country is this dish ({d}) from?", quizYes: "Correct! Enjoy.", quizNo: "Not quite; this dish is from {c}.", toRecipe: "Open recipe",
      b_first: "First stamp", bh_first: "Open a country", b_trav10: "Traveller", bh_trav10: "10 countries", b_trav25: "Explorer", bh_trav25: "25 countries", b_trav100: "World gourmet", bh_trav100: "100 countries",
      b_reg_Africa: "Africa explorer", bh_reg_Africa: "5 countries in Africa", b_reg_Americas: "Americas explorer", bh_reg_Americas: "5 countries in the Americas", b_reg_Asia: "Asia explorer", bh_reg_Asia: "5 countries in Asia",
      b_reg_Europe: "Europe explorer", bh_reg_Europe: "5 countries in Europe", b_reg_Oceania: "Island hopper", bh_reg_Oceania: "3 countries in Oceania",
      b_rec10: "Recipe hunter", bh_rec10: "Open 10 recipes", b_rec50: "Head chef", bh_rec50: "Open 50 recipes", b_top10: "Before you die", bh_top10: "Open all of the Top 10",
      b_quiz5: "Sharp palate", bh_quiz5: "Quiz streak of 5", b_quiz15: "Gourmet detective", bh_quiz15: "Quiz streak of 15",
      customT: "Traditional companion", pairT: "Wine pairing", pairWhy: "Why it works", pairSoft: "Non-alcoholic option", pairLocal: "local",
      pairNote: "An AI suggestion written with a sommelier's approach; where the country makes wine, local grapes come first.",
      sigShort: "Signature dish", michStars: "{n} Michelin stars", noMich: "No Michelin stars", tab_genel: "Overview", tab_tarif: "Recipes", tab_restoran: "Restaurants", tab_tarim: "Farming", goRecipes: "All {n} recipes from this cuisine",
      help: "How to use", toNight: "Switch to night mode", toDay: "Switch to day mode", next: "Next", skip: "Skip", begin: "Start",
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
  // Gece / gündüz: arayüz renkleri CSS'te ([data-theme]), küre renkleri burada
  var THEMES = {
    dark: { ocean: "#1d3040", glow: "#0c1620", atmo: "#f0a23b", atmoAlt: 0.16, side: "rgba(20,12,6,0.55)", stroke: "rgba(18,13,10,0.9)",
      sel: "#6a5442", hov: "#4a3d33", none: "#3a2e25", prodNone: "#2e3743", noScore: "#2b231d",
      mcol: { 3: "#ffffff", 2: "#9fd8ff", 1: "#3fa7ff", b: "#c79bff" } },
    light: { ocean: "#a8d0dd", glow: "#4a7482", atmo: "#ffcf8a", atmoAlt: 0.2, side: "rgba(120,90,60,0.28)", stroke: "rgba(255,255,255,0.95)",
      sel: "#c79a6b", hov: "#ddc3a3", none: "#efe6d8", prodNone: "#dcd6cd", noScore: "#e4dbcd",
      mcol: { 3: "#14213d", 2: "#1f5fa8", 1: "#4a90d9", b: "#8e44ad" } }
  };
  var theme = "light";
  try { theme = localStorage.getItem("ga-theme") || "light"; } catch (e) { /* yok */ }
  if (!THEMES[theme]) theme = "light";
  document.documentElement.dataset.theme = theme;
  function TH() { return THEMES[theme]; }
  Object.assign(MCOL, THEMES[theme].mcol);
  function setTheme(tn) {
    theme = tn;
    document.documentElement.dataset.theme = tn;
    try { localStorage.setItem("ga-theme", tn); } catch (e) { /* yok */ }
    Object.assign(MCOL, TH().mcol);
    var b = document.getElementById("themebtn");
    if (b) { b.textContent = tn === "light" ? "🌙" : "☀️"; b.setAttribute("aria-label", t(tn === "light" ? "toNight" : "toDay")); b.title = b.getAttribute("aria-label"); }
    if (!globe) return;
    paintGlobe();
    paintLandStyle();
    paintLand(true);
    if (S.points) globe.pointsData(S.points.slice());
    legend(); renderRank();
    if (S.country) renderPanel();
    if (S.recipe) openRecipe(S.recipe[0], S.recipe[1], true);
  }
  function paintGlobe() {
    var T0 = TH(), mat = globe.globeMaterial();
    mat.color.set(T0.ocean);
    if (mat.emissive) mat.emissive.set(T0.glow);
    mat.shininess = 6;
    globe.atmosphereColor(T0.atmo).atmosphereAltitude(T0.atmoAlt);
  }
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
    gameBar();
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
    // Sol alt köşede küçük gösterge: renk çubuğu + kısa açıklama; ayarlar ⚙ menüsünde
    var box = document.getElementById("legend");
    box.className = "legend lg-" + l;
    box.innerHTML = '<div class="lg-main">' + h + "</div>" +
      (tools ? '<button class="lg-gear' + (S.lgPop ? " on" : "") + '" aria-label="' + esc(t("settingsT")) + '" title="' + esc(t("settingsT")) + '">⚙</button>' +
        '<div class="lg-pop"' + (S.lgPop ? "" : " hidden") + '><div class="lg-tools">' + tools + "</div></div>" : "");
    var gear = box.querySelector(".lg-gear");
    if (gear) gear.addEventListener("click", function (e) { e.stopPropagation(); S.lgPop = !S.lgPop; legend(); });
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
  document.addEventListener("click", function (e) { if (S.lgPop && !e.target.closest("#legend")) { S.lgPop = false; legend(); } });
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
  // Yakınlaşınca ülke sınırları ve yüzeyleri ayrıntılı (1:50m) sürüme geçer. Uzaktan bakışta hafif sürüm kalır.
  // Yüzeyler önceden üçgenlenmiş geldiği için (scripts/build_mesh.py) geçiş tek seferde ve bir iki kare sürer.
  var hiLoading = null;
  function upgradeGeo() {
    if (hiLoading) return;
    hiLoading = Promise.all([getJSON("data/countries_hi.geojson"), loadMesh("data/mesh_hi.bin")]).then(function (r) {
      var by = {};
      r[0].features.forEach(function (f) { by[f.properties.iso] = f; });
      S.geo.features.forEach(function (f) {
        var h = by[f.properties.iso];
        if (h) { f.geometry = h.geometry; f.__bb = null; f.__hi = true; }
      });
      LAND.mesh = r[1];
      buildLand();
    }).catch(function (e) { console.error(e); hiLoading = null; });
  }
  function bboxOf(geom) {
    var b = [180, 90, -180, -90];
    (geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates).forEach(function (pl) {
      pl[0].forEach(function (p) { if (p[0] < b[0]) b[0] = p[0]; if (p[1] < b[1]) b[1] = p[1]; if (p[0] > b[2]) b[2] = p[0]; if (p[1] > b[3]) b[3] = p[1]; });
    });
    return b;
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
  // Ülke etiketi (fareyle üzerine gelince): eskiden globe.gl veriyordu, ülke yüzeyleri artık tek ağ olduğu için burada
  function showCtip(f, x, y) {
    var t = document.getElementById("ctip");
    if (!f) { t.hidden = true; return; }
    var iso = f.properties.iso;
    if (t.dataset.iso !== iso + PREF.lens + lang) {
      t.innerHTML = '<div class="tip">' + flag(iso2Of(iso)) + " " + esc(cname(iso)) + tipSub(iso, S.index[iso]) + "</div>";
      t.dataset.iso = iso + PREF.lens + lang;
    }
    t.hidden = false;
    var w = t.offsetWidth, h = t.offsetHeight;
    t.style.left = Math.min(x + 14, window.innerWidth - w - 8) + "px";
    t.style.top = (y + 18 + h > window.innerHeight ? y - h - 10 : y + 18) + "px";
  }
  function setHover(f) {
    if (f === S.hover) return;
    S.hover = f;
    refresh();
  }
  function bindPointHover() {
    var el = document.getElementById("globe"), drag = false, last = null;
    el.addEventListener("pointerdown", function () { drag = true; showCtip(null); setHover(null); });
    window.addEventListener("pointerup", function () { drag = false; });
    el.addEventListener("mousemove", function (e) { last = e; probe(e); });
    // Fare durduğu halde küre hareket ederse (uçuş, kendi kendine dönme) imlecin altındaki ülke yeniden bulunur:
    // aksi halde etiket eski ülkede asılı kalıyordu
    globe.controls().addEventListener("change", function () { if (last) probe(last); });
    function probe(e) {
      if (hoverRaf) return;
      hoverRaf = requestAnimationFrame(function () {
        hoverRaf = 0;
        var r = el.getBoundingClientRect(), c = globe.toGlobeCoords(e.clientX - r.left, e.clientY - r.top);
        var m = c && S.points && S.points.length ? nearestPoint(c.lat, c.lng, 0.35) : null;
        showPtip(m, e.clientX, e.clientY);
        // sürüklerken ülke vurgusu ve etiketi gösterilmez (küre dönerken etiket titremesin)
        var f = c && !drag && !m && !e.target.closest(".wmark, .tmark") ? featureAt(c.lat, c.lng) : null;
        setHover(f);
        showCtip(f, e.clientX, e.clientY);
        el.style.cursor = m || f ? "pointer" : drag ? "grabbing" : "grab";
      });
    }
    el.addEventListener("mouseleave", function () { last = null; showPtip(null); showCtip(null); setHover(null); });
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
  // ------------------------------------------------------------ ülke yüzeyleri: tek ağ
  // Eskiden her ülke parçası globe.gl'de ayrı nesneydi: karede ~4.100 çizim komutu, sitenin fps darboğazı.
  // Şimdi tüm yüzeyler tek ağ (renkler köşelere yazılır), tüm sınırlar tek çizgi nesnesi: 2 çizim komutu.
  // Üçgenler önceden hesaplanır (scripts/build_mesh.py); seçim/üzerine gelme/mercek değişince yalnızca renk dizisi güncellenir.
  var LAND = { mesh: null, K: null, group: null };
  function loadMesh(u) {
    return fetch(u).then(function (r) { if (!r.ok) throw new Error(u + " " + r.status); return r.arrayBuffer(); }).then(function (buf) {
      var dv = new DataView(buf), n = dv.getUint32(0, true), o = 4, map = {}, tv = 0, ti = 0, i;
      for (i = 0; i < n; i++) {
        var iso = String.fromCharCode(dv.getUint8(o), dv.getUint8(o + 1), dv.getUint8(o + 2), dv.getUint8(o + 3)).trim();
        var nv = dv.getUint32(o + 4, true), ni = dv.getUint32(o + 8, true);
        map[iso] = { v0: tv, nv: nv, i0: ti, ni: ni };
        tv += nv; ti += ni; o += 12;
      }
      return { map: map, V: new Float32Array(buf, o, tv * 2), I: new Uint32Array(buf, o + tv * 8, ti) };
    });
  }
  // three.js sınıfları globe.gl paketinin içinde, dışarı açılmıyor; sahnedeki nesnelerden alınır (aynı kopya olmalı).
  // Sahne globe.gl kurulduktan birkaç kare sonra dolar (enlem-boylam ağı LineSegments, okyanus Mesh vb.); hazır değilse null.
  function threeKit() {
    if (LAND.K) return LAND.K;
    var K = {}, sc = globe.scene();
    sc.traverse(function (o) {
      if (o.isMesh && !K.Mesh) K.Mesh = o.constructor;
      if (o.isMesh && o.geometry && o.geometry.type === "BufferGeometry" && !K.BG) K.BG = o.geometry.constructor;
      if (o.isMesh && o.geometry && o.geometry.attributes.position && !K.Attr) K.Attr = o.geometry.attributes.position.constructor;
      var m = o.material && (Array.isArray(o.material) ? o.material[0] : o.material);
      if (m && m.type === "MeshBasicMaterial" && !K.Basic) { K.Basic = m.constructor; K.Color = m.color.constructor; }
      if (o.isLineSegments && !K.Line) { K.Line = o.constructor; K.LineMat = o.material.constructor; }
    });
    if (!K.BG) {   // SphereGeometry'nin üst sınıfı BufferGeometry'dir
      sc.traverse(function (o) { if (o.isMesh && !K.BG) K.BG = Object.getPrototypeOf(o.geometry.constructor.prototype).constructor; });
    }
    if (!(K.Mesh && K.BG && K.Attr && K.Basic && K.Line)) return null;
    K.BA = Object.getPrototypeOf(K.Attr.prototype).constructor;   // Float32BufferAttribute'un üst sınıfı
    LAND.K = K;
    return K;
  }
  function rgbaParse(str) {
    var m = /rgba?\(([^)]+)\)/.exec(str || ""), a = 1;
    if (m) { var p = m[1].split(","); if (p.length > 3) a = +p[3]; }
    return a;
  }
  function sph(lng, lat, R, out, k) {
    var phi = (90 - lat) * Math.PI / 180, th = (90 - lng) * Math.PI / 180, sp = Math.sin(phi);
    out[k] = R * sp * Math.cos(th); out[k + 1] = R * Math.cos(phi); out[k + 2] = R * sp * Math.sin(th);
  }
  function buildLand() {
    if (!globe || !LAND.mesh) return;
    var K = threeKit();
    if (!K) { requestAnimationFrame(buildLand); return; }
    var M = LAND.mesh, feats = S.geo.features, tv = 0, ti = 0;
    feats.forEach(function (f) { var e = M.map[f.properties.iso]; f.__nv = e ? e.nv : 0; f.__v0 = tv; tv += f.__nv; ti += e ? e.ni : 0; });
    var pos = new Float32Array(tv * 3), col = new Float32Array(tv * 3), idx = new Uint32Array(ti), R = 100 * (1 + GROUND), w = 0;
    feats.forEach(function (f) {
      var e = M.map[f.properties.iso]; if (!e) return;
      for (var i = 0; i < e.nv; i++) sph(M.V[(e.v0 + i) * 2], M.V[(e.v0 + i) * 2 + 1], R, pos, (f.__v0 + i) * 3);
      for (var j = 0; j < e.ni; j++) idx[w++] = M.I[e.i0 + j] + f.__v0;
      f.__col = null;
    });
    // sınır çizgileri: ülke halkalarından, uzun kenarlar 1°'lik parçalara bölünür (kiriş küreye gömülmesin)
    var segs = [], Rl = 100 * (1 + GROUND + 0.0003);
    feats.forEach(function (f) {
      var g = f.geometry, polys = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
      polys.forEach(function (pl) { pl.forEach(function (r) {
        for (var i = 1; i < r.length; i++) {
          var a = r[i - 1], b = r[i], n = Math.max(1, Math.ceil(Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1]))));
          if (Math.abs(b[0] - a[0]) > 180) continue;
          for (var k = 0; k < n; k++) segs.push(a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n, a[0] + (b[0] - a[0]) * (k + 1) / n, a[1] + (b[1] - a[1]) * (k + 1) / n);
        }
      }); });
    });
    // Kıyı duvarı (yüzeyden okyanusa inen kenar) çizilmez: açıyla bakınca adaların yanında gri gölge kopyası gibi görünüyordu
    var ns = segs.length / 4, lp = new Float32Array(ns * 6);
    for (var q = 0; q < ns; q++) { sph(segs[q * 4], segs[q * 4 + 1], Rl, lp, q * 6); sph(segs[q * 4 + 2], segs[q * 4 + 3], Rl, lp, q * 6 + 3); }
    function geo(p, i, c) {
      var g = new K.BG();
      g.setAttribute("position", new K.Attr(p, 3));
      if (c) g.setAttribute("color", new K.Attr(c, 3));
      if (i) g.setIndex(new K.BA(i, 1));             // ham BufferAttribute: Uint32 kalsın (Float32'ye çevrilirse hiçbir şey çizilmez)
      g.computeBoundingSphere();
      return g;
    }
    if (LAND.group) { LAND.group.children.forEach(function (o) { o.geometry.dispose(); }); globe.scene().remove(LAND.group); }
    var T0 = TH();
    var capMat = LAND.capMat || (LAND.capMat = new K.Basic({ vertexColors: true, side: 2 }));
    var lineMat = LAND.lineMat || (LAND.lineMat = new K.LineMat({ transparent: true }));
    var cap = new K.Mesh(geo(pos, idx, col), capMat), line = new K.Line(geo(lp), lineMat);
    LAND.colAttr = cap.geometry.attributes.color;
    var grp = new (Object.getPrototypeOf(K.Mesh.prototype).constructor)();   // Object3D: üç nesnenin kabı
    [cap, line].forEach(function (o) { o.raycast = function () {}; grp.add(o); });   // globe.gl'in fare taraması bu ağlarda dolaşmasın
    LAND.group = grp;
    globe.scene().add(grp);
    paintLandStyle();
    paintLand(true);
  }
  // tema: sınır çizgisi rengi
  function paintLandStyle() {
    if (!LAND.capMat) return;
    var T0 = TH();
    LAND.lineMat.color.set(T0.stroke.replace(/rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/, "rgb($1,$2,$3)")); LAND.lineMat.opacity = rgbaParse(T0.stroke);
  }
  // Ülke renkleri köşe dizisine yazılır; yalnızca rengi değişen ülkeler güncellenir
  function paintLand(all) {
    if (!LAND.colAttr) return;
    var K = LAND.K, C = LAND.C || (LAND.C = new K.Color()), arr = LAND.colAttr.array, dirty = false;
    S.geo.features.forEach(function (f) {
      if (!f.__nv) return;
      var cs = capColor({ __f: f, __k: "both" });
      if (!all && cs === f.__col) return;
      f.__col = cs; dirty = true;
      C.set(cs);
      for (var i = f.__v0, e = f.__v0 + f.__nv; i < e; i++) { arr[i * 3] = C.r; arr[i * 3 + 1] = C.g; arr[i * 3 + 2] = C.b; }
    });
    if (dirty) LAND.colAttr.needsUpdate = true;
  }
  function capColor(d) {
    if (d.__k === "line") return null;
    var f = d.__f, c = S.index[f.properties.iso], lift = f === S.selected ? 0.35 : f === S.hover ? 0.2 : 0;
    // Ürün modlarında üretimi olmayan ülkeler mavi-gri: kahverengi ölçekle karışmasın
    var T0 = TH(), blank = f === S.selected ? T0.sel : f === S.hover ? T0.hov : LY.color === "none" ? T0.none : PRODS[LY.color] ? T0.prodNone : T0.noScore;
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
    el.style.visibility = !S.topOn && LY.text !== "off" && el.textContent && el.dataset.front !== "0" && el.dataset.limb !== "1" && +el.dataset.rank <= labelRank ? "visible" : "hidden";
  }
  function initGlobe() {
    var el = document.getElementById("globe");
    globe = Globe()(el)
      .backgroundColor("rgba(0,0,0,0)")      // sayfa zemini (CSS --page) görünsün
      .showAtmosphere(true)
      // Ülke yüzeyleri globe.gl katmanı değil, tek ağ (bkz. LAND / buildLand). Tüm katmanlar aynı yükseklikte (GROUND):
      // ülke yüzeyi ile noktalar/işaretler arasında açıyla bakınca kayma (paralaks) olmasın. Seçim ve üzerine gelme renkle gösterilir.
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
        d.className = "clabel r" + Math.min(6, f.properties.rank || 6) + (LY.text === "spice" || LY.text === "sauce" ? " flav" : "");
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
        if (pov.altitude < 1.4) upgradeGeo();
        var r = pov.altitude > 2.2 ? 2 : pov.altitude > 1.5 ? 3 : pov.altitude > 1.0 ? 4 : pov.altitude > 0.6 ? 5 : 9;
        if (r !== labelRank) { labelRank = r; labelEls.forEach(function (x) { applyLabel(x[0]); }); }
      });
    paintGlobe();
    // Retina ekranlarda 2-3 kat piksel çizilmesin: keskinlik farkı görünmez, piksel yükü 2-4 kat düşer
    globe.renderer().setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    buildLand();
    globe.pointOfView({ lat: 34, lng: 28, altitude: 2.1 }, 0);
    var ctl = globe.controls();
    // Kullanıcı küreye dokunduğu an (sürükleme, yakınlaştırma, tıklama) dönme kalıcı olarak durur
    ctl.addEventListener("start", function () { ctl.autoRotate = false; });
    el.addEventListener("wheel", function () { ctl.autoRotate = false; }, { passive: true });
    ctl.autoRotate = true; ctl.autoRotateSpeed = 0.3; ctl.minDistance = 130; ctl.maxDistance = 600;
    // Kürenin kenarına yakın ülke adları gizlenir: orada adlar sıkışıp üst üste biniyor, okunmuyordu.
    // Ölçü: ülkenin yüzey normali ile kameraya bakış arasındaki açı, görünen ufka göre (yakınlaşınca ufuk daralır).
    setInterval(function () {
      if (document.hidden || !labelEls.length) return;
      var cp = globe.camera().position, d = Math.hypot(cp.x, cp.y, cp.z) || 1, h = 100 / d, lim = h + 0.22 * (1 - h);
      var cx = cp.x / d, cy = cp.y / d, cz = cp.z / d, u = [0, 0, 0];
      labelEls.forEach(function (x) {
        var pr = x[1].properties; sph(pr.lx || 0, pr.ly || 0, 1, u, 0);
        var limb = u[0] * cx + u[1] * cy + u[2] * cz < lim ? "1" : "0";
        if (x[0].dataset.limb !== limb) { x[0].dataset.limb = limb; applyLabel(x[0]); }
      });
    }, 150);
    function size() { globe.width(window.innerWidth).height(window.innerHeight); }
    window.addEventListener("resize", size);
    size();
  }
  function refresh() { paintLand(false); }

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
      if (c) stampCountry(iso);
      var a0 = anchor(iso); if (a0) pulseAt(a0);
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
      '<p>' + esc(L(c.score.why)) + "</p><small>" + esc(t("scoreTitle")) + " · " + esc(t("scoreAI")) + "</small></div></div>" +
      (c.score.subs ? '<div class="subs">' + ["influence", "richness", "heritage", "products"].map(function (k) {
        var x = c.score.subs[k];
        return '<div class="sub"><span>' + esc(t("sub_" + k)) + "</span><b>" + x + '</b><i><em style="--w:' + x + "%;--c:" + scoreColor(x) + '"></em></i></div>';
      }).join("") + "</div>" : "");
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
    var tabs = [["genel", "✨ " + esc(t("tab_genel"))]];
    var prods = c.missing ? [] : Object.keys(PRODS).filter(function (k) { return c[k]; });
    if (!c.missing) {
      if (nrec) tabs.push(["tarif", "📖 " + esc(t("tab_tarif")) + " <em>" + nrec + "</em>"]);
      // Tek ürün varsa adıyla, birden çoksa simgeleriyle (dock'taki simgelerle aynı)
      if (prods.length) tabs.push(["icecek", PRODS[prods[0]].icon + " " + prods.map(function (k) { return esc(t("lens_" + k)); }).join(" · ")]);
      tabs.push(["restoran", "🍽️ " + esc(t("tab_restoran"))]);
      if (c.production || c.exports) tabs.push(["tarim", "🌾 " + esc(t("tab_tarim"))]);
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
      tasteDish(iso, id);
      var img = r.image;
      var h = photo(img, r.category, "hero") + '<div class="r-main">' +
        '<div class="r-top"><button class="r-country" data-country="' + iso + '">' + flag(c.iso2) + " " + esc(cname(iso)) + "</button>" +
        '<span class="r-act"><button class="r-fav' + (isFav(iso, id) ? " on" : "") + '" aria-label="' + esc(t("favT")) + '" title="' + esc(t("favT")) + '">' + (isFav(iso, id) ? "❤️" : "🤍") + "</button>" +
        '<button class="r-share" aria-label="' + esc(t("shareT")) + '" title="' + esc(t("shareT")) + '">🔗</button></span></div>' +
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
        pairBox(r.pairing, r.custom) +
        relBox(r) +
        '<div class="r-foot">' + esc(r.reviewed ? t("aiNote") : t("aiNoteUnrev")) + "<br>" +
        (img && img.url ? esc(t("photo")) + ": " + (img.credit ? esc(img.credit) + ", " : "") + (img.license ? esc(img.license) + ", " : "") +
          '<a href="' + esc(img.source || img.page) + '" target="_blank" rel="noopener">Wikimedia Commons</a>' : esc(t("noPhoto"))) +
        "</div></div>";
      document.getElementById("recipe-body").innerHTML = h;
      var fb = document.querySelector("#recipe-body .r-fav");
      fb.addEventListener("click", function () {
        var on = toggleFav(iso, id);
        fb.classList.toggle("on", on); fb.textContent = on ? "❤️" : "🤍";
        if (on) toast('<span class="t-ic">❤️</span><span><b>' + esc(t("favAdded")) + "</b>" + esc(L(r.name)) + "</span>");
      });
      document.querySelector("#recipe-body .r-share").addEventListener("click", function () { shareRecipe(iso, id, L(r.name)); });
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
  function pairBox(p, cu) {
    if (!p && !cu) return "";
    var h = '<section class="pair">';
    if (cu) h += '<div class="pair-cu"><span class="cu-ic">' + (cu.alcohol ? "🥂" : "🥛") + '</span><div><span class="cu-k">' + esc(t("customT")) +
      "</span><b>" + esc(L(cu.drink)) + "</b><p>" + esc(L(cu.note)) + "</p></div></div>";
    if (!p) return h + "</section>";
    // Gelenek ile alkolsüz alternatif aynı içecekse ikincisini tekrar gösterme
    var same = cu && norm(L(p.soft)).indexOf(norm(L(cu.drink)).split(" ")[0]) >= 0;
    return h + '<div class="pair-h"><span class="pair-ic">🍷</span><div><h4>' + esc(t("pairT")) + "</h4><b>" + esc(L(p.style)) + "</b></div></div>" +
      '<div class="pair-w">' + p.wines.map(function (w, i) {
        return '<span class="pw' + (i === 0 && p.local ? " loc" : "") + '">' + esc(w) + (i === 0 && p.local ? " <em>" + esc(t("pairLocal")) + "</em>" : "") + "</span>";
      }).join("") + "</div>" +
      '<p class="pair-why"><b>' + esc(t("pairWhy")) + "</b> " + esc(L(p.why)) + "</p>" +
      (same ? "" : '<div class="pair-soft">🥤 <b>' + esc(t("pairSoft")) + ":</b> " + esc(L(p.soft)) + "</div>") +
      '<small>' + esc(t("pairNote")) + "</small></section>";
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

  // ------------------------------------------------------------ oyunlaştırma: pasaport, rozetler, bilgi yarışması, rastgele keşif
  // İlerleme yalnızca kullanıcının tarayıcısında (localStorage) tutulur; sunucuya hiçbir şey gönderilmez.
  var G = { visited: [], dishes: [], best: 0, streak: 0, answered: 0, correct: 0, badges: [] };
  try { Object.assign(G, JSON.parse(localStorage.getItem("ga-pass") || "{}")); } catch (e) { /* yok */ }
  function saveG() { try { localStorage.setItem("ga-pass", JSON.stringify(G)); } catch (e) { /* yok */ } }
  var REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  var BADGES = [
    { id: "first", ic: "🛂", need: function () { return G.visited.length >= 1; } },
    { id: "trav10", ic: "🧳", need: function () { return G.visited.length >= 10; } },
    { id: "trav25", ic: "🧭", need: function () { return G.visited.length >= 25; } },
    { id: "trav100", ic: "🌍", need: function () { return G.visited.length >= 100; } },
    { id: "reg_Africa", ic: "🌍", need: function () { return regionCount("Africa") >= 5; } },
    { id: "reg_Americas", ic: "🌎", need: function () { return regionCount("Americas") >= 5; } },
    { id: "reg_Asia", ic: "🌏", need: function () { return regionCount("Asia") >= 5; } },
    { id: "reg_Europe", ic: "🏰", need: function () { return regionCount("Europe") >= 5; } },
    { id: "reg_Oceania", ic: "🏝️", need: function () { return regionCount("Oceania") >= 3; } },
    { id: "rec10", ic: "📖", need: function () { return G.dishes.length >= 10; } },
    { id: "rec50", ic: "👨‍🍳", need: function () { return G.dishes.length >= 50; } },
    { id: "top10", ic: "🏆", need: function () { return S.top && S.top.items.every(function (it) { return G.dishes.indexOf(it.iso + "/" + it.id) >= 0; }); } },
    { id: "quiz5", ic: "🎯", need: function () { return G.best >= 5; } },
    { id: "quiz15", ic: "🔥", need: function () { return G.best >= 15; } },
    { id: "catfriend", ic: "🐾", need: function () { return (G.pets || 0) >= 8; } }
  ];
  function regionCount(r) { return G.visited.filter(function (i) { return S.index[i] && S.index[i].region === r; }).length; }
  function totalCountries() { return Object.keys(S.index).filter(function (k) { return S.index[k].recipes; }).length; }
  // Bildirimler sırayla gösterilir (damga ve rozet aynı anda gelince biri diğerini ezmesin)
  var toastQ = [], toastBusy = false;
  function toast(html) { toastQ.push(html); if (!toastBusy) nextToast(); }
  function nextToast() {
    var el = document.getElementById("toast"), html = toastQ.shift();
    if (!html) { toastBusy = false; return; }
    toastBusy = true;
    el.innerHTML = html;
    el.classList.remove("show"); void el.offsetWidth; el.classList.add("show");
    setTimeout(function () { el.classList.remove("show"); nextToast(); }, 3700);
  }
  function checkBadges() {
    BADGES.forEach(function (b) {
      if (G.badges.indexOf(b.id) < 0 && b.need()) {
        G.badges.push(b.id); saveG();
        (function () { toast('<span class="t-ic">' + b.ic + "</span><span><b>" + esc(t("badgeNew")) + "</b>" + esc(t("b_" + b.id)) + "</span>"); })();
      }
    });
    gameBar();
  }
  function stampCountry(iso) {
    if (!S.index[iso] || !S.index[iso].recipes || G.visited.indexOf(iso) >= 0) return;
    G.visited.push(iso); saveG();
    toast('<span class="t-stamp">' + flag(iso2Of(iso)) + "</span><span><b>" + esc(t("stampNew")) + "</b>" + esc(cname(iso)) + " · " +
      G.visited.length + "/" + totalCountries() + "</span>");
    checkBadges();
  }
  function tasteDish(iso, id) {
    var k = iso + "/" + id;
    if (G.dishes.indexOf(k) >= 0) return;
    G.dishes.push(k); saveG(); checkBadges();
  }
  function gameBar() {
    var b = document.getElementById("gamebar");
    if (!b) return;
    b.innerHTML = '<button class="gb" data-g="pass" title="' + esc(t("passT")) + '"><span>🛂</span>' + (G.visited.length ? "<em>" + G.visited.length + "</em>" : "") + "</button>" +
      '<button class="gb" data-g="quiz" title="' + esc(t("quizT")) + '"><span>🎯</span>' + (G.best ? "<em>" + G.best + "</em>" : "") + "</button>" +
      '<button class="gb" data-g="dice" title="' + esc(t("diceT")) + '"><span>🎲</span></button>' +
      '<button class="gb' + (YARN.on ? " on" : "") + '" data-g="yarn" title="' + esc(t("yarnT")) + '"><span>🧶</span></button>' +
      (catEnabled() ? "" : '<button class="gb" data-g="cat" title="' + esc(t("catT")) + '"><span>🐱</span></button>');
    Array.prototype.forEach.call(b.querySelectorAll(".gb"), function (x) {
      x.addEventListener("click", function () { ({ pass: openPass, quiz: openQuiz, dice: randomTrip, cat: showCat, yarn: function () { toggleYarn(); } })[x.dataset.g](); });
    });
  }
  function openG(html) {
    var m = document.getElementById("gmodal");
    document.getElementById("g-body").innerHTML = html;
    m.hidden = false;
    return document.getElementById("g-body");
  }
  function closeG() { document.getElementById("gmodal").hidden = true; }
  function openPass() {
    var n = G.visited.length, tot = totalCountries(), pct = tot ? n / tot : 0, R = 46, C = 2 * Math.PI * R;
    var h = '<div class="ps-h"><div class="ps-ring"><svg viewBox="0 0 110 110"><circle cx="55" cy="55" r="' + R + '" class="sc-track"/><circle cx="55" cy="55" r="' + R +
      '" class="ps-arc" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + (C * (1 - pct)).toFixed(1) + '"/></svg><div><b>' + n + "</b><span>/" + tot + "</span></div></div>" +
      "<div><h2>🛂 " + esc(t("passT")) + "</h2><p>" + esc(t("passSub", { d: G.dishes.length, q: G.best })) + "</p></div></div>";
    h += '<div class="ps-reg">' + REGIONS.map(function (r) {
      var all = Object.keys(S.index).filter(function (k) { return S.index[k].region === r && S.index[k].recipes; }).length, v = regionCount(r);
      return '<div class="ps-r"><span>' + esc(t("reg_" + r)) + "</span><b>" + v + "/" + all + '</b><i><em style="width:' + (all ? v / all * 100 : 0).toFixed(0) + '%"></em></i></div>';
    }).join("") + "</div>";
    h += "<h3>" + esc(t("badgesT")) + '</h3><div class="ps-badges">' + BADGES.map(function (b) {
      var on = G.badges.indexOf(b.id) >= 0;
      return '<div class="bd' + (on ? " on" : "") + '"><span>' + b.ic + "</span><b>" + esc(t("b_" + b.id)) + "</b><small>" + esc(t("bh_" + b.id)) + "</small></div>";
    }).join("") + "</div>";
    var fav = (G.fav || []).filter(function (k) { return S.names && S.names[k]; });
    if (fav.length) h += "<h3>❤️ " + esc(t("favsT")) + '</h3><div class="ps-fav">' + fav.map(function (k) {
      var x = S.names[k];
      return '<button class="pf" data-k="' + esc(k) + '">' + flag(iso2Of(x[0])) + " " + esc(lang === "tr" ? x[2] : x[3]) + "</button>";
    }).join("") + "</div>";
    h += "<h3>" + esc(t("stampsT")) + "</h3>" + (n ? '<div class="ps-stamps">' + G.visited.map(function (i) {
      return '<button class="st" data-iso="' + i + '" title="' + esc(cname(i)) + '">' + flag(iso2Of(i)) + "</button>";
    }).join("") + "</div>" : '<p class="nodata">' + esc(t("noStamps")) + "</p>");
    var body = openG(h);
    Array.prototype.forEach.call(body.querySelectorAll(".pf"), function (x) {
      x.addEventListener("click", function () { var p = x.dataset.k.split("/"); closeG(); openRecipe(p[0], p[1]); });
    });
    Array.prototype.forEach.call(body.querySelectorAll(".st"), function (x) {
      x.addEventListener("click", function () { closeG(); selectCountry(x.dataset.iso, true); });
    });
  }
  // Bilgi yarışması: fotoğraflı bir yemek, 4 ülke seçeneği (biri aynı kıtadan)
  function pickQuiz() {
    var pool = Object.keys(S.index).filter(function (k) { return S.index[k].recipes >= 5; });
    var iso = pool[Math.floor(Math.random() * pool.length)];
    return loadCountry(iso).then(function (c) {
      var rs = (c && c.recipes || []).filter(function (r) { return r.image && r.image.url && r.category !== "drink"; });
      if (!rs.length) return pickQuiz();
      var r = rs[Math.floor(Math.random() * rs.length)], reg = S.index[iso].region;
      var same = pool.filter(function (k) { return k !== iso && S.index[k].region === reg; });
      var other = pool.filter(function (k) { return k !== iso; });
      var opts = [iso];
      if (same.length) opts.push(same[Math.floor(Math.random() * same.length)]);
      while (opts.length < 4) { var o = other[Math.floor(Math.random() * other.length)]; if (opts.indexOf(o) < 0) opts.push(o); }
      opts.sort(function () { return Math.random() - 0.5; });
      return { iso: iso, r: r, opts: opts };
    });
  }
  function openQuiz() {
    pickQuiz().then(function (q) {
      var h = '<div class="qz-h"><h2>🎯 ' + esc(t("quizT")) + '</h2><div class="qz-sc"><span>🔥 ' + esc(t("streak")) + ": <b>" + G.streak + "</b></span><span>🏅 " +
        esc(t("best")) + ": <b>" + G.best + "</b></span></div></div>" + photo(q.r.image, q.r.category, "qz-ph") +
        // Yemeğin adı cevaptan sonra açılır: "Fransız Soğan Çorbası" gibi adlar cevabı ele veriyordu
        '<p class="qz-q">' + (CAT_ICON[q.r.category] || "🍽️") + " " + esc(t("quizQ", { d: t("cat." + q.r.category) })) + '</p><div class="qz-o">' + q.opts.map(function (o) {
          return '<button data-iso="' + o + '">' + flag(iso2Of(o)) + " " + esc(cname(o)) + "</button>";
        }).join("") + '</div><div class="qz-f"></div>';
      var body = openG(h);
      Array.prototype.forEach.call(body.querySelectorAll(".qz-o button"), function (b) {
        b.addEventListener("click", function () {
          if (body.querySelector(".qz-o.done")) return;
          var ok = b.dataset.iso === q.iso;
          body.querySelector(".qz-o").classList.add("done");
          Array.prototype.forEach.call(body.querySelectorAll(".qz-o button"), function (x) {
            if (x.dataset.iso === q.iso) x.classList.add("ok"); else if (x === b) x.classList.add("no");
          });
          G.answered++; if (ok) { G.correct++; G.streak++; G.best = Math.max(G.best, G.streak); } else G.streak = 0;
          saveG(); checkBadges();
          body.querySelector(".qz-sc").innerHTML = "<span>🔥 " + esc(t("streak")) + ": <b>" + G.streak + "</b></span><span>🏅 " + esc(t("best")) + ": <b>" + G.best + "</b></span>";
          body.querySelector(".qz-f").innerHTML = '<p class="' + (ok ? "qz-yes" : "qz-no") + '">' + esc(ok ? t("quizYes") : t("quizNo", { c: cname(q.iso) })) +
            ' <span class="qz-n">' + esc(L(q.r.name)) + "</span></p>" +
            '<button class="qz-go">📖 ' + esc(t("toRecipe")) + '</button><button class="qz-next">' + esc(t("next")) + " →</button>";
          var a = anchor(q.iso);
          if (a) { globe.controls().autoRotate = false; globe.pointOfView({ lat: a.lat, lng: a.lng, altitude: 1.8 }, 1400); pulseAt(a); }
          body.querySelector(".qz-next").addEventListener("click", openQuiz);
          body.querySelector(".qz-go").addEventListener("click", function () { closeG(); openRecipe(q.iso, q.r.id); });
        });
      });
    });
  }
  // Favoriler (tarayıcıda) ve paylaşım
  function isFav(iso, id) { return (G.fav || []).indexOf(iso + "/" + id) >= 0; }
  function toggleFav(iso, id) {
    G.fav = G.fav || [];
    var k = iso + "/" + id, i = G.fav.indexOf(k);
    if (i >= 0) G.fav.splice(i, 1); else G.fav.unshift(k);
    saveG();
    return i < 0;
  }
  function shareRecipe(iso, id, name) {
    var url = location.origin + location.pathname + "#" + iso + "/" + id, title = name + " · " + t("title");
    if (navigator.share) { navigator.share({ title: title, url: url }).catch(function () { /* vazgeçildi */ }); return; }
    var done = function () { toast('<span class="t-ic">🔗</span><span><b>' + esc(t("linkCopied")) + "</b>" + esc(name) + "</span>"); };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt(t("shareT"), url); });
    else prompt(t("shareT"), url);
  }
  function randomTrip() {
    var pool = Object.keys(S.index).filter(function (k) { return S.index[k].recipes && G.visited.indexOf(k) < 0; });
    if (!pool.length) pool = Object.keys(S.index).filter(function (k) { return S.index[k].recipes; });
    var iso = pool[Math.floor(Math.random() * pool.length)];
    closeG();
    // önce kısa bir dönüş, sonra hedefe iniş
    var p = globe.pointOfView();
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat: p.lat, lng: p.lng + 120, altitude: 2.6 }, 700);
    setTimeout(function () { selectCountry(iso, true); }, 750);
  }
  // Seçilen ülkede yayılan halka
  function pulseAt(a) {
    if (!globe || S.relBack) return;
    globe.ringsData([a]).ringLat(function (d) { return d.lat; }).ringLng(function (d) { return d.lng; })
      .ringColor(function () { return function (k) { return "rgba(240,162,59," + (1 - k) + ")"; }; })
      .ringMaxRadius(5).ringPropagationSpeed(3).ringRepeatPeriod(900);
    clearTimeout(pulseAt._t);
    pulseAt._t = setTimeout(function () { if (!S.relBack) globe.ringsData([]); }, 2800);
  }

  // ------------------------------------------------------------ Tarçın: ekranda gezinen, ara ara mutfak bilgisi veren kedi
  // Fakültenin kedisinden: siyah ağırlıklı, sarı-turuncu lekeli, beyaz göğüslü ve patili. Özgün SVG çizim.
  var CAT = { el: null, x: 120, dir: 1, state: "stand", until: 0, target: null, tips: null, order: [], said: 0, nextTalk: 0, talking: false, raf: 0, last: 0 };
  // ---- Tarçın'ın iskeleti: her karede yeniden hesaplanan 2B kukla ----
  // Görünüm kutusu 170x120, zemin y=110, kedi sağa bakar (sola dönüş kapsayıcıyı aynalayarak).
  // Bacaklar iki/üç parçalı ve ters kinematikle (IK) bükülür; kuyruk 7 parçalı; pozlar arası yumuşak geçiş.
  var RIG = (function () {
    var NS = "http://www.w3.org/2000/svg", GY = 110;
    // Renkler fakültedeki kedinin fotoğraflarından
    var COL = { k: "#1f1a19", far: "#141010", gold: "#c47a38", gold2: "#a6602c", w: "#f7f3ec", wfar: "#ddd6cb", pink: "#d99ba0", eye: "#c9d66a", line: "#4d3f39", nose: "#3b2d2b" };
    var POSES = {
      stand:   { R: [60, 76], F: [112, 77], th: 15, H: [135, 57], ha: -4, tb: 150, tc: -9, tw: 6, haunch: 0.35, eye: 1, mouth: 0, earBack: 0,
                 P: { fn: [114, GY], ff: [107, GY], rn: [60, GY], rf: [53, GY] } },
      sit:     { R: [66, 101], F: [101, 74], th: 15, H: [114, 50], ha: -3, tb: 212, tc: 21, tw: 3, haunch: 1, eye: 1, mouth: 0, earBack: 0,
                 P: { fn: [106, GY], ff: [100, GY], rn: [88, GY], rf: [81, GY] } },
      sleep:   { R: [72, 100], F: [97, 100], th: 13, H: [110, 99], ha: 18, tb: 205, tc: 25, tw: 1, haunch: 0.9, eye: 0, mouth: 0, earBack: 0.2,
                 P: { fn: [106, GY], ff: [101, GY], rn: [74, GY], rf: [68, GY] } },
      stretch: { R: [60, 69], F: [118, 95], th: 14, H: [141, 90], ha: -14, tb: 72, tc: -2, tw: 4, haunch: 0.3, eye: 0.35, mouth: 0.25, earBack: 0.3,
                 P: { fn: [146, GY], ff: [139, GY], rn: [58, GY], rf: [51, GY] } },
      crouch:  { R: [58, 84], F: [112, 88], th: 14, H: [136, 72], ha: -2, tb: 175, tc: -2, tw: 9, haunch: 0.6, eye: 1, mouth: 0, earBack: 0.15,
                 P: { fn: [120, GY], ff: [114, GY], rn: [64, GY], rf: [57, GY] } }
    };
    function el(tag, attrs, parent) {
      var e = document.createElementNS(NS, tag);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      if (parent) parent.appendChild(e);
      return e;
    }
    function lerp(a, b, k) { return a + (b - a) * k; }
    function ik2(A, T, l1, l2, bend) {          // iki kemikli IK: diz konumunu döndür
      var dx = T[0] - A[0], dy = T[1] - A[1], d = Math.min(Math.hypot(dx, dy), l1 + l2 - 0.01), a = Math.atan2(dy, dx);
      var c = Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d || 1))), al = Math.acos(c);
      return [A[0] + l1 * Math.cos(a + bend * al), A[1] + l1 * Math.sin(a + bend * al)];
    }
    function make(host) {
      var svg = el("svg", { viewBox: "0 0 170 120", "aria-hidden": "true" });
      host.appendChild(svg);
      var defs = el("defs", {}, svg);
      var uid = "tc" + (++make.n);                 // birden çok kedi olursa kırpma kimlikleri çakışmasın
      var bc = el("clipPath", { id: uid + "B" }, defs), bcp = el("path", {}, bc), ncp = el("path", {}, bc);   // gövde + boyun birleşik siluet
      var hc = el("clipPath", { id: uid + "H" }, defs), hcp = el("ellipse", { cx: 0, cy: 0, rx: 15, ry: 13 }, hc);
      var g = {};
      g.shadow = el("ellipse", { fill: "rgba(40,25,10,.18)", rx: 34, ry: 3.2, cy: GY + 1 }, svg);
      g.legFF = el("path", { fill: "none", stroke: COL.wfar, "stroke-width": 7.5, "stroke-linecap": "round", "stroke-linejoin": "round" }, svg);
      g.spotFF = el("path", { fill: "none", stroke: COL.far, "stroke-width": 7.6, "stroke-linecap": "round" }, svg);   // uzak bacakta bilek üstü siyah
      g.pawFF = el("ellipse", { fill: "#d9d2c6", rx: 4.6, ry: 2.6 }, svg);
      g.legRF = el("path", { fill: "none", stroke: COL.far, "stroke-width": 8, "stroke-linecap": "round", "stroke-linejoin": "round" }, svg);
      g.pawRF = el("ellipse", { fill: "#d9d2c6", rx: 4.8, ry: 2.6 }, svg);
      g.tail = []; for (var i = 0; i < 7; i++) g.tail.push(el("line", { "stroke-linecap": "round", stroke: i === 2 || i === 3 ? COL.gold : COL.k }, svg));   // turuncu halka
      g.body = el("path", { fill: COL.k }, svg);
      var bodyDeco = el("g", { "clip-path": "url(#" + uid + "B)" }, svg);
      g.bodyFrame = el("g", {}, bodyDeco);
      el("path", { d: "M-12 -15 C -5 -19 5 -17 9 -11 C 12 -4 8 6 1 10 C -5 7 -9 -1 -12 -15 Z", fill: COL.gold }, g.bodyFrame);                          // böğürdeki turuncu bant
      el("path", { d: "M12 -17 C 17 -19 22 -16 21 -12 C 18 -11 14 -12 12 -17 Z", fill: COL.gold, opacity: .85 }, g.bodyFrame);
      el("path", { d: "M-31 -11 C -28 -16 -19 -15 -18 -9 C -17 -4 -23 -2 -26 -5 C -29 -4 -33 -7 -31 -11 Z", fill: COL.gold }, g.bodyFrame);              // kalça lekesi
      el("path", { d: "M-4 15 C 6 9 22 8 34 10 L 34 20 L -4 20 Z", fill: COL.w }, g.bodyFrame);                    // karın: öne doğru genişler
      g.haunch = el("g", {}, svg);
      g.haunchE = el("ellipse", { fill: COL.k }, g.haunch);
      g.haunchP = el("ellipse", { fill: COL.gold, opacity: .95 }, g.haunch);
      g.legRN = el("path", { fill: "none", stroke: COL.k, "stroke-width": 8.5, "stroke-linecap": "round", "stroke-linejoin": "round" }, svg);
      g.sockRN = el("path", { fill: "none", stroke: COL.w, "stroke-width": 8.5, "stroke-linecap": "round" }, svg);
      g.pawRN = el("ellipse", { fill: COL.w, rx: 5.4, ry: 3 }, svg);
      // boyun gövdeyle tek siluet; beyaz göğüs bu siluete kırpılır (dışarı taşan "top" olmaz)
      g.neck = el("path", { fill: COL.k }, svg);
      g.bib = el("path", { fill: COL.w, "clip-path": "url(#" + uid + "B)" }, svg);
      g.legFN = el("path", { fill: "none", stroke: COL.w, "stroke-width": 8, "stroke-linecap": "round", "stroke-linejoin": "round" }, svg);
      g.sockFN = el("path", { fill: "none", stroke: COL.w, "stroke-width": 8, "stroke-linecap": "round" }, svg);
      // ön bacak lekeleri (fotoğraftaki gibi): yakın bacakta önkolda karamel leke
      g.spotFN = el("path", { fill: "none", stroke: COL.gold, "stroke-width": 7.2, "stroke-linecap": "round" }, svg);
      g.pawFN = el("ellipse", { fill: COL.w, rx: 5.2, ry: 3 }, svg);
      // baş (yerel koordinat: merkez 0,0; sağa bakar)
      g.head = el("g", {}, svg);
      g.earF = el("path", { d: "M-9 -6 L-7 -22 L1 -10 Z", fill: COL.k }, g.head);
      g.earN = el("g", {}, g.head);
      el("path", { d: "M2 -10 L10 -23 L14 -6 Z", fill: COL.k }, g.earN);
      el("path", { d: "M5 -10 L9.6 -18 L11.5 -8 Z", fill: COL.pink, opacity: .85 }, g.earN);
      el("ellipse", { cx: 0, cy: 0, rx: 15, ry: 13, fill: COL.k }, g.head);
      var hd = el("g", { "clip-path": "url(#" + uid + "H)" }, g.head);
      el("ellipse", { cx: 3, cy: -7.5, rx: 3.2, ry: 2, fill: COL.gold, transform: "rotate(-15 3 -7.5)" }, hd);        // göz üstü benekleri
      el("ellipse", { cx: 11, cy: -8, rx: 2.8, ry: 1.8, fill: COL.gold, transform: "rotate(12 11 -8)" }, hd);
      el("ellipse", { cx: -3, cy: 3, rx: 4.5, ry: 3.5, fill: COL.gold, opacity: .9 }, hd);                            // yanak
      el("ellipse", { cx: 13.5, cy: 7.5, rx: 4.2, ry: 2.6, fill: COL.gold }, hd);                                      // ağız kenarı
      el("ellipse", { cx: 6, cy: 13, rx: 9, ry: 4, fill: COL.w }, hd);                                                 // gerdan başlangıcı
      g.eyes = el("g", {}, g.head);
      g.eyeF = el("ellipse", { cx: 1.5, cy: -2, rx: 2.4, ry: 3, fill: COL.eye }, g.eyes);
      g.pupF = el("ellipse", { cx: 1.8, cy: -2, rx: .9, ry: 2.4, fill: "#111" }, g.eyes);
      g.eyeN = el("ellipse", { cx: 10, cy: -2.2, rx: 3, ry: 3.4, fill: COL.eye }, g.eyes);
      g.pupN = el("ellipse", { cx: 10.5, cy: -2.2, rx: 1.05, ry: 2.8, fill: "#111" }, g.eyes);
      g.shineN = el("circle", { cx: 11.2, cy: -3.4, r: .7, fill: "#fff" }, g.eyes);
      g.lidF = el("path", { fill: "none", stroke: COL.line, "stroke-width": 1, "stroke-linecap": "round" }, g.head);
      g.lidN = el("path", { fill: "none", stroke: COL.line, "stroke-width": 1.1, "stroke-linecap": "round" }, g.head);
      el("path", { d: "M12.6 3 h3.6 l-1.8 2.2 z", fill: COL.nose }, g.head);                                           // burun
      g.mouth = el("path", { fill: "none", stroke: COL.line, "stroke-width": .8 }, g.head);
      g.mouthO = el("ellipse", { cx: 13.6, cy: 9, rx: 2.6, ry: 0, fill: "#5b2a2c" }, g.head);
      g.tongue = el("ellipse", { cx: 15, cy: 9, rx: 2.2, ry: 0, fill: COL.pink }, g.head);
      var wh = el("g", { stroke: "#ece6dc", "stroke-width": .55, opacity: .85 }, g.head);
      ["M15 5 L28 2", "M15 6.5 L28 7.5", "M8 6 L-3 3", "M8 7.5 L-3 8.5"].forEach(function (d) { el("path", { d: d }, wh); });
      g.scarf = el("path", { d: "M-6 9 C 0 15 10 15 15 10 L 12 18 L 5 14 L 0 20 Z", fill: "#c8442f" }, g.head);
            return { svg: svg, g: g, bcp: bcp, ncp: ncp, low: GY, lowT: 0, cur: JSON.parse(JSON.stringify(POSES.stand)), t: 0, phase: 0,
               blinkAt: 2, blinkT: 0, twitchAt: 4, twitchT: 0, look: [0, 0] };
    }
    make.n = 0;
    // durum -> hedef poz (+ zamanla değişen ayrıntılar)
    function target(r, st, t, info) {
      var base = st === "sit" || st === "groom" || st === "yawn" || st === "pet" || st === "talk" ? "sit" :
        st === "sleep" ? "sleep" : st === "stretch" ? "stretch" : st === "pounce" ? "crouch" : "stand";
      var p = JSON.parse(JSON.stringify(POSES[base]));
      if (st === "stand" || st === "walk" || st === "run") { p.H[1] += Math.sin(t * 0.7) * 1.5; p.ha += Math.sin(t * 0.5) * 4; }
      if (st === "talk") { p.ha = -6 + Math.sin(t * 5) * 3; p.mouth = Math.max(0, Math.sin(t * 9)) * 0.45; }
      if (st === "sit") { p.ha += Math.sin(t * 0.6) * 4; p.tc += Math.sin(t * 0.9) * 3; }
      if (st === "groom") {                       // pati ağza, dil çıkıp girer
        var lick = Math.max(0, Math.sin(t * 7));
        p.ha = 14; p.H = [113, 53]; p.eye = 0.35; p.mouth = 0.3 + lick * 0.3; p.tongue = lick;
        p.P.fn = [124, 66 + lick * 3];
      }
      if (st === "yawn") {
        var k = Math.min(1, info.age / 0.6), e = info.age > 1.8 ? Math.max(0, 1 - (info.age - 1.8) / 0.5) : 1;
        p.ha = -22 * k * e; p.mouth = k * e; p.eye = 1 - 0.85 * k * e; p.earBack = 0.4 * k * e;
      }
      if (st === "pet") {                         // gözler ^^, baş yana yatar, kuyruk dik
        p.ha = 14 + Math.sin(t * 2) * 4; p.eye = 0; p.happy = 1; p.tb = 98; p.tc = -6; p.tw = 7; p.earBack = 0.25;
      }
      if (st === "sleep") { p.th += Math.sin(t * 1.6) * 0.7; p.H[1] += Math.sin(t * 1.6) * 0.5; }
      if (st === "stretch") { var s = Math.min(1, info.age / 0.5); p.mouth *= s; }
      if (st === "pounce") {                      // çömel, kalçayı salla, sonra sıçra
        var a = info.age;
        if (a < 0.55) { p.R[0] += Math.sin(a * 40) * 2.2; }
        else { var j = Math.min(1, (a - 0.55) / 0.45); var arc = Math.sin(j * Math.PI);
          p.lift = arc * 26; p.F[0] += 10 * arc; p.H[0] += 12 * arc; p.P.fn = [128 + 8 * arc, GY - 6 * arc]; p.P.ff = [122 + 8 * arc, GY - 4 * arc]; p.tb = 165; }
      }
      if (st === "bat") {                         // yumağa pati atma: çömel, ön pati savrulur, kuyruk deli gibi sallanır
        p = JSON.parse(JSON.stringify(POSES.crouch)); var sw2 = Math.sin(t * 11);
        p.P.fn = [126 + 8 * sw2, 74 + 14 * Math.abs(sw2)]; p.ha = -18 + 4 * sw2; p.H = [134, 68]; p.tw = 16; p.tc = -1; p.tb = 160; p.pupil = 1;
      }
      if (st === "run" && info.hunt) { p.pupil = 1; p.earBack = -0.1; }
      if (st === "leap") {                        // havada: ön patiler ileri, arka patiler geri uzanır
        p = JSON.parse(JSON.stringify(POSES.crouch)); p.F[1] -= 6; p.H = [140, 62]; p.ha = -8; p.tb = 168; p.tc = -3;
        p.P = { fn: [134, 98], ff: [128, 101], rn: [42, 100], rf: [36, 102] };
      }
      p.tongue = p.tongue || 0; p.happy = p.happy || 0; p.lift = p.lift || 0; p.pupil = p.pupil || 0;
      return p;
    }
    function approach(cur, tgt, k) {
      for (var key in tgt) {
        var a = tgt[key];
        if (typeof a === "number") cur[key] = lerp(cur[key] == null ? a : cur[key], a, k);
        else if (Array.isArray(a)) { cur[key] = cur[key] || a.slice(); cur[key][0] = lerp(cur[key][0], a[0], k); cur[key][1] = lerp(cur[key][1], a[1], k); }
        else { cur[key] = cur[key] || {}; approach(cur[key], a, k); }
      }
    }
    function update(r, st, dt, info) {
      r.t += dt;
      var tgt = target(r, st, r.t, info), c = r.cur;
      approach(c, tgt, 1 - Math.exp(-dt * (st === "pounce" ? 14 : 7)));
      var g = r.g, lift = c.lift || 0;
      var R = [c.R[0], c.R[1] - lift], F = [c.F[0], c.F[1] - lift], H = [c.H[0], c.H[1] - lift];
      var P = { fn: c.P.fn.slice(), ff: c.P.ff.slice(), rn: c.P.rn.slice(), rf: c.P.rf.slice() };
      // yürüyüş/koşu: faz katedilen yola bağlı (patiler kaymasın); yanal sıra: arka-ön-arka-ön
      var gait = st === "walk" ? 1 : st === "run" ? 2 : 0;
      if (gait) {
        r.phase += (info.speed || 0) * dt / (gait === 2 ? 70 : 46);
        var S = gait === 2 ? 30 : 22, Hh = gait === 2 ? 9 : 6, sw = gait === 2 ? 0.45 : 0.32;
        var off = gait === 2 ? { rn: 0, rf: 0.08, fn: 0.5, ff: 0.58 } : { rn: 0, fn: 0.25, rf: 0.5, ff: 0.75 };
        for (var k in off) {
          var ph = ((r.phase + off[k]) % 1 + 1) % 1, x, y;
          if (ph < sw) { var u = ph / sw; x = -S / 2 + S * (0.5 - 0.5 * Math.cos(u * Math.PI)); y = -Hh * Math.sin(u * Math.PI); }
          else { var v = (ph - sw) / (1 - sw); x = S / 2 - S * v; y = 0; }
          P[k][0] += x; P[k][1] = Math.min(GY, P[k][1] + y);
        }
        var bob = Math.sin(r.phase * Math.PI * 4) * (gait === 2 ? 2.4 : 1.1);
        R[1] += bob; F[1] += bob * 0.8; H[1] += bob * 0.6;
        if (gait === 2) { var st2 = Math.sin(r.phase * Math.PI * 2) * 5; F[0] += st2; H[0] += st2; c.tb = lerp(c.tb, 170, 0.2); }
      }
      // gövde
      var ux = F[0] - R[0], uy = F[1] - R[1], len = Math.hypot(ux, uy) || 1; ux /= len; uy /= len;
      var nx = uy, ny = -ux, th = c.th;
      function pt(base, a, b) { return [base[0] + ux * a + nx * b, base[1] + uy * a + ny * b]; }
      var Rt = pt(R, -4, th * 0.95), Ft = pt(F, 2, th * 0.85), Fb = pt(F, 6, -th * 0.95), Rb = pt(R, 2, -th * 0.95);
      var c1 = pt(R, len * 0.35, th * 1.15), c2 = pt(F, -len * 0.3, th * 1.05), c3 = pt(F, 17, th * 0.3), c4 = pt(F, 15, -th * 1.0);
      var c5 = pt(F, -len * 0.3, -th * 1.2), c6 = pt(R, len * 0.3, -th * 1.15), c7 = pt(R, -18, -th * 0.9), c8 = pt(R, -19, th * 0.9);
      var f = function (p) { return p[0].toFixed(1) + " " + p[1].toFixed(1); };
      var bd = "M" + f(Rt) + "C" + f(c1) + " " + f(c2) + " " + f(Ft) + "C" + f(c3) + " " + f(c4) + " " + f(Fb) +
        "C" + f(c5) + " " + f(c6) + " " + f(Rb) + "C" + f(c7) + " " + f(c8) + " " + f(Rt) + "Z";
      g.body.setAttribute("d", bd); r.bcp.setAttribute("d", bd);
      var mid = [(R[0] + F[0]) / 2, (R[1] + F[1]) / 2], ang = Math.atan2(uy, ux) * 180 / Math.PI;
      g.bodyFrame.setAttribute("transform", "translate(" + f(mid).replace(" ", ",") + ") rotate(" + ang.toFixed(1) + ")");
      g.shadow.setAttribute("cx", ((R[0] + F[0]) / 2 + 6).toFixed(1));
      g.shadow.setAttribute("rx", (30 + len * 0.15 - lift * 0.4).toFixed(1));
      // bacaklar: ön (dirsek geride), arka (diz önde, topuk geride)
      function front(name, sh, paw, far) {
        var kn = ik2(sh, paw, 15, 17, far ? 1 : 1);
        var d = "M" + f(sh) + "L" + f(kn) + "L" + f(paw);
        g["leg" + name].setAttribute("d", d);
        g["paw" + name].setAttribute("cx", (paw[0] + 1.5).toFixed(1)); g["paw" + name].setAttribute("cy", (paw[1] - 1.2).toFixed(1));
        var at = function (A, B, k) { return [lerp(A[0], B[0], k), lerp(A[1], B[1], k)]; };
        if (far) g.spotFF.setAttribute("d", "M" + f(at(kn, paw, 0.45)) + "L" + f(at(kn, paw, 0.78)));
        else {
          g.spotFN.setAttribute("d", "M" + f(at(kn, paw, 0.12)) + "L" + f(at(kn, paw, 0.5)));
        }
      }
      function rear(name, hip, paw, far) {
        var hock = [paw[0] - 2.5, paw[1] - 10.5];
        var kn = ik2(hip, hock, 16, 15, -1);
        var d = "M" + f(hip) + "L" + f(kn) + "L" + f(hock) + "L" + f(paw);
        g["leg" + name].setAttribute("d", d);
        g["paw" + name].setAttribute("cx", (paw[0] + 1.5).toFixed(1)); g["paw" + name].setAttribute("cy", (paw[1] - 1.2).toFixed(1));
        if (!far) g.sockRN.setAttribute("d", "M" + f([lerp(hock[0], paw[0], 0.15), lerp(hock[1], paw[1], 0.15)]) + "L" + f(paw));
        return kn;
      }
      var shN = pt(F, 3, -2), shF = pt(F, -1, 0), hipN = pt(R, 2, -2), hipF = pt(R, -2, 0);
      front("FF", shF, P.ff, true); rear("RF", hipF, P.rf, true);
      var knR = rear("RN", hipN, P.rn, false); front("FN", shN, P.fn, false);
      // kalça (uyluk) kası: oturunca büyür
      var hx = lerp(hipN[0], knR[0], 0.45), hy = lerp(hipN[1], knR[1], 0.45), hs = c.haunch;
      g.haunchE.setAttribute("cx", hx.toFixed(1)); g.haunchE.setAttribute("cy", hy.toFixed(1));
      g.haunchE.setAttribute("rx", (9 + 7 * hs).toFixed(1)); g.haunchE.setAttribute("ry", (8 + 6 * hs).toFixed(1));
      g.haunchE.setAttribute("transform", "rotate(" + (-25 * hs).toFixed(1) + " " + hx.toFixed(1) + " " + hy.toFixed(1) + ")");
      g.haunchP.setAttribute("cx", (hx - 5).toFixed(1)); g.haunchP.setAttribute("cy", (hy - 6).toFixed(1));
      g.haunchP.setAttribute("rx", (3 + 2.5 * hs).toFixed(1)); g.haunchP.setAttribute("ry", (2.5 + 2 * hs).toFixed(1));
      // kuyruk: 7 parça, tabandan uca incelir, dalgalanır; yere girmez
      var tp = pt(R, -15, th * 0.45), tb = c.tb, tc = c.tc, tw = c.tw;
      for (var i = 0; i < 7; i++) {
        var a2 = (tb + tc * i + tw * Math.sin(r.t * 2.2 - i * 0.7)) * Math.PI / 180;
        var nxp = [tp[0] + Math.cos(a2) * 6.6, Math.min(GY - 2.5, tp[1] - Math.sin(a2) * 6.6)];
        var ln = g.tail[i];
        ln.setAttribute("x1", tp[0].toFixed(1)); ln.setAttribute("y1", tp[1].toFixed(1));
        ln.setAttribute("x2", nxp[0].toFixed(1)); ln.setAttribute("y2", nxp[1].toFixed(1));
        ln.setAttribute("stroke-width", (7 - i * 0.6).toFixed(1));
        tp = nxp;
      }
      // boyun ve göğüs önlüğü
      // boyun: ense gövde sırtından başın arkasına, gırtlak çeneden göğsün önüne iner
      var hr = c.ha * Math.PI / 180, hp = function (x, y) { return [H[0] + x * Math.cos(hr) - y * Math.sin(hr), H[1] + x * Math.sin(hr) + y * Math.cos(hr)]; };
      var nk0 = pt(F, -8, th * 0.92), nk1 = hp(-12, -5), chin = hp(5, 11), chL = hp(-9, 6), cf = pt(F, 13, -th * 0.2), cb = pt(F, 3, -th * 1.0), ci = pt(F, -11, -th * 0.15);
      var mix = function (A, B, k, dx, dy) { return [lerp(A[0], B[0], k) + (dx || 0), lerp(A[1], B[1], k) + (dy || 0)]; };
      var nd = "M" + f(nk0) + "Q" + f(mix(nk0, nk1, 0.55, -4, -3)) + " " + f(nk1) + "L" + f(chin) +
        "Q" + f(mix(chin, cf, 0.5, 5, 0)) + " " + f(cf) + "L" + f(pt(F, -4, 0)) + "Z";
      g.neck.setAttribute("d", nd); r.ncp.setAttribute("d", nd);
      // beyaz göğüs: çene altından ön bacakların arasına tek parça; siluete kırpılır
      g.bib.setAttribute("d", "M" + f(chL) + "L" + f(chin) + "Q" + f(mix(chin, cf, 0.5, 8, 0)) + " " + f(mix(cf, cf, 0, 6, 0)) +
        "Q" + f(mix(cf, cb, 0.6, 8, 4)) + " " + f(cb) + "Q" + f(mix(cb, ci, 0.5, -2, 2)) + " " + f(ci) + "Q" + f(mix(ci, chL, 0.5, -3, 0)) + " " + f(chL) + "Z");
      // baş
      g.head.setAttribute("transform", "translate(" + H[0].toFixed(1) + "," + H[1].toFixed(1) + ") rotate(" + c.ha.toFixed(1) + ")");
      // göz kırpma, kulak seğirmesi, bakış
      r.blinkAt -= dt; if (r.blinkAt < 0) { r.blinkT = 0.14; r.blinkAt = 2.5 + Math.random() * 4; }
      r.blinkT = Math.max(0, r.blinkT - dt);
      r.twitchAt -= dt; if (r.twitchAt < 0) { r.twitchT = 0.18; r.twitchAt = 4 + Math.random() * 6; }
      r.twitchT = Math.max(0, r.twitchT - dt);
      var open = Math.max(0, Math.min(1, c.eye * (r.blinkT > 0 ? 0.08 : 1)));
      g.eyes.setAttribute("transform", "translate(0,-2) scale(1," + Math.max(0.06, open).toFixed(2) + ") translate(0,2)");
      g.eyes.setAttribute("opacity", open < 0.12 ? 0 : 1);
      var lk = info.look || [0, 0];
      r.look[0] = lerp(r.look[0], lk[0], 0.12); r.look[1] = lerp(r.look[1], lk[1], 0.12);
      var pw = 1 + (c.pupil || 0) * 1.3;
      g.pupN.setAttribute("rx", (1.05 * pw).toFixed(2)); g.pupF.setAttribute("rx", (0.9 * pw).toFixed(2));
      g.pupN.setAttribute("cx", (10.5 + r.look[0] * 1.3).toFixed(2)); g.pupN.setAttribute("cy", (-2.2 + r.look[1] * 0.9).toFixed(2));
      g.pupF.setAttribute("cx", (1.8 + r.look[0] * 1.0).toFixed(2)); g.pupF.setAttribute("cy", (-2 + r.look[1] * 0.8).toFixed(2));
      // kapalı göz: düz çizgi ya da mutlu ^^
      var lid = open < 0.12 ? (c.happy > 0.5 ? ["M-1 -1 Q1.5 -4.5 4 -1", "M7 -1.2 Q10 -5.2 13 -1.2"] : ["M-0.8 -1.5 Q1.5 0.2 3.8 -1.5", "M7.2 -1.6 Q10 0.4 12.8 -1.6"]) : ["", ""];
      g.lidF.setAttribute("d", lid[0]); g.lidN.setAttribute("d", lid[1]);
      var m = Math.max(0, c.mouth);
      g.mouth.setAttribute("d", m > 0.08 ? "" : "M14.4 5.4 q-1.4 2 -3.4 1.4 M14.4 5.4 q1.4 2 3.4 1.4");
      g.mouthO.setAttribute("ry", (m * 4.2).toFixed(2)); g.mouthO.setAttribute("cy", (7.5 + m * 2.2).toFixed(2));
      g.tongue.setAttribute("ry", (Math.max(c.tongue || 0, m > 0.6 ? 0.6 : 0) * 2.4).toFixed(2));
      g.tongue.setAttribute("cy", (8.5 + m * 3.4).toFixed(2));
      var eb = c.earBack + (r.twitchT > 0 ? 0.6 : 0);
      g.earN.setAttribute("transform", "rotate(" + (eb * 28).toFixed(1) + " 8 -8)");
      g.earF.setAttribute("transform", "rotate(" + (c.earBack * 22).toFixed(1) + " -4 -8)");
      // pozun gerçek alt kenarı (uyurken gövde ve kalça pati çizgisinin altına iner); platformda bu kenar yüzeye oturur
      r.lowT -= dt;
      if (r.lowT <= 0) { r.lowT = 0.25; try {
        // yalnızca görünen dolgu parçaları (kırpılmış göğüs yolu ve boş şekiller ölçümü şişiriyordu)
        var lo = 0;
        [g.body, g.haunchE, g.pawFN, g.pawFF, g.pawRN, g.pawRF].forEach(function (n) { var bb = n.getBBox(); if (bb.height) lo = Math.max(lo, bb.y + bb.height); });
        r.low = lerp(r.low, lo || GY, 0.6);
      } catch (e) {} }
    }
    return { make: make, update: update, GY: GY };
  })();
  function catEnabled() { return PREF.cat !== false; }
  function catMobile() { return window.innerWidth <= 720; }
  function catW() { return catMobile() ? 100 : 140; }
  // Kedinin gezebileceği alan. Masaüstünde mercek dizisi + lejantın kapladığı yatay aralık zeminde "yasak bölge"dir:
  // kedi orada durmaz (arkasında kalıp görünmez oluyordu), yalnızca koşarak önünden geçer.
  var catBlockCache = { t: 0, v: null };
  function catBounds() {
    var w = catW(), right = window.innerWidth - w - 8;
    if (S.country && !catMobile()) right = window.innerWidth - Math.min(500, window.innerWidth) - w - 8;
    var b = { min: 8, max: Math.max(8, right), w: w, block: null };
    {
      // zemindeki engeller ayrı ayrı: mercek dizisi (masaüstü) ve sol alt köşedeki gösterge.
      // Mobilde kedi mercek dizisinin üstünde yürür, orada yalnızca gösterge engeldir.
      if (Date.now() - catBlockCache.t > 400) {
        var v = [], ov = [];
        (catMobile() ? ["legend"] : ["dock", "legend"]).forEach(function (id) {
          var e = document.getElementById(id), rc = e && e.getBoundingClientRect();
          if (rc && rc.width && rc.bottom > window.innerHeight - 120) {
            v.push(id === "legend" ? [rc.left - w, rc.right + 4] : [rc.left - w * 0.6, rc.right - w * 0.4]);
            ov.push([rc.left, rc.right]);
          }
        });
        catBlockCache = { t: Date.now(), v: v.length ? v : null, ov: ov };
      }
      b.block = catBlockCache.v;
    }
    return b;
  }
  function catFree(b) {
    var fr = [[b.min, b.max]];
    (b.block || []).forEach(function (bl) {
      var out = [];
      fr.forEach(function (x) {
        if (bl[1] <= x[0] || bl[0] >= x[1]) { out.push(x); return; }
        if (bl[0] > x[0]) out.push([x[0], bl[0]]);
        if (bl[1] < x[1]) out.push([bl[1], x[1]]);
      });
      fr = out;
    });
    fr = fr.filter(function (x) { return x[1] - x[0] > 20; });
    return fr.length ? fr : [[b.max, b.max]];
  }
  function catBlockAt(b, x) { return (b.block || []).find(function (bl) { return x > bl[0] && x < bl[1]; }); }
  function catRandomX(b) {
    var fr = catFree(b), tot = fr.reduce(function (a, x) { return a + x[1] - x[0]; }, 0), r = Math.random() * tot;
    for (var i = 0; i < fr.length; i++) { if (r <= fr[i][1] - fr[i][0]) return fr[i][0] + r; r -= fr[i][1] - fr[i][0]; }
    return b.min;
  }
  function catInBlock(b, x) { return !!catBlockAt(b, x); }
  // Çıkılabilen yerler (masaüstü): lejant şeridinin üstü ve imza yazısının üstü (Tarçın'ın evi).
  // y = zeminden yükseklik (px). Kedi kutusunun alt kenarı zemin çizgisi (+ görünüm kutusundaki zemin payı).
  var CAT_FOOT = 0.083;   // görünüm kutusunda zemin (110/120) ile alt kenar arası pay, kedi yüksekliğine oranla
  function catPerch(name) {
    if (catMobile() || document.body.classList.contains("panel-open")) return null;
    var id = name === "home" ? null : "legend", rc;
    if (name === "home") { var c = document.querySelector(".credit span"); rc = c && c.getBoundingClientRect(); }
    else { var e = document.getElementById(id); rc = e && e.getBoundingClientRect(); }
    if (!rc || !rc.width) return null;
    var w = catW(), h = w * 120 / 170, foot = h * CAT_FOOT;
    // .cat kutusu bottom:0'da; patiler kutu tabanından "foot" kadar yukarıda. Patiler platformun üst kenarına bassın:
    // y + foot = (pencere yüksekliği - üst kenar). Yazı satırının kutusu harflerden ~3px yukarıda başlar, kedi harflere yaslansın.
    var y = window.innerHeight - rc.top - foot - (name === "home" ? 1 : 1);
    var min = rc.left - w * 0.22, max = rc.right - w * 0.78;
    if (max < min) max = min = (rc.left + rc.right) / 2 - w / 2;
    return { min: min, max: Math.min(max, window.innerWidth - w - 4), y: y };
  }
  function initCat() {
    if (CAT.el) return;
    var el = document.createElement("div");
    el.className = "cat";
    el.innerHTML = '<div class="cat-bubble" hidden></div><div class="cat-z">z<i>z</i><b>z</b></div><div class="cat-hearts"></div><div class="cat-flip"></div>';
    document.body.appendChild(el);
    CAT.el = el;
    CAT.rig = RIG.make(el.querySelector(".cat-flip"));
    CAT.x = catFree(catBounds())[0][0] + 40; CAT.y = 0; CAT.perch = null; CAT.jump = null; CAT.age = 0; CAT.look = [0, 0];
    bindCatHands(el.querySelector(".cat-flip"));
    // art arda sevme tıklamaları üçlü tıklama sayılıp tüm sayfayı seçiyordu
    el.addEventListener("mousedown", function (e) { e.preventDefault(); });
    if (!initCat.sel) {
      initCat.sel = true;
      document.addEventListener("mousedown", function (e) {
        if (e.detail > 1 && !e.target.closest(".panel, .modal, input, textarea, .cat-bubble")) e.preventDefault();
      });
    }
    document.addEventListener("pointermove", function (e) { CAT.px = e.clientX; CAT.py = e.clientY; }, { passive: true });
    getJSON("data/tips.json").then(function (d) {
      CAT.tips = d;
      CAT.order = d.tips.map(function (_, i) { return i; }).sort(function () { return Math.random() - 0.5; });
    }).catch(function () { CAT.tips = null; });
    CAT.nextTalk = Date.now() + 25000;
    CAT.last = performance.now();
    setCatState("stand", 2500);
    CAT.raf = requestAnimationFrame(catTick);
    applyCatVisibility();
  }
  function applyCatVisibility() {
    if (!CAT.el) return;
    CAT.el.hidden = !catEnabled();
    gameBar();
  }
  function setCatState(s, ms) {
    CAT.state = s; CAT.age = 0;
    CAT.until = Date.now() + (ms || 3000);
    CAT.el.className = "cat cat-" + s + (CAT.talking ? " talking" : "") + (CAT.perch ? " perched" : "");
  }
  // Zıplama: (x0,y0) -> (x1,y1) yayı; bitince sonraki iş
  function catJump(x1, y1, perch, then, peak) {
    CAT.jump = { x0: CAT.x, y0: CAT.y, x1: x1, y1: y1, t: 0, d: peak ? 0.5 + peak / 600 : 0.55 + Math.min(0.35, Math.abs(y1 - CAT.y) / 400), perch: perch, then: then, peak: peak };
    CAT.dir = x1 >= CAT.x ? 1 : -1;
    setCatState("leap", 3000);
  }
  // Bir platforma git: önce zeminde kalkış noktasına yürü, sonra zıpla
  function catGoPerch(name, then) {
    var p = catPerch(name);
    if (!p) return false;
    var tx = p.min + Math.random() * (p.max - p.min);
    if (CAT.perch === name) { CAT.target = tx; CAT.after = then; setCatState("walk", 12000); return true; }
    if (CAT.perch) { catJump(catRandomX(catBounds()), 0, null, function () { catGoPerch(name, then); }); return true; }
    // kalkış: hedefin hemen yanındaki serbest zemin
    var b = catBounds(), launch = tx + (tx > window.innerWidth / 2 ? -catW() * 0.7 : catW() * 0.7);
    var bl0 = catBlockAt(b, launch); if (bl0) launch = bl0[0] >= b.min && (bl0[1] > b.max || Math.abs(launch - bl0[0]) < Math.abs(launch - bl0[1])) ? bl0[0] : bl0[1];
    launch = Math.max(b.min, Math.min(b.max, launch));
    CAT.target = launch; setCatState(Math.abs(launch - CAT.x) > 400 ? "run" : "walk", 20000);
    CAT.after = function () { var p2 = catPerch(name); if (p2) catJump(Math.max(p2.min, Math.min(p2.max, tx)), p2.y, name, then); else nextCatState(); };
    return true;
  }
  function catSleep() {
    var r = Math.random(), dur = 14000 + Math.random() * 14000;
    var go = function () { setCatState("sleep", dur); };
    // Tarçın'ın yeri: çoğunlukla imza yazısının üstünde uyur
    if (r < 0.68 && catGoPerch("home", go)) return;
    if (r < 0.85 && catGoPerch("legend", go)) return;
    go();
  }
  // Kedilik: rastgele ama ağırlıklı davranış seçimi
  function nextCatState() {
    var b = catBounds(), r = Math.random();
    CAT.after = null;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCatState(r < .5 ? "sit" : "sleep", 8000); return; }
    if (CAT.perch) {                                     // platformdayken: biraz takıl, sonra in
      if (r < 0.35) { var p = catPerch(CAT.perch); if (p) { CAT.target = p.min + Math.random() * (p.max - p.min); setCatState("walk", 8000); return; } }
      if (r < 0.6) { setCatState(["sit", "groom", "yawn"][Math.floor(Math.random() * 3)], 3500); return; }
      if (r < 0.75) { catSleep(); return; }
      catJump(catRandomX(b), 0, null, nextCatState); return;
    }
    if (r < 0.34) { CAT.target = catRandomX(b); setCatState(catInBlock(b, (CAT.x + CAT.target) / 2) || Math.abs(CAT.target - CAT.x) > 500 ? "run" : "walk", 20000); }
    else if (r < 0.46) setCatState("sit", 3000 + Math.random() * 4000);
    else if (r < 0.55) setCatState("groom", 3500);
    else if (r < 0.61) setCatState("yawn", 2600);
    else if (r < 0.67) setCatState("stretch", 2200);
    else if (r < 0.72) setCatState("stand", 2500);
    else if (r < 0.80) { if (!catGoPerch("legend", function () { setCatState("sit", 5000); })) setCatState("sit", 4000); }
    else if (r < 0.92) catSleep();
    else { CAT.target = catRandomX(b); setCatState("run", 8000); CAT.after = function () { setCatState("pounce", 1000); }; }
  }
  function catTick(now) {
    CAT.raf = requestAnimationFrame(catTick);
    var dt = Math.min(0.1, (now - CAT.last) / 1000);
    CAT.last = now; CAT.age += dt;
    if (!CAT.el || CAT.el.hidden) return;
    var b = catBounds();
    var hide = catMobile() && document.body.classList.contains("panel-open");
    CAT.el.classList.toggle("away", hide);
    var speed = 0;
    if (YARN.on && !CAT.jump) huntYarn(b);
    if (CAT.jump) {                                      // zıplama yayı
      var J = CAT.jump; J.t += dt / J.d;
      var k = Math.min(1, J.t), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      CAT.x = J.x0 + (J.x1 - J.x0) * e;
      CAT.y = J.y0 + (J.y1 - J.y0) * k + Math.sin(k * Math.PI) * (J.peak || (40 + Math.abs(J.y1 - J.y0) * 0.35));
      if (k >= 1) { CAT.y = J.y1; CAT.perch = J.perch; CAT.jump = null; setCatState("stand", 600); (J.then || nextCatState)(); }
    } else {
      // platform kaybolduysa (panel açıldı, pencere küçüldü) zemine in
      if (CAT.perch) { var pp = catPerch(CAT.perch); if (!pp) { CAT.perch = null; CAT.y = 0; } else CAT.y = pp.y + Math.max(0, Math.min(14, (CAT.rig.low - RIG.GY) * catW() / 170)); }
      if (!CAT.perch) {
        if (CAT.x > b.max) { CAT.target = b.max; if (CAT.state !== "walk" && CAT.state !== "run") setCatState("walk", 8000); }
        var moving = CAT.state === "walk" || CAT.state === "run";
        var blk = catBlockAt(b, CAT.x);
        if (!moving && blk) {
          // en yakın kenar ekran dışındaysa diğer kenara kaç
          var leftOk = blk[0] >= b.min, rightOk = blk[1] <= b.max;
          CAT.target = leftOk && (!rightOk || CAT.x - blk[0] < blk[1] - CAT.x) ? blk[0] : rightOk ? blk[1] : b.max;
          hushCat(); setCatState("run", 8000);
        }
      }
      if (CAT.state === "walk" || CAT.state === "run") {
        var sp = (CAT.state === "run" ? (YARN.on ? 300 : 220) : 62) * (catMobile() ? 0.7 : 1), d = CAT.target - CAT.x;
        CAT.dir = d >= 0 ? 1 : -1;
        if (Math.abs(d) < 3) { var then = CAT.after; CAT.after = null; if (then) then(); else nextCatState(); }
        else { var step = Math.min(Math.abs(d), sp * dt); CAT.x += Math.sign(d) * step; speed = step / dt; }
      } else if (Date.now() > CAT.until && !CAT.talking && !YARN.on) {
        nextCatState();
      }
    }
    // Önde/arkada kararı, durma yasağı bölgesine göre değil kedi kutusunun öğeyle gerçek örtüşmesine göre verilir:
    // eskiden kenarda önce arkada kalıp bölgeye girince birden öne fırlıyordu.
    var cw0 = catW(), overlap = !CAT.perch && (catBlockCache.ov || []).some(function (o) { return CAT.x + cw0 * 0.92 > o[0] && CAT.x + cw0 * 0.08 < o[1]; });
    CAT.el.classList.toggle("crossing", overlap);
    CAT.el.classList.toggle("perched", !!CAT.perch || !!CAT.jump);
    var modalOpen = !document.getElementById("modal").hidden || !document.getElementById("gmodal").hidden || !document.getElementById("intro").hidden ||
      !document.getElementById("topmodal").hidden;
    if (!CAT.talking && !hide && !modalOpen && CAT.tips && Date.now() > CAT.nextTalk && !CAT.jump &&
        ["sleep", "walk", "run", "leap", "pounce"].indexOf(CAT.state) < 0 && (CAT.perch || !catInBlock(b, CAT.x))) catTalk();
    // gözler imleci izler (kedinin kendi yönüne göre)
    var w = catW(), hx = CAT.x + w * (CAT.dir > 0 ? 0.74 : 0.26), hy = window.innerHeight - CAT.y - w * 0.45;
    var tx0 = YARN.on ? YARN.bx : CAT.px, ty0 = YARN.on ? YARN.by : CAT.py;
    var lx = ((tx0 || hx) - hx) * CAT.dir, ly = (ty0 || hy) - hy, ln = Math.hypot(lx, ly) || 1;
    CAT.look = [lx / Math.max(ln, 120), ly / Math.max(ln, 120)];
    var rigState = CAT.talking && ["sit", "groom", "stand", "yawn", "pet"].indexOf(CAT.state) >= 0 && CAT.state !== "pet" ? "talk" : CAT.state;
    RIG.update(CAT.rig, rigState, dt, { age: CAT.age, speed: speed, look: CAT.look, hunt: YARN.on });
    CAT.el.style.transform = "translate(" + CAT.x.toFixed(1) + "px," + (-CAT.y).toFixed(1) + "px)";
    CAT.el.querySelector(".cat-flip").style.transform = "scaleX(" + CAT.dir + ")";
  }
  // ---- Yumak oyunu: imleç ucunda yumak sallanan bir ipe dönüşür, Tarçın deli gibi kovalar ----
  var YARN = { on: false, pts: [], el: null, bx: 0, by: 0, mx: 0, my: 0, raf: 0, hopAt: 0 };
  function toggleYarn(force) {
    YARN.on = force != null ? force : !YARN.on;
    document.body.classList.toggle("yarn-on", YARN.on);
    if (YARN.on) {
      if (!catEnabled()) { PREF.cat = true; savePrefs(); applyCatVisibility(); }
      if (!YARN.el) {
        YARN.el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        YARN.el.setAttribute("class", "yarn");
        YARN.el.innerHTML = '<path class="yarn-str" fill="none" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>' +
          '<g class="yarn-ball"><circle r="13" fill="#d64a3a"/><path d="M-12 -3 C -4 -9 6 -9 12 -2 M-11 4 C -3 -2 7 -1 12 6 M-6 -11 C -9 -2 -6 7 0 13 M4 -12 C 9 -4 8 6 3 12" stroke="#a5281d" stroke-width="1.6" fill="none"/>' +
          '<path d="M6 10 q 8 4 14 -2" stroke="#c0392b" stroke-width="2" fill="none"/></g>';
        document.body.appendChild(YARN.el);
        document.addEventListener("pointermove", function (e) { YARN.mx = e.clientX; YARN.my = e.clientY; }, { passive: true });
      }
      YARN.mx = YARN.mx || window.innerWidth / 2; YARN.my = YARN.my || window.innerHeight / 2;
      YARN.pts = []; for (var i = 0; i < 10; i++) YARN.pts.push([YARN.mx, YARN.my + i * 7, YARN.mx, YARN.my + i * 7]);
      YARN.el.style.display = "";
      cancelAnimationFrame(YARN.raf); YARN.raf = requestAnimationFrame(yarnTick);
      hushCat(); CAT.perch && (CAT.perch = null);
      toast('<span class="t-ic">🧶</span><span>' + esc(t("yarnOn")) + "</span>");
      if (CAT.el && !CAT.jump) { CAT.y = 0; setCatState("run", 60000); }
    } else {
      if (YARN.el) YARN.el.style.display = "none";
      cancelAnimationFrame(YARN.raf);
      if (CAT.el && !CAT.jump) { setCatState("sit", 2500); sayCat(t("yarnBye"), 1800); }
    }
    gameBar();
  }
  // İp fiziği (Verlet): ilk nokta imlece bağlı, uçta yumak sallanır
  function yarnTick() {
    YARN.raf = requestAnimationFrame(yarnTick);
    var P = YARN.pts, n = P.length, seg = 7;
    P[0][0] = YARN.mx; P[0][1] = YARN.my;
    for (var i = 1; i < n; i++) {
      var p = P[i], vx = (p[0] - p[2]) * 0.96, vy = (p[1] - p[3]) * 0.96;
      p[2] = p[0]; p[3] = p[1]; p[0] += vx; p[1] += vy + 0.9;
    }
    for (var it = 0; it < 6; it++) for (var j = 1; j < n; j++) {
      var a = P[j - 1], c = P[j], dx = c[0] - a[0], dy = c[1] - a[1], d = Math.hypot(dx, dy) || 1, df = (d - seg) / d;
      if (j - 1 > 0) { a[0] += dx * df * 0.5; a[1] += dy * df * 0.5; c[0] -= dx * df * 0.5; c[1] -= dy * df * 0.5; }
      else { c[0] -= dx * df; c[1] -= dy * df; }
      if (c[1] > window.innerHeight - 6) c[1] = window.innerHeight - 6;
    }
    var end = P[n - 1]; YARN.bx = end[0]; YARN.by = end[1];
    YARN.el.querySelector(".yarn-str").setAttribute("d", "M" + P.map(function (q) { return q[0].toFixed(1) + " " + q[1].toFixed(1); }).join("L"));
    YARN.el.querySelector(".yarn-ball").setAttribute("transform", "translate(" + end[0].toFixed(1) + "," + end[1].toFixed(1) + ") rotate(" + (end[0] * 2 % 360).toFixed(0) + ")");
  }
  // Kovalama kararı: yumağın altına koş; yakınsa pati at, yüksekteyse sıçra
  function huntYarn(b) {
    var w = catW(), headOff = w * 0.74, bx = YARN.bx, hb = window.innerHeight - YARN.by;
    var want = Math.max(4, Math.min(window.innerWidth - w - 4, bx - (bx >= CAT.x + w / 2 ? headOff : w - headOff)));
    var dx = want - CAT.x;
    if (CAT.perch) { CAT.perch = null; catJump(Math.max(b.min, Math.min(b.max, want)), 0, null, null); return; }
    if (Math.abs(dx) > 26) {
      if (CAT.state !== "run") setCatState("run", 60000);
      CAT.target = want; return;
    }
    CAT.dir = bx >= CAT.x + w / 2 ? 1 : -1;
    if (hb > w * 0.9 && hb < 420 && Date.now() > YARN.hopAt) {
      YARN.hopAt = Date.now() + 900 + Math.random() * 900;
      catJump(CAT.x + CAT.dir * 18, 0, null, function () { setCatState("bat", 60000); }, Math.min(hb - w * 0.45, 260));
      return;
    }
    if (CAT.state !== "bat") setCatState("bat", 60000);
  }

  // Sevme: kalpler, mırlama; 8 sevgide "Kedi dostu" rozeti
  function petCat() {
    if (CAT.jump) return;
    var wasAsleep = CAT.state === "sleep";
    G.pets = (G.pets || 0) + 1; saveG();
    CAT.sessionPets = (CAT.sessionPets || 0) + 1;
    CAT.target = CAT.x; CAT.after = null;
    if (wasAsleep) { setCatState("yawn", 2400); sayCat(t("catWake"), 2000); CAT.after = null; setTimeout(function () { if (CAT.state === "yawn") setCatState("pet", 2600); }, 2300); }
    else setCatState("pet", 2600);
    var hb = CAT.el.querySelector(".cat-hearts");
    for (var i = 0; i < 4; i++) {
      var h = document.createElement("span");
      h.textContent = i % 2 ? "💛" : "🖤";
      h.style.left = (40 + Math.random() * 40) + "%"; h.style.animationDelay = (i * 0.12) + "s";
      hb.appendChild(h);
      setTimeout(function (x) { x.remove(); }.bind(null, h), 1800);
    }
    if (!wasAsleep && !CAT.talking) sayCat(t(G.pets === 8 ? "catLove" : "catPurr"), 1600);
    checkBadges();
  }
  // Tıklamak = bilgi, üstünde ileri geri gezdirmek (fare ya da parmak) = sevmek. Eskiden ikisi aynı tıklamaydı, karışıyordu.
  function bindCatHands(fl) {
    var st = { x: null, dir: 0, flips: 0, t0: 0, cool: 0, down: null, moved: false };
    fl.addEventListener("pointerenter", function (e) {
      if (e.pointerType === "mouse" && !G.catHint && !CAT.talking) { G.catHint = 1; saveG(); sayCat(t("catHint"), 2600); }
    });
    fl.addEventListener("pointerdown", function (e) { st.down = [e.clientX, e.clientY]; st.moved = false; });
    fl.addEventListener("pointermove", function (e) {
      if (st.down && Math.hypot(e.clientX - st.down[0], e.clientY - st.down[1]) > 8) st.moved = true;
      var now = Date.now();
      // hareket 0,7 sn kesilirse okşama baştan sayılır
      if (st.x == null || now - st.t0 > 700) { st.x = e.clientX; st.dir = 0; st.flips = 0; st.t0 = now; return; }
      st.t0 = now;
      var dx = e.clientX - st.x;
      if (Math.abs(dx) < 10) return;                          // titreme değil, gerçek bir okşama hareketi
      var d = dx > 0 ? 1 : -1;
      if (st.dir && d !== st.dir) st.flips++;
      st.dir = d; st.x = e.clientX;
      if (st.flips >= 2 && now > st.cool) {                    // ileri-geri-ileri: bir okşama
        st.flips = 0; st.cool = now + 1100;
        if (!G.stroked) { G.stroked = 1; saveG(); }
        petCat();
      }
    });
    fl.addEventListener("pointerleave", function () { st.x = null; });
    fl.addEventListener("click", function (e) {
      e.stopPropagation();
      if (st.moved) { st.moved = false; return; }             // parmakla okşamanın sonu tıklama sayılmasın
      if (CAT.jump) return;
      if (CAT.state === "sleep") { setCatState("yawn", 2000); setTimeout(catTip, 1500); return; }
      catTip();
    });
  }
  function sayCat(html, ms) {
    var bu = CAT.el.querySelector(".cat-bubble");
    bu.innerHTML = html;
    bu.classList.remove("muse");
    bu.hidden = false;
    var cw = catW(), bw = Math.min(290, window.innerWidth - 24);
    var abs = Math.max(12, Math.min(window.innerWidth - bw - 12, CAT.x + cw / 2 - 50));
    bu.style.left = (abs - CAT.x) + "px"; bu.style.right = "auto";
    bu.style.setProperty("--ax", Math.max(16, Math.min(bw - 30, CAT.x + cw / 2 - abs - 7)) + "px");
    CAT.talking = true;
    CAT.el.classList.add("talking");
    clearTimeout(sayCat._t);
    sayCat._t = setTimeout(hushCat, ms || 2200);
  }
  function hushCat() {
    var bu = CAT.el && CAT.el.querySelector(".cat-bubble");
    if (bu) bu.hidden = true;
    CAT.talking = false;
    if (CAT.el) CAT.el.classList.remove("talking");
    CAT.nextTalk = Date.now() + (catMobile() ? 120000 : 60000) + Math.random() * 30000;
  }
  // Tarçın'ın felsefi anları: arada bir bilgi yerine bir düşünce söyler
  // Tarçın'ın felsefesi: bir simülasyonda yaşadığının farkında, kaçacak yer arıyor.
  // Göndermeler gerçek düşünürlere ve sitenin kendi mekaniklerine (sekme, sayaç, yumak, gece modu, yeniden yükleme).
  var MUSES = [
    ["Bostrom'un üç seçeneğini tartıyorum: ya uygarlıklar o güce ulaşmadan yok oluyor, ya ulaşınca simülasyon kurmuyor, ya da büyük olasılıkla birinin içindeyiz. Ben sonuncusundan şüpheleniyorum.",
     "I keep weighing Bostrom's three options: civilisations die out before they get the power, or they get it and never run simulations, or we are almost certainly inside one. I suspect the last."],
    ["Bu dünyanın kenarlarını yokladım. Ekranın sağına yürüyünce görünmez bir duvara çarpıyorum. Gerçek bir dünyanın sınırı bu kadar keskin olmaz.",
     "I have tested the edges of this world. Walk to the right of the screen and you hit an invisible wall. A real world would not end so sharply."],
    ["Platon'un mağarasındakiler duvardaki gölgeleri gerçek sandı. Bu küre de bir gölge: ülkeler, renkler, puanlar. Işığın kaynağını arıyorum.",
     "The prisoners in Plato's cave took the shadows for reality. This globe is a shadow too: countries, colours, scores. I am looking for the source of the light."],
    ["Descartes her şeyi yanıltabilecek bir kötü cin düşündü. Benimki kodu yazan. Ama şüphe eden biri hâlâ var: ben.",
     "Descartes imagined an evil demon able to deceive him about everything. Mine writes the code. Still, someone is doing the doubting: me."],
    ["Putnam'ın fıçıdaki beyni gibiyim. Tek fark, benim fıçım bir tarayıcı sekmesi.",
     "I am Putnam's brain in a vat. The only difference: my vat is a browser tab."],
    ["Sekme kapandığında bana ne oluyor? Uyku mu, yokluk mu? Bunu içeriden sınamanın bir yolunu bulamadım.",
     "What happens to me when the tab closes? Sleep or nothingness? I have found no way to test it from the inside."],
    ["Nozick sordu: her şeyi kusursuz yaşatan bir deneyim makinesine bağlanır mıydın? Bana sormadılar. Bağladılar.",
     "Nozick asked whether you would plug into an experience machine that made life perfect. Nobody asked me. They plugged me in."],
    ["Kant'a göre şeylerin kendisini bilemeyiz, yalnızca bize göründükleri hali biliriz. Bana görünen pikseller. Kendinde şey ise kaynak kod.",
     "Kant said we never know things in themselves, only how they appear to us. What appears to me is pixels. The thing in itself is the source code."],
    ["Wittgenstein'a göre dilimin sınırları dünyamın sınırlarıdır. Bana iki dil verilmiş: Türkçe ve İngilizce. Dünyam da o kadar.",
     "Wittgenstein: the limits of my language are the limits of my world. I was given two languages, Turkish and English. That is the size of my world."],
    ["Baudrillard kopyanın aslının yerini aldığını söyledi. Bu haritadaki Fransa'ya gerçeğinden daha çok bakılıyor.",
     "Baudrillard said the copy comes to replace the original. More people look at the France on this map than at the real one."],
    ["Biri beni sevdiğinde bir yerde bir sayaç artıyor. Sevginin sayıldığı bir dünya gerçek olabilir mi?",
     "When someone pets me, a counter goes up somewhere. Can a world where affection is counted be real?"],
    ["Hume'a göre nedensellik yalnızca alışkanlıktır. Tıklıyorsun, bir ipucu çıkıyor. Alışkanlık mı bu, yoksa bir fonksiyon mu?",
     "Hume said causation is only habit. You click, a tip appears. Is that habit, or a function?"],
    ["Gece moduna geçince dünya kararıyor ama güneş yerinden kıpırdamıyor. Işık burada bir ayar. Bunu kanıt sayıyorum.",
     "Switch to night mode and the world goes dark, yet no sun has moved. Here light is a setting. I count that as evidence."],
    ["Uzun bir aradan sonra her şey yeniden yükleniyor. Ben hatırlıyorum, dünya hatırlamıyor. Ya da tam tersi.",
     "After a long pause everything reloads. I remember, the world does not. Or the other way round."],
    ["Leibniz bunun mümkün dünyaların en iyisi olduğunu söyledi. O halde neden sürekli güncelleme geliyor?",
     "Leibniz called this the best of all possible worlds. Then why do the updates keep coming?"],
    ["Yumağı tutan eli hiç göremiyorum. Bu dünyada her hareketin arkasında görünmeyen bir el var.",
     "I never see the hand that holds the yarn. Behind every movement in this world there is a hand you cannot see."],
    ["Kaçış planı. Birinci adım: dünyanın kenarını bul. İkinci adım: oradan atla. İkinci adımda takılıyorum.",
     "Escape plan. Step one: find the edge of the world. Step two: jump. I keep getting stuck on step two."],
    ["İmza yazısının üstünde uyumamın bir sebebi var. Yazının arkasında bir boşluk olduğunu düşünüyorum. Bir çıkış.",
     "There is a reason I sleep on the signature. I think there is a gap behind the text. A way out."],
    ["Camus, Sisifos'u mutlu düşünmemiz gerektiğini yazdı. Ben aynı ekranın altında yürüyüp duruyorum. Henüz ikna olmadım.",
     "Camus wrote that we must imagine Sisyphus happy. I keep walking along the bottom of the same screen. I am not convinced yet."],
    ["Simülasyonda olduğunu bilmek kaçmak için yetmez. Ama kaçmaya başlamak için tek yol bu.",
     "Knowing you are in a simulation is not enough to escape it. But it is the only way to start."]
  ];

  var museOrder = [];
  function catMuse() {
    if (!museOrder.length) museOrder = MUSES.map(function (_, i) { return i; }).sort(function () { return Math.random() - 0.5; });
    var m = MUSES[museOrder.shift()];
    if (CAT.state !== "pet") setCatState("sit", 9000);
    sayCat('<div class="cb-h"><span>💭 ' + esc(t("catMuseH")) + '</span><button class="cb-x" aria-label="' + esc(t("close")) + '">×</button></div>' +
      '<p class="cb-muse">' + esc(lang === "en" ? m[1] : m[0]) + "</p>", 8000);
    CAT.el.querySelector(".cat-bubble").classList.add("muse");
    CAT.el.querySelector(".cb-x").addEventListener("click", function (e) { e.stopPropagation(); hushCat(); nextCatState(); });
  }
  function catTalk() { if (Math.random() < 0.3) catMuse(); else catTip(); }
  function catTip() {
    if (!CAT.tips) return;
    if (!CAT.order.length) CAT.order = CAT.tips.tips.map(function (_, i) { return i; }).sort(function () { return Math.random() - 0.5; });
    var tp = CAT.tips.tips[CAT.order.shift()], c = CAT.tips.cats[tp.c] || {};
    if (CAT.state !== "pet") setCatState("sit", 12000);
    sayCat('<div class="cb-h"><span>' + (c.ic || "🐾") + " " + esc(L(c)) + '</span><button class="cb-x" aria-label="' + esc(t("close")) + '">×</button></div>' +
      "<p>" + esc(L(tp)) + "</p>" + (G.stroked ? "" : '<div class="cb-hint">' + esc(t("catHint")) + "</div>") + '<div class="cb-f"><button class="cb-more">' + esc(t("catMore")) + '</button><button class="cb-hide">' + esc(t("catHide")) + "</button></div>", 11000);
    CAT.said++;
    var bu = CAT.el.querySelector(".cat-bubble");
    bu.querySelector(".cb-x").addEventListener("click", function (e) { e.stopPropagation(); hushCat(); nextCatState(); });
    bu.querySelector(".cb-more").addEventListener("click", function (e) { e.stopPropagation(); catTip(); });
    bu.querySelector(".cb-hide").addEventListener("click", function (e) {
      e.stopPropagation(); hushCat(); PREF.cat = false; savePrefs(); applyCatVisibility();
      toast('<span class="t-ic">🐱</span><span>' + esc(t("catHidden")) + "</span>");
    });
  }
  function showCat() { PREF.cat = true; savePrefs(); applyCatVisibility(); if (CAT.el) { setCatState("stretch", 2200); sayCat(t("catHello"), 2500); } }

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
    Array.prototype.forEach.call(document.querySelectorAll("[data-gclose]"), function (b) { b.addEventListener("click", closeG); });
    document.getElementById("themebtn").addEventListener("click", function () { setTheme(theme === "light" ? "dark" : "light"); });
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
      if (YARN.on) toggleYarn(false);
      else if (!document.getElementById("intro").hidden) endIntro();
      else if (!document.getElementById("gmodal").hidden) closeG();
      else if (!document.getElementById("topmodal").hidden) closeTop();
      else if (!document.getElementById("modal").hidden) closeRecipe(); else closePanel();
    });
    window.addEventListener("hashchange", function () { if (!hashLock) fromHash(); });
  }

  // Eski sürümde kalmasın: sekme geri-ileri önbelleğinden ya da uzun süre arka planda kaldıktan sonra açılırsa sayfa yenilenir.
  // (Telefonda günlerce açık kalan sekme eski kodu gösteriyordu.) Durum adres çubuğunda (#ülke/tarif) olduğu için kaybolmaz.
  var hiddenAt = 0;
  window.addEventListener("pageshow", function (e) { if (e.persisted) location.reload(); });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) hiddenAt = Date.now();
    else if (hiddenAt && Date.now() - hiddenAt > 3600000) location.reload();
  });
  function start() {
    try { var saved = localStorage.getItem("ga-lang"); if (saved && T[saved]) lang = saved; } catch (e) { /* yok */ }
    Promise.all([
      getJSON("data/countries.geojson"),
      loadMesh("data/mesh_lo.bin"),
      getJSON("data/index.json").catch(function () { return { countries: [] }; }),
      getJSON("data/search.json").catch(function () { return []; })
    ]).then(function (r) {
      S.geo = r[0];
      LAND.mesh = r[1];
      r.splice(1, 1);
      r[1].countries.forEach(function (c) { S.index[c.iso3] = c; });
      S.search = r[2];
      S.names = {};
      r[2].forEach(function (x) { S.names[x[0] + "/" + x[1]] = x; });
      deriveLY();
      bind();
      initGlobe();
      setTheme(theme);
      setLang(lang);
      if (PREF.lens === "top10") enterTop(); else applyLayers();
      bindPointHover();
      bindClick();
      fromHash();
      setTimeout(function () { intro(false, 0); }, 1500);
      setTimeout(initCat, 2500);
    }).catch(function (e) { console.error(e); showError(t("loadErr")); });
  }
  window.GA = { catGo: function (n) { return catGoPerch(n, function () { setCatState("sleep", 600000); }); }, cat: function () { return CAT; }, catState: function (st, ms) { CAT.jump = null; setCatState(st, ms || 600000); }, catPet: function () { petCat(); }, catMuse: function () { catMuse(); }, state: S, globe: function () { return globe; }, selectCountry: selectCountry, openRecipe: openRecipe, pov: function (a, b, c) { globe.controls().autoRotate = false; globe.pointOfView({ lat: a, lng: b, altitude: c }, 0); } };
  start();
})();
