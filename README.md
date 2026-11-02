# Resif Rehberi

Deniz akvaryumu canlıları için basit bir bilgi rehberi.

## Nasıl açılır?
`index.html` dosyasına çift tıklayın; site tarayıcınızda açılır. Sunucu veya kurulum gerekmez.
Fotoğraflar internetten (Wikimedia Commons) yüklenir; internet yoksa yerlerinde basit simgeler görünür.

## Dosyalar
| Dosya | İçerik |
|---|---|
| `index.html` | Sayfa iskeleti |
| `style.css` | Görünüm |
| `app.js` | Arama, filtreler, pencereler |
| `data.js` | **Canlı listesi** — yeni canlıları buraya eklersiniz |
| `legal.js` | KVKK, gizlilik, çerez ve kullanım metinleri + iletişim e-postası |

## Yeni canlı ekleme
`data.js` dosyasını bir metin düzenleyiciyle açın, listenin sonundaki `];` satırından önce
şu kalıpta bir kayıt ekleyin (bir önceki kaydın `}` işaretinden sonra virgül olmasına dikkat edin):

```js
  {
    id: "sari-boks-baligi",            // benzersiz, boşluksuz kısa ad
    ad: "Sarı Boks Balığı",
    latince: "Ostracion cubicus",
    kategori: "Balık",                 // "Balık" | "Mercan" | "Omurgasız"
    aciklama: "Kısa tanıtım metni…",
    koken: "Hint-Pasifik",
    foto: "Dosya_adi.jpg",             // Wikimedia Commons dosya adı veya https://… adresi
    sicaklik: "24–27 °C", ph: "8.1–8.4", tuzluluk: "1.020–1.025",
    zorluk: "Zor",                     // "Kolay" | "Orta" | "Zor"
    minHacim: "500 L", boy: "45 cm",
    resifUyumu: "Dikkatli",            // "Evet" | "Dikkatli" | "Hayır"
    beslenme: "Hepçil: …",
    mizac: "Barışçıl"
  }
```

Wikimedia Commons'ta bir fotoğrafın dosya adı, sayfa adresindeki `File:` kısmından sonra gelen bölümdür
(ör. `commons.wikimedia.org/wiki/File:Neon_Blue_Goby.jpg` → `Neon_Blue_Goby.jpg`).

## Yasal metinler
`legal.js` içindeki metinler **örnek taslaktır**. Yayına almadan önce `[köşeli parantez]` alanlarını
doldurun ve bir hukukçuya kontrol ettirin. İletişim e-postasını `ILETISIM_EPOSTA` satırından değiştirebilirsiniz.

Bakım bilgileri genel rehber niteliğindedir; kaynaktan kaynağa farklılık gösterebilir.
