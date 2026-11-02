// Resif Rehberi — kartlar, arama/filtre ve pencereler

const izgara = document.getElementById("izgara");
const aramaKutusu = document.getElementById("arama");
const zorlukSecimi = document.getElementById("zorluk");
const resifSecimi = document.getElementById("resif");
const sayac = document.getElementById("sayac");
const bosMesaj = document.getElementById("bos");
const pencere = document.getElementById("pencere");
const pencereIcerik = document.getElementById("pencere-icerik");

let seciliKategori = "";

// Fotoğraf yüklenemezse kategoriye göre gösterilecek simgeler
const YER_TUTUCU = {
  "Balık": '<path d="M20 60c18-22 52-26 74-6l16-12v36l-16-12c-22 20-56 16-74-6z" />',
  "Mercan": '<path d="M60 100V60M60 70 40 50V30M60 60l20-20V22M40 44 28 34M80 40l12-10" stroke-width="6" stroke-linecap="round" fill="none" stroke="currentColor" />',
  "Omurgasız": '<path d="M60 18l11 26 28 2-21 18 7 27-25-15-25 15 7-27-21-18 28-2z" />'
};

function yerTutucu(kategori) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="#9cc9d8" color="#9cc9d8">` +
    `<rect width="120" height="120" fill="#e3f3f8"/>${YER_TUTUCU[kategori] || ""}</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function fotoAdresi(foto, genislik) {
  if (!foto) return "";
  if (/^https?:\/\//.test(foto)) return foto;
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(foto)}?width=${genislik}`;
}

function kaynakAdresi(foto) {
  if (!foto) return "";
  if (/^https?:\/\//.test(foto)) return foto;
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(foto)}`;
}

function guvenli(metin) {
  const div = document.createElement("div");
  div.textContent = metin ?? "";
  return div.innerHTML;
}

function resimEtiketi(canli, genislik) {
  const yedek = yerTutucu(canli.kategori);
  const kaynak = fotoAdresi(canli.foto, genislik) || yedek;
  return `<img class="foto" src="${kaynak}" alt="${guvenli(canli.ad)}" loading="lazy"
    onerror="this.onerror=null;this.src='${yedek}'">`;
}

// Türkçe karakterleri sadeleştirerek aramayı kolaylaştırır (ç→c, ğ→g, ı→i …)
function sadelestir(metin) {
  return metin
    .toLocaleLowerCase("tr")
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u");
}

function kartlariCiz() {
  const aranan = sadelestir(aramaKutusu.value.trim());
  const zorluk = zorlukSecimi.value;
  const resif = resifSecimi.value;

  const sonuc = CANLILAR.filter(c =>
    (!seciliKategori || c.kategori === seciliKategori) &&
    (!zorluk || c.zorluk === zorluk) &&
    (!resif || c.resifUyumu === resif) &&
    (!aranan || sadelestir(`${c.ad} ${c.latince}`).includes(aranan))
  );

  izgara.innerHTML = sonuc.map(c => `
    <button class="kart" data-id="${guvenli(c.id)}">
      ${resimEtiketi(c, 500)}
      <div class="kart-govde">
        <h2>${guvenli(c.ad)}</h2>
        <p class="latince">${guvenli(c.latince)}</p>
        <div class="rozetler">
          <span class="rozet">${guvenli(c.kategori)}</span>
          <span class="rozet ${guvenli(c.zorluk)}">${guvenli(c.zorluk)}</span>
        </div>
      </div>
    </button>
  `).join("");

  sayac.textContent = `${sonuc.length} / ${CANLILAR.length} canlı`;
  bosMesaj.hidden = sonuc.length > 0;
}

function grup(baslik, satirlar) {
  return `
    <div class="grup">
      <h3>${baslik}</h3>
      <dl>${satirlar.map(([ad, deger]) => `<dt>${ad}</dt><dd>${guvenli(deger) || "—"}</dd>`).join("")}</dl>
    </div>`;
}

function detayAc(id) {
  const c = CANLILAR.find(x => x.id === id);
  if (!c) return;

  pencereIcerik.innerHTML = `
    <article class="detay">
      ${resimEtiketi(c, 900)}
      <div class="detay-govde">
        <h2>${guvenli(c.ad)}</h2>
        <p class="latince">${guvenli(c.latince)}</p>
        <div class="rozetler">
          <span class="rozet">${guvenli(c.kategori)}</span>
          <span class="rozet ${guvenli(c.zorluk)}">${guvenli(c.zorluk)}</span>
        </div>
        <p class="aciklama">${guvenli(c.aciklama)}</p>
        <div class="gruplar">
          ${grup("Genel", [["Köken", c.koken], ["Yetişkin boyu", c.boy]])}
          ${grup("Su değerleri", [["Sıcaklık", c.sicaklik], ["pH", c.ph], ["Tuzluluk (SG)", c.tuzluluk]])}
          ${grup("Bakım", [["Zorluk", c.zorluk], ["Min. hacim", c.minHacim], ["Beslenme", c.beslenme]])}
          ${grup("Uyumluluk", [["Resif uyumu", c.resifUyumu], ["Mizaç", c.mizac]])}
        </div>
        ${c.foto ? `<p class="kaynak">Fotoğraf: <a href="${kaynakAdresi(c.foto)}" target="_blank" rel="noopener">Wikimedia Commons</a> (lisans ve fotoğrafçı bilgisi kaynak sayfasındadır)</p>` : ""}
      </div>
    </article>`;
  pencereyiGoster();
}

function yasalAc(anahtar) {
  const metin = YASAL_METINLER[anahtar];
  if (!metin) return;
  pencereIcerik.innerHTML = `<article class="yasal-metin"><h2>${metin.baslik}</h2>${metin.icerik}</article>`;
  pencereyiGoster();
}

function pencereyiGoster() {
  pencere.showModal();
  pencere.scrollTop = 0;
}

// Olaylar
aramaKutusu.addEventListener("input", kartlariCiz);
zorlukSecimi.addEventListener("change", kartlariCiz);
resifSecimi.addEventListener("change", kartlariCiz);

document.querySelectorAll(".kat").forEach(dugme => {
  dugme.addEventListener("click", () => {
    document.querySelectorAll(".kat").forEach(d => d.classList.remove("aktif"));
    dugme.classList.add("aktif");
    seciliKategori = dugme.dataset.kategori;
    kartlariCiz();
  });
});

izgara.addEventListener("click", e => {
  const kart = e.target.closest(".kart");
  if (kart) detayAc(kart.dataset.id);
});

document.querySelectorAll("[data-yasal]").forEach(dugme => {
  dugme.addEventListener("click", () => yasalAc(dugme.dataset.yasal));
});

pencere.querySelector(".kapat").addEventListener("click", () => pencere.close());
// Pencere dışına (karartılmış alana) tıklayınca kapat
pencere.addEventListener("click", e => {
  if (e.target === pencere) pencere.close();
});

const epostaBag = document.getElementById("eposta");
epostaBag.href = `mailto:${ILETISIM_EPOSTA}`;
epostaBag.textContent = ILETISIM_EPOSTA;

kartlariCiz();
