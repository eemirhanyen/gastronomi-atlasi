# Dünya Gastronomi Atlası

Bir dünya küresi. Bir ülkeye tıkladığında şunlar açılıyor:
- ülkenin simge lezzetleri
- en çok üretilen tarım ürünleri
- en çok ihraç edilen tarım ve gıda ürünleri
- A'dan Z'ye fotoğraflı tarifler

Site Türkçe ve İngilizce. Öğrenciler için hazırlanmış, ticari olmayan bir eğitim projesi.

## Veri
- **Tarım üretimi ve ihracat:** FAOSTAT (QCL, TCL). Kaynak betik: `scripts/fetch_fao.py`.
- **Simge lezzetler ve tarifler:** Claude ile üretildi, ardından ikinci bir AI geçişinde kontrol edilip gerekli yerlerde düzeltildi. İnsan editörden geçmedi. Kaynak betik: `scripts/content.py`.
- **Fotoğraflar:** Wikipedia ve Wikimedia Commons'taki serbest lisanslı görseller. Her fotoğrafın künyesi tarif penceresinde gösteriliyor.

## Çalıştırma
- GitHub Actions'ta **FAO verisi** iş akışı, `data/fao.json` dosyasını üretir.
- GitHub Actions'ta **İçerik üret** iş akışı şu aşamaları sırayla çalıştırır: plan, recipes, review, items, images, build. Her aşama bitince sonucu depoya kaydeder. Yarıda kalırsa yeniden çalıştırıldığında yalnızca eksikleri tamamlar.
- Gerekli gizli anahtar: `ANTHROPIC_API_KEY`.
