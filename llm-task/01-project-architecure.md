# 🗣️ Project Architecture

## Proje Adı: Aviation Game

## Proje Özeti

Gerçek Zamanlı Crash Oyunu

## Proje Vizyonu

Kullanıcıların artan bir çarpana karşı bahis oynadığı, görsel olarak çekici, hızlı ve akıcı bir gerçek zamanlı çok oyunculu "crash" oyunu geliştirmek. Proje, modern web teknolojileri olan Angular v19'nin güçlü yapısını ve PixiJS v8'in yüksek performanslı 2D grafik yeteneklerini bir araya getirerek masaüstü ve mobil platformlarda kusursuz bir deneyim sunmayı hedefler.

## Proje Tanımı ve Amacı

Bu proje,web socket’den gelen cevaplara, göre (”Waiting, idle, vesaire vb.”) ("crash") Aksiyın alan, crash olana kadar artan bir çarpanı temel alan bir bahis oyunudur. Oyuncular, her tur başlamadan önce bahislerini yapar ve crash olmadan önce istedikleri bir çarpanda "Nakit Al" (Cash Out) butonuna basarak kazançlarını realize etmeye çalışırlar. Amaç, hem heyecan verici bir oyun döngüsü sunmak hem de kullanıcıların birbirleriyle etkileşimde bulunabileceği sosyal bir platform oluşturmaktır.

## **Temel Özellikler ve Fonksiyonlar**

### **Genel Layout Yapısı**

Uygulama, üç ana bölümden oluşan dikey bir düzene sahip olacaktır:

1. **Header (Üst Bar):** Sabit üst menü.
2. **Main (Ana İçerik):** Tüm ana oyun bileşenlerini barındıran, ekranın büyük bölümünü kaplayan esnek alan.
3. **Footer (Alt Bar):** Geçmiş tur bilgilerini gösteren sabit alt şerit.

### **1. Header (Üst Bar / Navbar)**

Ekranın en üstünde yer alan, her zaman görünür olan sabit bir çubuktur.

### **2. Main (Ana İçerik Alanı)**

Header ve Footer arasında kalan, ekranın ana bölümüdür. Bu alan, masaüstü görünümünde **iki ana sütuna** ayrılır: **Sol Panel** ve  **Oyun/Etkileşim Alanı** .

### **2A. Sol Panel (Masaüstü Görünümü)**

Bu panel, yalnızca geniş ekranlarda (masaüstü/tablet) görünür olacaktır. Mobil cihazlarda gizlenir veya bir menü aracılığıyla erişilebilir hale getirilir.

### **2B. Oyun ve Etkileşim Alanı (Orta/Sağ Sütun)**

Bu alan, uygulamanın merkezidir ve hem masaüstü hem de mobil cihazlarda her zaman görünürdür. Kendi içinde dikey olarak üç ana bölüme ayrılır:

**i. Oyun Sahnesi (Game Canvas - PixiJS)**

* Ekranın en geniş alanını kaplayan ana oyun bölümü.
* **Dinamik Arka Plan:** Siyah ve temaya uygun görsel efektler.
* **Çarpan Göstergesi:** Ekranın merkezinde, oyun boyunca dinamik olarak artan (`1.00x → ∞`), büyük ve okunaklı çarpan değeri.**:**

**ii. Bahis Kontrol Paneli (Betting Controls)**

* Oyun sahnesinin hemen altında yer alan etkileşim alanı.
* **Bahis Hazırlık Panelleri:**
  * Kullanıcının aynı anda birden fazla (örn: 2 adet en fazla 5 adet olablir) bahis hazırlığı yapabilmesi için tasarlanmış bağımsız paneller.
  * Her panelde: Bahis miktarı girişi, hızlı artırım butonları (`+1`, `+10`, `+100`) ve "Otomatik Bahis/Nakit Al" ayarları için bir anahtar (switch) bulunur.
* **Ana Eylem Butonları:**
  * Tüm bahis panelleri için ortak, merkezi eylem butonları.
  * Oyun durumuna göre dinamik olarak değişirler:
    * **BAHİS YAP (BET):** Hazırlanan bahisleri onaylamak için kullanılır. Üzerinde toplam bahis tutarı gösterilebilir.
    * **NAKİT AL (CASHOUT):** Oyun devam ederken bahsi bozdurmak için kullanılır.
    * **İPTAL ET (CANCEL):** Tur başlamadan önce yapılan bahsi iptal eder.

**iii. Sohbet Paneli (Chat - Masaüstü Görünümü)**

* Bu panel,  **Oyun ve Etkileşim Alanı** 'nın sağ tarafında, dikey bir sütun olarak yer alır.

### **3. Footer (Alt Bar / History)**

Ekranın en altında yer alan, sola doğru kaydırılabilen yatay bir şerittir.

* **Geçmiş Turlar (History):** Önceki turların sonuçlandığı çarpanların bir listesini gösterir.

## Teknik Gereksinimler

* **Frontend Framework:** **Angular (v19)**
  * Bileşen tabanlı (Component-based) mimari kullanılacak.
  * Servisler (Services) aracılığıyla state yönetimi (RxJS ile) ve backend iletişimi sağlanacak.
  * Performans için `OnPush` değişiklik algılama stratejisi ve lazy loading modüller kullanılacak.
* **Grafik Motoru:** **PixiJS (v8)**
  * Oyunun ana animasyonlarının render edilmesi için kullanılacak. Angular bileşeni içine yerleştirilmiş bir `<canvas>` elementi üzerinde çalışacak.
  * WebGL'den faydalanarak yüksek performanslı bir oyun alanı elde edilecek.
* **Gerçek Zamanlı İletişim:** **WebSocket (örn: [Socket.IO](http://Socket.IO))**
  * Tüm oyun durumlarının (çarpan artışı, oyuncu bahisleri, nakit alma anları, sohbet mesajları) sunucudan tüm istemcilere anlık olarak iletilmesi için kritik öneme sahiptir.

</aside>
