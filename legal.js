/*
 * RESİF REHBERİ — YASAL METİNLER (TASLAK)
 * Bu metinler genel örnek taslaklardır. Site yayına alınmadan önce
 * bir hukukçuya kontrol ettirilmeli ve [köşeli parantez] içindeki alanlar doldurulmalıdır.
 */
const ILETISIM_EPOSTA = "ornek@resifrehberi.com";

const TASLAK_NOTU =
  '<p class="taslak-notu">Bu metin örnek bir taslaktır. Yayına almadan önce bir hukukçuya kontrol ettirilmelidir.</p>';

const YASAL_METINLER = {
  kvkk: {
    baslik: "KVKK Aydınlatma Metni",
    icerik: `
      ${TASLAK_NOTU}
      <p>Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 10. maddesi uyarınca,
      veri sorumlusu sıfatıyla <strong>[Ad Soyad / Unvan]</strong> ("Resif Rehberi") tarafından hazırlanmıştır.</p>

      <h3>1. İşlenen Kişisel Veriler</h3>
      <p>Resif Rehberi; üyelik, form, yorum veya iletişim formu gibi kişisel veri toplayan bir özellik içermez.
      Siteyi ziyaret etmeniz için herhangi bir kişisel bilgi vermeniz gerekmez.</p>
      <p>Bizimle e-posta yoluyla iletişime geçmeniz halinde; adınız, e-posta adresiniz ve mesaj içeriğiniz işlenebilir.</p>

      <h3>2. İşleme Amaçları</h3>
      <p>E-posta yoluyla iletilen veriler yalnızca talebinize yanıt vermek amacıyla işlenir.</p>

      <h3>3. Hukuki Sebep</h3>
      <p>Veriler, KVKK md. 5/2-f uyarınca "ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla
      veri sorumlusunun meşru menfaati" hukuki sebebine dayanarak işlenir.</p>

      <h3>4. Aktarım</h3>
      <p>Kişisel verileriniz üçüncü kişilerle paylaşılmaz. Sayfadaki fotoğraflar Wikimedia Commons sunucularından
      yüklendiğinden, tarayıcınız bu sunuculara teknik olarak IP adresinizi iletir. Bu aktarım, Wikimedia Vakfı'nın
      kendi gizlilik politikasına tabidir.</p>

      <h3>5. Haklarınız</h3>
      <p>KVKK md. 11 kapsamında; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya
      silinmesini isteme ve itiraz etme haklarına sahipsiniz. Başvurularınızı
      <a href="mailto:${ILETISIM_EPOSTA}">${ILETISIM_EPOSTA}</a> adresine iletebilirsiniz.</p>
    `
  },

  gizlilik: {
    baslik: "Gizlilik Politikası",
    icerik: `
      ${TASLAK_NOTU}
      <p>Resif Rehberi, ziyaretçilerinin gizliliğine önem verir. Bu politika, siteyi kullanırken hangi bilgilerin
      işlendiğini açıklar.</p>

      <h3>Toplanan Bilgiler</h3>
      <p>Site; kayıt, giriş, form veya analiz (istatistik) aracı içermez. Ziyaretçilerden herhangi bir kişisel bilgi talep edilmez
      ve saklanmaz.</p>

      <h3>Üçüncü Taraf İçerikler</h3>
      <p>Canlı fotoğrafları Wikimedia Commons'tan yüklenir. Fotoğraflar yüklenirken tarayıcınız, standart internet
      işleyişi gereği Wikimedia sunucularına IP adresi ve tarayıcı bilgisi gibi teknik verileri iletir.
      Ayrıntılar için Wikimedia Vakfı Gizlilik Politikası'na bakabilirsiniz.</p>

      <h3>Değişiklikler</h3>
      <p>Bu politika gerektiğinde güncellenebilir. Güncel sürüm her zaman bu sayfada yer alır.</p>

      <h3>İletişim</h3>
      <p>Sorularınız için: <a href="mailto:${ILETISIM_EPOSTA}">${ILETISIM_EPOSTA}</a></p>
      <p><em>Son güncelleme: [Tarih]</em></p>
    `
  },

  cerez: {
    baslik: "Çerez Politikası",
    icerik: `
      ${TASLAK_NOTU}
      <h3>Çerez Nedir?</h3>
      <p>Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır.</p>

      <h3>Resif Rehberi Çerez Kullanıyor mu?</h3>
      <p>Resif Rehberi kendi adına herhangi bir çerez oluşturmaz; reklam, takip veya analiz çerezi kullanmaz.</p>

      <h3>Üçüncü Taraf Çerezleri</h3>
      <p>Fotoğrafların yüklendiği Wikimedia Commons sunucuları, kendi politikaları çerçevesinde teknik çerezler
      kullanabilir. Bu çerezler Resif Rehberi'nin kontrolünde değildir.</p>

      <h3>Çerezleri Yönetme</h3>
      <p>Tarayıcınızın ayarlarından çerezleri görüntüleyebilir, silebilir veya engelleyebilirsiniz.
      Çerezleri engellemeniz bu sitenin kullanımını etkilemez.</p>
    `
  },

  kullanim: {
    baslik: "Kullanım Koşulları",
    icerik: `
      ${TASLAK_NOTU}
      <p>Resif Rehberi'ni kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.</p>

      <h3>1. Bilgilendirme Amacı</h3>
      <p>Bu sitedeki tüm bilgiler <strong>genel rehber amaçlıdır</strong>. Su değerleri, akvaryum hacimleri ve bakım
      önerileri kaynaktan kaynağa değişebilir ve canlının bireysel durumuna göre farklılık gösterebilir.
      Bir canlıyı edinmeden önce birden fazla kaynağa ve uzman görüşüne başvurmanızı öneririz.</p>

      <h3>2. Sorumluluk Reddi</h3>
      <p>Resif Rehberi, buradaki bilgilere dayanılarak yapılan uygulamalardan doğabilecek canlı kaybı, ekipman
      hasarı veya diğer zararlardan sorumlu tutulamaz.</p>

      <h3>3. Fikri Haklar</h3>
      <p>Site metinleri ve tasarımı Resif Rehberi'ne aittir. Fotoğraflar Wikimedia Commons'tan alınmış olup her biri
      kendi lisansına (genellikle Creative Commons) tabidir; fotoğrafların kaynak sayfasına detay penceresinden
      ulaşabilirsiniz.</p>

      <h3>4. Değişiklikler</h3>
      <p>Bu koşullar önceden bildirim yapılmaksızın güncellenebilir.</p>

      <h3>5. İletişim</h3>
      <p><a href="mailto:${ILETISIM_EPOSTA}">${ILETISIM_EPOSTA}</a></p>
    `
  }
};
