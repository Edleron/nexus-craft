<aside>
👌🏽

## Introduction

### Angular Nedir? *~~(Öğrenildi)~~*

 **Angular** , Google tarafından geliştirilen ve yönetilen, **TypeScript** tabanlı, açık kaynak kodlu bir web uygulama geliştirme platformu ve framework'üdür. Özellikle **Tek Sayfa Uygulamaları (Single Page Applications - SPA)** oluşturmak için tasarlanmıştır.

### Temel Özellikleri* ~~(Öğrenildi)~~*

* **Bileşen (Component) Tabanlı Mimari:**
  Uygulamalar, kendi içinde HTML (template), CSS (stil) ve TypeScript (mantık) kodunu barındıran, yeniden kullanılabilir ve bağımsız yapılar olan **bileşenlerden** oluşur. Bu yapı, kodun organize edilmesini ve bakımını kolaylaştırır.
* **TypeScript:**
  Angular, statik tipleme, sınıflar ve arayüzler gibi özellikler sunan TypeScript dilini kullanır. Bu, özellikle büyük ve karmaşık projelerde kodun daha okunabilir, yönetilebilir ve hataya daha az eğilimli olmasını sağlar.
* **Platformlar Arası (Cross-Platform):**
  Angular ile geliştirilen uygulamalar web, mobil (Ionic gibi framework'ler ile) ve masaüstü (Electron gibi platformlar ile) üzerinde çalışabilir.
* **Kapsamlı Bir Framework:**
  Angular, sadece bir kütüphane değil, bir platformdur. Yönlendirme (Routing), form yönetimi, durum yönetimi (state management) ve HTTP istemcisi gibi modern bir uygulama geliştirmek için gereken birçok aracı ve kütüphaneyi kendi içinde barındırır.
* **Angular CLI (Command Line Interface):**
  Proje oluşturma, bileşen ekleme, testleri çalıştırma, derleme ve yayınlama gibi birçok geliştirme sürecini otomatikleştiren güçlü bir komut satırı aracıdır. Geliştirici verimliliğini ciddi ölçüde artırır.
* **İki Yönlü Veri Bağlama (Two-Way Data Binding):**
  Model (veri katmanı) ile View (görünüm katmanı) arasında otomatik bir senkronizasyon sağlar. Bu sayede, arayüzde yapılan bir değişiklik anında veri modeline, veri modelindeki bir değişiklik de anında arayüze yansır.

### Ne İşe Yarar? *~~(Öğrenildi)~~*

Kısacası Angular, büyük ölçekli, yüksek performanslı ve bakımı kolay, modern web uygulamaları geliştirmek için kullanılan güçlü ve bütünleşik bir çözümdür. Geliştiricilere standart bir yapı sunarak takım çalışmasını ve proje ölçeklendirmeyi kolaylaştırır.

### Single Page Application (SPA) Nedir? *~~(Öğrenildi)~~*

 **Tek Sayfa Uygulaması (SPA)** , kullanıcının tarayıcısında tek bir HTML sayfası yükleyerek çalışan ve kullanıcı etkileşiminde sayfanın tamamını yeniden yüklemek yerine sadece ilgili içeriği dinamik olarak güncelleyen modern bir web uygulaması türüdür.

### Nasıl Çalışır? *~~(Öğrenildi)~~*

* **İlk Yükleme:** Tarayıcı, uygulamanın tüm temel kodlarını (HTML, CSS, JavaScript) tek seferde yükler.
* **Dinamik Güncelleme:** Kullanıcı menüler arasında gezindiğinde veya bir eylem gerçekleştirdiğinde, sayfa yenilenmez. Bunun yerine, uygulama arka planda sunucudan sadece ihtiyaç duyulan veriyi (genellikle JSON formatında) alır ve mevcut sayfanın ilgili bölümünü JavaScript ile günceller.

Bu yaklaşım, masaüstü uygulamalarına benzer, akıcı ve hızlı bir kullanıcı deneyimi sunar. **Gmail, Facebook ve Google Maps** popüler SPA örnekleridir.

### TypeScript Nedir? *~~(Öğrenildi)~~ - Zaten uzman seviye biliniyor (7 years pixi development with ts)*

 **TypeScript** , Microsoft tarafından geliştirilen ve JavaScript'in tüm özelliklerini içeren **statik tipli** bir üst kümesidir (superset).

Yazdığınız TypeScript kodları, çalıştırılmadan önce standart JavaScript koduna derlenir (dönüştürülür).

### En Temel Faydası: ~~*(Öğrenildi)*~~

Kod yazarken değişkenlerin, fonksiyon parametrelerinin ve döndürülen değerlerin türlerini (`string`, `number`, `boolean` vb.) önceden belirlemenizi sağlar. Bu sayede hataları program çalışmadan, henüz kodlama aşamasındayken yakalamanıza yardımcı olur ve büyük projelerde kodun daha güvenli ve okunabilir olmasını sağlar.

## Setup *~~(Öğrenildi)~~*

### Node.js Nedir? *~~(Öğrenildi)~~*

 **Node.js** , normalde sadece web tarayıcılarında çalışan **JavaScript** kodunu, tarayıcı dışında (örneğin kendi bilgisayarınızda veya bir sunucuda) çalıştırmanızı sağlayan bir ortamdır.

Kısacası, JavaScript'i sunucu tarafı programlama dili olarak kullanmanıza olanak tanır. Genellikle hızlı ve ölçeklenebilir ağ uygulamaları, özellikle de **API sunucuları** oluşturmak için kullanılır.

### npm (Node Package Manager) Nedir? *~~(Öğrenildi)~~*

 **npm** , Node.js için varsayılan  **paket yöneticisidir** . Node.js projelerinizde ihtiyaç duyduğunuz hazır kod paketlerini (kütüphaneleri veya araçları) kolayca kurmanızı, yönetmenizi ve paylaşmanızı sağlayan bir komut satırı aracıdır.

* **`npm install <paket_adı>`** gibi komutlarla projenize anında yeni özellikler ekleyebilirsiniz.
* Projenizin bağımlılıklarını `package.json` adlı bir dosyada yönetir.

### Angular CLI Kurulumu *~~(Öğrenildi)~~*

Angular CLI (Command Line Interface - Komut Satırı Arayüzü), Angular projeleri oluşturmak, yönetmek, derlemek ve test etmek gibi işlemleri otomatikleştiren bir komut satırı aracıdır. Kurulumu için aşağıdaki adımları izleyebilirsiniz.

### 1. Ön Gereksinim: Node.js Kurulumu *~~(Öğrenildi)~~*

Angular CLI, çalışmak için **Node.js** ve onun paket yöneticisi olan  **npm** 'e ihtiyaç duyar. Bilgisayarınızda Node.js kurulu değilse öncelikle onu kurmanız gerekir.

* **Kontrol:** Bilgisayarınızda Node.js ve npm'in kurulu olup olmadığını kontrol etmek için komut satırını (Terminal veya Command Prompt) açıp aşağıdaki komutları çalıştırabilirsiniz:Bash
  ```csharp
  node -v
  npm -v
  ```
* **Kurulum:** Eğer bu komutlar hata verirse veya versiyon çok eskiyse, [Node.js resmi web sitesinden](https://nodejs.org/) LTS (Long Term Support - Uzun Süreli Destek) versiyonunu indirip kurun. npm, Node.js ile birlikte otomatik olarak kurulacaktır.

---

### 2. Angular CLI'ın Global Olarak Kurulması *~~(Öğrenildi)~~*

Ön gereksinimleri sağladıktan sonra, Angular CLI'ı bilgisayarınıza **global** olarak (yani herhangi bir klasörden erişebilecek şekilde) kurmak için aşağıdaki `npm` komutunu kullanın:

Bash

```csharp
npm install -g @angular/cli
```

* **`npm install`** : npm'in paket kurma komutudur.
* **`g`** : Paketin "global" olarak kurulmasını sağlar. Bu sayede `ng` komutunu bilgisayarınızın her yerinden çalıştırabilirsiniz.
* **`@angular/cli`** : Kurulacak paketin adıdır.

**Not:** macOS veya Linux kullanıyorsanız, global kurulum için yönetici izni gerekebilir. Bu durumda komutun başına `sudo` eklemelisiniz: `sudo npm install -g @angular/cli`

---

### 3. Kurulumu Doğrulama *~~(Öğrenildi)~~*

Kurulumun başarılı olup olmadığını kontrol etmek için aşağıdaki komutu çalıştırın:

Bash

```csharp
ng --version
```

veya daha kısası:

Bash

```csharp
ng v
```

Bu komut, başarıyla kurulduysa size Angular CLI'ın, Node.js'in ve işletim sisteminizin versiyon bilgilerini gösteren bir çıktı verecektir.

Artık `ng new <proje-adi>` komutuyla yeni bir Angular projesi oluşturmaya hazırsınız!

---

Power Sheelde Angular izinleri için,

```csharp
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Visual Studioe Extension List *~~(Öğrenildi)~~*

* Angular Language Service
* Path Instellisense
* Auto Close Tag
* Auto Renema Tag

### CLI Nedir? *~~(Öğrenildi)~~*

CLI, **C**ommand-**L**ine **I**nterface'in kısaltmasıdır ve Türkçe'de **Komut Satırı Arayüzü** anlamına gelir.

En basit tanımıyla, bir bilgisayar programı veya işletim sistemi ile **yazılı komutlar girerek** iletişim kurmanızı sağlayan metin tabanlı bir arayüzdür.

Günümüzde kullandığımız pencereler, butonlar ve fare imlecinden oluşan **Grafiksel Kullanıcı Arayüzü'nün (GUI - Graphical User Interface)** tam tersidir.

---

## Entrance *~~(Öğrenildi)~~*

### İlk Angular Projesini Oluşturma ve Çalıştırma *~~(Öğrenildi)~~*

Temelde 3 ana komut kullanacaksınız:

### 1. Yeni Proje Oluştur (`ng new`) *~~(Öğrenildi)~~*

Komut satırını (Terminal/CMD) açın ve projelerinizi sakladığınız bir klasöre gidin. Ardından aşağıdaki komutu çalıştırın:

Bash

`ng new ilk-projem`

* `ilk-projem` yerine kendi proje adınızı yazabilirsiniz.
* Bu komutu yürüttüğünüzde CLI size bazı sorular soracaktır:
  * **"Would you like to add Angular routing?"** (Routing eklemek ister misiniz?): Genellikle **Yes** (Evet) demek iyi bir başlangıçtır. `Y` yazıp Enter'a basın.
  * **"Which stylesheet format...?"** (Hangi stil formatını istersiniz?): Başlangıç için ok tuşlarıyla  **CSS** 'i seçip Enter'a basmak en basitidir.

Bu adımlardan sonra Angular CLI, tüm proje dosyalarını oluşturacak ve gerekli paketleri internetten indirip kuracaktır. (Bu işlem birkaç dakika sürebilir.)

***Questions***

* **Zoneless:** Bu seçenek, Angular'ın değişiklikleri otomatik olarak algılamasını sağlayan `Zone.js` kütüphanesi olmadan bir proje oluşturur; bu da manuel kontrol gerektirse de potansiyel olarak daha iyi performans sunar.
* **CSS:** Bu, bileşenlerinizi stilendirmek için herhangi bir ön-işlemciye (Sass, Less gibi) ihtiyaç duymayan, tarayıcıların anladığı standart ve temel web stil dilini kullanacağınızı belirtir.
* **SSG (Static Site Generation):** Bu seçenek, uygulamanızın sayfalarını henüz sunucuya yüklenmeden (build sırasında) statik HTML dosyaları olarak oluşturur; bu sayede siteniz çok daha hızlı açılır ve arama motorları (SEO) için daha uyumlu hale gelir.

### 2. Proje Klasörüne Gir (`cd`) *~~(Öğrenildi)~~*

Projenin başarıyla oluşturulmasının ardından, komut satırında o projenin klasörüne geçiş yapmanız gerekir:

Bash

`cd ilk-projem`

### 3. Projeyi Çalıştır (`ng serve`) *~~(Öğrenildi)~~*

Artık proje klasörünün içindesiniz. Uygulamayı yerel geliştirme sunucusunda başlatmak için aşağıdaki komutu kullanın:

Bash

`ng serve --open`

* `ng serve`: Uygulamayı derler ve bir sunucu başlatır.
* `-open` (veya kısaca `o`): İşlem bittiğinde uygulamayı otomatik olarak varsayılan web tarayıcınızda açar.

Uygulamanız varsayılan olarak **`http://localhost:4200/`** adresinde çalışmaya başlayacak ve tarayıcınızda Angular'ın başlangıç sayfasını göreceksiniz.

İşte bu kadar! Artık projenizin kodlarını düzenlemeye başlayabilirsiniz.

### Angular Klasör ve Dosya Yapısı *~~(Öğrenildi)~~*

* `📁 .angular`
  * Angular'ın derleme işlemleri için oluşturduğu önbellek (cache) dosyaları.
* `📁 .vscode`
  * Visual Studio Code editörüne özel ayarlar.
* `📁 node_modules`
  * Projenin ihtiyaç duyduğu tüm harici kütüphaneler (paketler).
* `📁 public`
  * `favicon.ico` gibi doğrudan sunulacak statik varlıklar.
* `📁 src`
  * Uygulamanızın tüm kaynak kodlarının bulunduğu ana klasör.
  * `L 📁 app`
    * Uygulamanın ana bileşenlerini ve mantığını içeren kök klasör.
    * `L 📄 app.component.css`
      * Ana bileşene özel stiller.
    * `L 📄 app.component.html`
      * Ana bileşenin HTML görünümü.
    * `L 📄 app.component.spec.ts`
      * Ana bileşen için testler.
    * `L 📄 app.component.ts`
      * Ana bileşenin çalışma mantığı (TypeScript kodu).
    * `L 📄 app.config.ts`
      * Uygulama genelindeki temel yapılandırmalar (routing gibi).
    * `L 📄 app.routes.ts`
      * Uygulamanın sayfa yönlendirme (route) tanımları.
  * `L 📄 index.html`
    * Uygulamayı yükleyen tek, ana HTML sayfası.
  * `L 📄 main.ts`
    * Uygulamayı başlatan ilk dosya (giriş noktası).
  * `L 📄 styles.css`
    * Tüm uygulamayı etkileyen genel (global) stiller.
* `📄 .editorconfig`
  * Farklı editörlerde aynı kod stilini korumak için kurallar.
* `📄 .gitignore`
  * Git versiyon kontrolünün görmezden geleceği dosyalar.
* `📄 angular.json`
  * Angular CLI için proje yapılandırma ayarları.
* `📄 package-lock.json`
  * Yüklenen paketlerin tam sürümlerini kilitleyen dosya.
* `📄 package.json`
  * Proje bilgileri ve gerekli paketlerin (bağımlılıkların) listesi.
* `📄 README.md`
  * Proje hakkında bilgi ve açıklamaların yer aldığı doküman.
* `📄 tsconfig.app.json`
  * Uygulama kodu için TypeScript derleyici ayarları.
* `📄 tsconfig.json`
  * Projenin temel TypeScript derleyici ayarları.
* `📄 tsconfig.spec.json`
  * Test dosyaları için TypeScript derleyici ayarları.

### Angular Projesine Ayağa Kaldırma (*~~Öğrenildi)~~*

Proje klasörünün içindeyken komut satırına şunu yazman yeterli:

```csharp
ng serve --open
```

Veya daha da kısası:

```csharp
ng serve -o
```

* **`ng serve`**
  Bu komut tek başına, Angular projesini derler ve bir geliştirme sunucusu başlatır. Projen `http://localhost:4200` adresinde  **çalışır hale gelir** , ama tarayıcın  **otomatik olarak açılmaz** . Senin manuel olarak tarayıcıyı açıp adresi yazman gerekir.
* **`ng serve --open**-open` bayrağını (flag) eklediğinde ise, `ng serve` aynı işlemleri yapar **VE** işlem bittiğinde varsayılan web tarayıcını **otomatik olarak açarak** projeni sana gösterir.

### Component Nedir ? *~~(Öğrenildi)~~*

Bir  **Component** , Angular uygulamasının temel yapı taşıdır. Onu, bir web sayfasının **yeniden kullanılabilir, bağımsız bir parçası** olarak düşünebilirsin. Tıpkı bir arabanın tekerlek, kapı, direksiyon gibi ayrı ayrı ama birbiriyle uyumlu çalışan parçalardan oluşması gibi, bir Angular uygulaması da "kullanıcı giriş formu," "ürün kartı," "üst menü" gibi bileşenlerden oluşur.

Her bileşen, kendi görünümünü (HTML), stilini (CSS) ve mantığını (TypeScript) kendi içinde yönetir

### Bileşeni Oluşturan Temel Dosyalar *~~(Öğrenildi)~~*

Bir bileşen genellikle birbiriyle ilişkili dört dosyadan oluşur. `app.component` örneği üzerinden gidelim:

* **`app.component.html` (İskelet 🦴)**
  Bileşenin **görsel yapısını ve içeriğini** tanımlayan HTML kodudur. Kullanıcının ekranda ne göreceğini belirler.
* **`app.component.ts` (Beyin 🧠)**
  Bileşenin **çalışma mantığını ve verilerini** içeren TypeScript sınıfıdır. Kullanıcı etkileşimlerini (tıklama gibi) yönetir ve HTML'de gösterilecek verileri tutar.
* **`app.component.css` (Kıyafet 👕)Sadece o bileşene özel** stilleri içeren CSS dosyasıdır. Buradaki stiller, başka bileşenleri etkilemez; bu sayede stil karmaşasının önüne geçilir.
* **`app.component.spec.ts` (Sağlık Kontrolü 🩺)**
  Bileşenin doğru çalışıp çalışmadığını kontrol etmek için yazılan **birim testi (unit test)** dosyasıdır. Projenin kalitesini ve güvenilirliğini artırır.

### Angular CLI ile Component Oluşturma *~~(Öğrenildi)~~*

```csharp
ng generate component "component-name"
// component keyword ekleme, kendi ekliyor.
```

### Componentleri iç içe ekleme süreçleri *~~(Öğrenildi)~~*

**Amacımız:** Yeni bir `HomeComponent` oluşturup bunu ana `AppComponent` içinde göstermek.

---

### Adım 1: İçeride Gösterilecek Bileşeni (Child Component) Oluştur *~~(Öğrenildi)~~*

Önce `home` adında yeni bir component oluşturalım. Komut satırına şunu yaz:

```csharp
ng generate component home
```

veya kısaca:

```csharp
ng g c home
```

Bu komut, `home` adında bir klasör ve içinde `home.component.ts`, `.html`, `.css` dosyalarını oluşturur.

---

### Adım 2: Ana Bileşeni (Parent Component) Hazırla* ~~(Öğrenildi)~~*

Şimdi `AppComponent`'e, "Senin içinde `HomeComponent`'i kullanacağım." dememiz gerekiyor. Bunun için `app.component.ts` dosyasını açıp iki küçük ekleme yapacağız.

`app.component.ts` dosyan şöyle görünmeli:

TypeScript

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. ADIM: Kullanacağın component'i import et
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. ADIM: imports dizisine component'i ekle
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
```

Yaptığımız iki şey:

1. `HomeComponent` sınıfını dosyanın en üstünde `import` ettik.
2. `@Component` dekoratörünün içindeki `imports` dizisine `HomeComponent`'i ekledik.

---

### Adım 3: Selector'u Ana HTML'de Kullan *~~(Öğrenildi)~~*

Artık `AppComponent`, `HomeComponent`'i tanıyor. Onu ekranda göstermek için `HomeComponent`'in  **selector** 'ını kullanmalıyız.

`HomeComponent`'in selector'ı, `home.component.ts` dosyasında yazar (genellikle `app-home` şeklindedir).

Şimdi `app.component.html` dosyasını açıp içeriğini temizleyebilir ve `HomeComponent`'in selector'ını normal bir HTML etiketi gibi ekleyebilirsin:

`app.component.html` dosyanın içeriği:

HTML

```csharp
<h1>Burası Ana Bileşen (AppComponent)</h1>
<p>Şimdi aşağıda Home bileşenini çağırıyoruz:</p>

<hr>

<app-home></app-home>

<hr>

<p>Home bileşeni gösterildi, AppComponent devam ediyor.</p>

<router-outlet></router-outlet>
```

### Özetle Notların İçin* ~~(Öğrenildi)~~*

1. **Oluştur:** `ng g c home` ile yeni component'i oluştur.
2. **Tanıt/İçe Aktar:** Kullanacağın component'i, onu göstereceğin component'in `.ts` dosyasında `import` et ve `@Component` içindeki `imports` dizisine ekle.
3. **Çağır/Kullan:** Tanıttığın component'in `selector`'ını, ana component'in `.html` dosyasına bir HTML etiketi gibi yerleştir.

### Ts > Html | Değişken Kullanımı *~~(Öğrenildi)~~*

<aside>
👌🏽

Bir değişkene değer atayıp bunu HTML'de göstermek Angular'ın en temel ve en güçlü özelliklerinden biridir.

</aside>

### Adım 1: Değişkeni TypeScript Dosyasında Tanımla *~~(Öğrenildi)~~*

`app.component.ts` dosyasını aç. `export class AppComponent {}` bloğunun içine, HTML tarafında göstermek istediğin değişkeni tanımla.

`app.component.ts` dosyan şöyle görünmeli:

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // 1. ADIM: Değişkeni burada tanımla ve bir değer ata
  kullaniciAdi: string = "Ahmet";
  mesaj: string = "Angular'a hoş geldin!";
  yas: number = 25;
}
```

* `kullaniciAdi`, `mesaj` ve `yas` adında üç farklı değişken tanımladık.
* Değişkenlerin türlerini (`string`, `number`) belirttik. Bu, TypeScript'in bir özelliğidir ve kodun daha güvenli olmasını sağlar.

---

### Adım 2: Değişkeni HTML Dosyasında Göster (*~~Öğrenildi)~~*

Şimdi `app.component.html` dosyasını aç. TypeScript tarafında tanımladığın değişkenleri HTML içinde göstermek için **çift süslü parantez `{{ }}`** (interpolation) kullanılır.

`app.component.html` dosyanın içeriğini temizleyip aşağıdaki gibi düzenleyebilirsin:

HTML

```csharp
<h1>Kullanıcı Bilgileri</h1>

<p><strong>Kullanıcı Adı:</strong> {{ kullaniciAdi }}</p>

<p><strong>Mesaj:</strong> {{ mesaj }}</p>

<p><strong>Yaşı:</strong> {{ yas }}</p>

<hr>

<p>
  Aynı değişkenleri bir cümle içinde de kullanabilirsin: <br>
  Merhaba, ben <strong>{{ kullaniciAdi }}</strong> ve <strong>{{ yas }}</strong> yaşındayım.
</p>

<router-outlet></router-outlet>
```

### Sonuç

Uygulamanı `ng serve` ile çalıştırdığında, tarayıcıda `kullaniciAdi`, `mesaj` ve `yas` değişkenlerine atadığın değerlerin ekranda yazılı olduğunu göreceksin.

**Özetle:**

1. **Tanımla:** Değişkeni `.ts` dosyasındaki `class` içinde oluştur.
2. **Göster:** Değişkenin adını `.html` dosyasında `{{ degiskenAdi }}` şeklinde yaz.

### Event Binding *~~(Öğrenildi)~~*

 **Event Binding** , kullanıcı etkileşimlerini (tıklama, yazı yazma, fare gezdirme vb.) yakalayıp bunlara karşılık bir metot çalıştırmamızı sağlar. Angular'da bu işlem oldukça sezgiseldir.

İsteğine uygun olarak, `AppComponent` içinde hem butona tıklama (`click`) hem de input alanına yazı yazma (`input`) olaylarını yöneteceğimiz basit bir uygulama hazırladım. Aşağıda hem açıklamaları hem de kodları bulabilirsin

app.ts

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // HTML'de göstereceğimiz ve değiştireceğimiz değişken
  userName: string = 'Misafir';

  /**
   * Bu metot, butona tıklandığında çalışacak.
   * 'kullaniciAdi' değişkeninin değerini sabit bir metinle değiştirir.
   */
  changeNameWithButton(): void {
    this.userName = 'Butona Tıklandı!';
    console.log('Butona tıklandı ve isim değiştirildi.');
  }

  /**
   * Bu metot, input alanına her yazı yazıldığında çalışacak.
   * Gelen event parametresinden input'un anlık değerini alıp
   * 'kullaniciAdi' değişkenini günceller.
   * @param event - HTML'den gelen $event nesnesi.
   */
  changeNameDynamically(event: any): void {
    // event.target.value, input elementinin o anki değerini verir.
    this.userName = event.target.value;
  }
}

```

app.html

```csharp
<div class="container">
  <!-- Değişkenin anlık değerini burada gösteriyoruz -->
  <!-- Bunun için {{}} arasına yazmamız gerekecek -->
  <!-- Bu yapı, ilgili component'in ts dosyasındaki değişkene ulaşmamıza yarar sağlar -->
  <h1>Merhaba, {{ userName }}</h1>

  <hr>

  <!-- 1. Click Event Binding -->
  <div class="card">
    <h2>Click Event Örneği</h2>
    <p>Butona tıklandığında isim sabit bir metinle değişecek.</p>
    <button (click)="changeNameWithButton()">İsmi Değiştir</button>
  </div>

  <!-- 2. Input Event Binding -->
  <div class="card">
    <h2>Input Event Örneği</h2>
    <p>Aşağıdaki alana yazdığınız metin, yukarıdaki başlığı anında güncelleyecektir.</p>
    <!--
      (input) olayı her tuşa basıldığında tetiklenir.
      $event, o anki olay bilgilerini metoda gönderir.
    -->
    <input type="text" (input)="changeNameDynamically($event)" placeholder="Buraya yazın...">
  </div>

</div>

<router-outlet></router-outlet>

```

### Property Binding *~~(Öğrenildi)~~*

 **Property Binding** , component'in veri (property) alanından HTML elementinin bir özelliğine (property) doğru tek yönlü veri akışı sağlar. Bu sayede component'teki bir değişkenin değeriyle bir HTML elementinin `src`, `href`, `style`, `disabled` gibi özelliklerini dinamik olarak kontrol edebiliriz.

Property Binding için iki temel sözdizimi (syntax) vardır, ancak bir tanesi çok daha yaygın ve güvenilirdir.

### 1. Köşeli Parantez `[ ]` (Önerilen Yöntem) *~~(Öğrenildi)~~*

Bu, property binding için standart ve en doğru yöntemdir. Bir HTML elementinin özelliğini köşeli parantez içine alarak, bu özelliğin değerinin TypeScript tarafındaki bir değişkenden geleceğini belirtiriz.

**Genel Yazım:**

```
<etiket [özellik]="degisken">...</etiket>

```

* **`[özellik]`** : Değiştirmek istediğimiz HTML özelliğidir. Örneğin `[disabled]`, `[src]` veya `[style.color]`.
* **`"degisken"`** : TypeScript sınıfı içinde tanımlanmış olan değişkenin adıdır.

**Örnek:**

```
<!-- 'metinRengi' değişkeninin değeri ne ise, p etiketinin rengi o olur. -->
<p [style.color]="metinRengi">Dinamik Renkli Metin</p>

<!-- 'butonPasifMi' değişkeni true ise, buton pasif olur. -->
<button [disabled]="butonPasifMi">Tıkla</button>

```

### 2. Interpolation *~~(Öğrenildi)~~* `{{ }} `

Interpolation (çift süslü parantez) aslında metin içeriğini dinamik olarak basmak içindir, ancak **sadece string (metin) tipindeki özellikler için** property binding amacıyla da kullanılabilir. Değişkenin değerini bir string'e çevirir ve özelliğe atar.

**Örnek:**

```
<!-- 'resimAdresi' bir string olduğu için bu kullanım çalışır. -->
<img src="{{ resimAdresi }}">

```

### En Önemli Fark: *~~(Öğrenildi)~~* `[ ]` vs `{{ }}`

Köşeli parantez `[ ]` her türden veri (string, number,  **boolean** ) ile çalışır. Interpolation `{{ }}` ise değeri  **her zaman string'e çevirir** .

Bu fark en iyi `disabled` özelliğinde görülür:

* `[disabled]="false"`: `false` (boolean) değeri butonu **aktif** yapar. (Doğru kullanım)
* `disabled="{{false}}"`: `false` değeri `"false"` (string) metnine dönüşür. String olarak `"false"` boş olmadığı için "doğru" kabul edilir ve butonu **pasif** yapar. (Yanlış kullanım)

Bu yüzden, metin içeriği dışındaki tüm property binding işlemleri için her zaman **köşeli parantez `[ ]` kullanmak** en güvenli yoldur.

app.ts

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // HTML'deki <p> etiketinin rengini kontrol edecek değişken.
  // Değerini 'red', 'green', '#3498db' gibi değiştirebilirsiniz.
  textColor: string = 'red';

  // Butonun aktif/pasif durumunu kontrol edecek boolean değişken.
  butonHandle: boolean = false;

  /**
   * Bu metot, butona tıklandığında renk ve buton durumunu değiştirir.
   */
  changeFeature(): void {
    // Rengi kırmızı ise mavi yap, değilse kırmızı yap.
    this.textColor= this.textColor=== 'red' ? 'blue' : 'red';

    // Butonun pasiflik durumunu tersine çevir (true ise false, false ise true).
    this.butonHandle= !this.butonHandle;
  }
}
```

app.html

```csharp
<div class="container">
  <h1>Property Binding Örneği</h1>
  <hr>

  <!--
    [style.color] özelliği, TypeScript'teki 'textColor' değişkenine bağlandı.
    'metinRengi' değişkeninin değeri değiştikçe, bu paragrafın rengi de anında değişir.
  -->
  <p [style.color]="textColor">
    Bu metnin rengi dinamik olarak değişiyor. Şu anki renk: {{ textColor}}
  </p>

  <!--
    [disabled] özelliği, 'butonHandle' değişkenine bağlandı.
    Bu değişkenin değeri değiştikçe, aşağıdaki buton aktif/pasif olur.
  -->
  <button [disabled]="butonHandle">
    Bu Buton Dinamik Olarak Aktif/Pasif Olur
  </button>

  <hr>

  <!--
    Bu buton, TypeScript'teki 'changeFeature()' metodunu çalıştırır.
    Bu metot da yukarıdaki değişkenlerin değerlerini değiştirir.
  -->
  <button (click)="changeFeature()">
    Rengi ve Buton Durumunu Değiştir
  </button>

</div>

<router-outlet></router-outlet>

```

### Event & Property Binding ile ilgili Önemli Noktalar. *~~(Öğrenildi)~~*

Angular'daki veri bağlama mantığını anlamak için bu üç temel sembolün veri akışının yönünü nasıl belirlediğini bilmek yeterlidir.  **Köşeli parantez `[ ]` (Property Binding)** , veriyi component sınıfından (TypeScript) HTML elementinin bir özelliğine doğru tek yönlü olarak **içeri** akıtır; bu sayede bir elementin `disabled` veya `style` gibi özelliklerini dinamik olarak kontrol edersiniz.

**Normal parantez `( )` (Event Binding)** ise tam tersi yönde çalışarak, kullanıcı etkileşimini (event) HTML elementinden component sınıfına doğru **dışarı** akıtır; böylece bir `(click)` veya `(input)` olayını yakalayıp bir metot çalıştırabilirsiniz.

 **Çift süslü parantez `{{ }}` (Interpolation)** , en basit veri gösterme yöntemidir ve component'teki bir değişkenin değerini doğrudan HTML'in metin içeriğine yazdırmak için kullanılır.

Kısacası, `[]` ile veri elemente girer, `()` ile olay elementten çıkar ve `{{ }}` ile veri ekranda görünür.

### NgClass *~~(Öğrenildi)~~*

`[ngClass]`, bir HTML elementine, belirli koşullara bağlı olarak **dinamik bir şekilde CSS sınıfları ekleyip kaldırmanızı** sağlayan çok kullanışlı bir Angular direktifidir.

### `[ngClass]` Nasıl Çalışır? *~~(Öğrenildi)~~*

En yaygın ve basit kullanımı, bir obje (object) ile çalışmaktır. Bu objenin anahtarları (keys) CSS sınıfının adını, değerleri (values) ise o sınıfın eklenip eklenmeyeceğini belirleyen `true` veya `false` bir koşulu temsil eder.

 **Sözdizimi:** `[ngClass]="{ 'css-sinif-adi': kosul }"`

* Eğer `kosul` **true** ise, `css-sinif-adi` elemente eklenir.
* Eğer `kosul` **false** ise, `css-sinif-adi` elementten kaldırılır (veya hiç eklenmez).

Aşağıda bu mantığı gösteren çok basit bir örnek hazırladım.

TypeScript Kodu (`app.component.ts`)

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common'; // NgClass'ı import etmeyi unutmayın!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass], // NgClass'ı imports dizisine ekleyin
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Bu değişkenler, CSS sınıflarının uygulanıp uygulanmayacağını kontrol eder.
  isImportant: boolean = false;
  hasError: boolean = false;

  /**
   * Bu metot, butona her tıklandığında boolean değişkenlerin
   * değerlerini tersine çevirir (true ise false, false ise true).
   */
  toggleStyles(): void {
    this.isImportant = !this.isImportant;
    this.hasError = !this.hasError;
  }
}
```

HTML Kodu (`app.component.html`)

```csharp
<div class="container">
  <h1>[ngClass] Örneği</h1>
  <hr>

  <!--
    [ngClass] direktifi burada kullanılıyor.
    - 'isImportant' true ise, 'important-text' sınıfı eklenecek.
    - 'hasError' true ise, 'error-text' sınıfı eklenecek.
    İkisi de true ise, iki sınıf birden eklenecek.
  -->
  <p [ngClass]="{ 'important-text': isImportant, 'error-text': hasError }">
    Bu metnin stilleri dinamik olarak değişecek.
  </p>

  <hr>

  <!-- Bu buton, TypeScript'teki toggleStyles() metodunu tetikler -->
  <button (click)="toggleStyles()">Stilleri Değiştir</button>

  <!-- Değişkenlerin anlık durumunu görelim -->
  <p>
    'important-text' sınıfı aktif mi? <strong>{{ isImportant }}</strong> <br>
    'error-text' sınıfı aktif mi? <strong>{{ hasError }}</strong>
  </p>
</div>

<router-outlet></router-outlet>
```

CSS Kodu (`app.component.css`)

```csharp
/* [ngClass] ile eklenecek olan sınıflar */

.important-text {
  font-weight: bold;
  font-size: 20px;
}

.error-text {
  color: red;
  text-decoration: underline;
  background-color: #ffe0e0;
  padding: 5px;
  border-radius: 4px;
}

```

### NgStlye *~~(Öğrenildi)~~*

Elbette, `[ngStyle]` direktifini de aynı şekilde basitçe açıklayalım.

`[ngStyle]`, bir HTML elementine, component'teki değişkenlere bağlı olarak **dinamik bir şekilde inline (satır içi) CSS stilleri** uygulamanızı sağlar.

`[ngClass]`'tan temel farkı, `[ngClass]`'in önceden tanımlanmış CSS *sınıflarını* ekleyip çıkarması, `[ngStyle]`'ın ise doğrudan elementin `style` özelliğine `color`, `font-size`, `background-color` gibi spesifik CSS *kurallarını* yazmasıdır.

### `[ngStyle]` Nasıl Çalışır? (*~~Öğrenildi)~~*

Tıpkı `[ngClass]` gibi, en yaygın kullanımı bir obje (object) iledir. Bu objenin anahtarları (keys) CSS stil özelliğinin adını (camelCase veya 'kebab-case' formatında), değerleri (values) ise o stilin alacağı değeri (genellikle bir değişkenden gelen) temsil eder.

 **Sözdizimi:** `[ngStyle]="{ 'css-ozellik-adi': degisken }"`

Aşağıda bu mantığı gösteren basit bir örnek hazırladım.

app.ts

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common'; // NgStyle'ı import etmeyi unutmayın!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle], // NgStyle'ı imports dizisine ekleyin
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Bu değişkenler, paragrafın stil özelliklerini kontrol edecek.
  textColor: string = 'blue';
  textSize: number = 16;
  backgroundColor: string = '#e0e0e0';

  /**
   * Bu metot, butona tıklandığında stil değişkenlerinin
   * değerlerini rastgele değerlerle günceller.
   */
  changesStyles(): void {
    // Rastgele bir renk seç
    const colors = ['red', 'green', 'purple', 'orange', 'black'];
    this.backgroundColor = colors [Math.floor(Math.random() * colors .length)];

    // Yazı boyutunu 12 ile 30 arasında rastgele bir değere ayarla
    this.textSize = Math.floor(Math.random() * 18) + 12;
  }
}
```

app.html

```csharp
<div class="container">
  <h1>[ngStyle] Örneği</h1>
  <hr>

  <!--
    [ngStyle] direktifi burada kullanılıyor.
    - 'color' özelliği, 'textColor' değişkeninden değer alacak.
    - 'font-size' özelliği, 'textSize' değişkeninden değer alacak.
      Not: Birim belirtmek için '.px' gibi eklemeler yapabilirsiniz.
    - 'backgroundColor' özelliği, 'backgroundColor' değişkeninden değer alacak.
  -->
  <p [ngStyle]="{
    'color': textColor,
    'font-size.px': textSize,
    'background-color': backgroundColor,
    'padding.px': 10,
    'border-radius.px': 5
  }">
    Bu metnin stilleri (renk, yazı boyutu vb.) dinamik olarak değişiyor.
  </p>

  <hr>

  <!-- Bu buton, TypeScript'teki changesStyles() metodunu tetikler -->
  <button (click)="changesStyles()">Stilleri Rastgele Değiştir</button>

  <!-- Değişkenlerin anlık durumunu görelim -->
  <p>
    Anlık Renk: <strong>{{ textColor }}</strong> <br>
    Anlık Yazı Boyutu: <strong>{{ textSize }}px</strong>
  </p>
</div>

<router-outlet></router-outlet>

```

### Two Data Binding (NgModel, FormModule) *~~(Öğrenildi)~~*

 **Two-Way Data Binding (İki Yönlü Veri Bağlama)** , Angular'ın en sihirli ve verimli özelliklerinden biridir ve tam da tahmin ettiğin gibi `FormsModule` ve `[(ngModel)]` ile gerçekleştirilir.

### Two-Way Data Binding Nedir? *~~(Öğrenildi)~~*

 **İki Yönlü Veri Bağlama** , component sınıfındaki bir değişken (Model) ile HTML'deki bir form elemanı (View) arasında **sürekli ve otomatik bir senkronizasyon** kurar.

Bu ne anlama gelir?

1. **Model'den View'e:** TypeScript'teki değişkenin değeri değiştiğinde, bu değişiklik anında input alanına yansır.
2. **View'den Model'e:** Kullanıcı input alanına bir şey yazdığında, bu yeni değer anında TypeScript'teki değişkene atanır.

Kısacası, veri iki yönde de serbestçe akar.

### "Kutudaki Muz" `[( )]` Sözdizimi *~~(Öğrenildi)~~*

`[(ngModel)]` sözdizimi, Property Binding `[ ]` ve Event Binding `( )`'in bir birleşimidir. Bu yüzden Angular topluluğunda buna "Banana in a Box" (Kutudaki Muz) denir.

* [ ] **`[ ]` (Kutu):** Veriyi component'ten input'a **içeri** taşır (Property Binding).

* **`( )` (Muz):** Olayı (kullanıcının yazdığı değeri) input'tan component'e **dışarı** taşır (Event Binding).

Yani `[(ngModel)]` aslında şu iki işlemin kısa yoludur:
`[ngModel]="degisken"` ve `(ngModelChange)="degisken = $event"`

### Adım 1: `FormsModule`'ü Projeye Dahil Etmek *(Öğrenildi)*

`ngModel` direktifini kullanabilmek için, `AppComponent`'in bulunduğu modüle (standalone component'lerde doğrudan component'in kendisine) `FormsModule`'ü import etmemiz gerekir.

app.ts

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. ADIM: FormsModule'ü @angular/forms'dan import edin.
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. ADIM: FormsModule'ü component'in imports dizisine ekleyin.
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // 3. ADIM: HTML ile senkronize olacak değişkeni tanımlayın.
  kullaniciMesaji: string = 'Buraya yazmaya başlayın...';

}
```

app.html

```csharp
<div class="container">
  <h1>Two-Way Data Binding Örneği</h1>
  <hr>

  <!--
    Bu input alanı, 'kullaniciMesaji' değişkenine iki yönlü olarak bağlandı.
    - Input'a yazdığınız her karakter, anında 'kullaniciMesaji' değişkenini günceller.
    - 'kullaniciMesaji' değişkeni başka bir yerden değişirse, bu input'un değeri de anında güncellenir.
  -->
  <input type="text" [(ngModel)]="kullaniciMesaji">

  <hr>

  <!--
    Senkronizasyonun çalıştığını kanıtlamak için,
    değişkenin anlık değerini burada gösterelim.
  -->
  <p>
    <strong>Değişkenin Anlık Değeri:</strong> {{ kullaniciMesaji }}
  </p>

</div>

<router-outlet></router-outlet>

```

### Html Select Element ile, NgModel Kullanımı *~~(Öğrenildi)~~*

`[(ngModel)]`'in gücü sadece metin kutularıyla sınırlı değil, `<select>` (açılır liste) elementleriyle de mükemmel bir şekilde çalışır. Bu kullanım, kullanıcının bir listeden yaptığı seçimi anında component'teki bir değişkene bağlamak için çok yaygındır.

`[(ngModel)]` ile `<select>` Kullanımı

Mantık, metin kutusuyla neredeyse tamamen aynıdır. `[(ngModel)]` direktifini `<select>` etiketine ekleriz ve onu, seçilen `<option>`'ın değerini tutacak olan bir component değişkenine bağlarız.

Kullanıcı listeden yeni bir seçenek belirlediğinde:

1. Seçilen `<option>`'ın `value` özelliği okunur.
2. Bu değer, `[(ngModel)]`'e bağlı olan TypeScript değişkenine anında atanır.

Bu işlemi dinamik bir liste ile (örneğin bir API'den gelen verilerle) yapmak için genellikle `*ngFor` direktifi ile birlikte kullanılır. Her bir `<option>`'ın `value` özelliğini `[value]` property binding'i ile dinamik olarak ayarlarız.

app.ts

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// FormsModule'ü import etmeyi unutmuyoruz.
import { FormsModule } from '@angular/forms';
// *ngFor direktifini kullanabilmek için NgFor'u import ediyoruz.
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // Gerekli modülleri imports dizisine ekliyoruz.
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Select listesini dolduracak olan veri dizisi.
  // Genellikle bu veri bir API'den gelir.
  sehirler = [
    { kod: '34', ad: 'İstanbul' },
    { kod: '06', ad: 'Ankara' },
    { kod: '35', ad: 'İzmir' },
    { kod: '16', ad: 'Bursa' },
    { kod: '07', ad: 'Antalya' }
  ];

  // Kullanıcının seçtiği şehrin plaka kodunu tutacak olan değişken.
  // Başlangıç değeri olarak '35' (İzmir) atayalım.
  secilenSehirKodu: string = '35';

}
```

Burada `<select>` elementini oluşturup, `*ngFor` ile şehir listesini seçenek olarak basıyor ve `[(ngModel)]` ile kullanıcının seçimini `secilenSehirKodu` değişkenine bağlıyoruz.

app.html

```csharp
<div class="container">
  <h1>Two-Way Data Binding ile <select> Örneği</h1>
  <hr>

  <label for="sehir-secimi">Lütfen bir şehir seçin:</label>

  <!--
    1. [(ngModel)] ile 'secilenSehirKodu' değişkenine bağladık.
    2. 'sehir-secimi' id'si ve name özelliği form elemanları için iyi bir pratiktir.
  -->
  <select id="sehir-secimi" name="sehir" [(ngModel)]="secilenSehirKodu">
    <!--
      3. *ngFor ile 'sehirler' dizisindeki her bir eleman için bir <option> oluşturduk.
      4. [value] ile her option'ın değerini şehrin 'kod' özelliğine bağladık.
    -->
    <option *ngFor="let sehir of sehirler" [value]="sehir.kod">
      {{ sehir.ad }}
    </option>
  </select>

  <hr>

  <!-- Seçimin anında değişkene yansıdığını burada görebiliriz. -->
  <div *ngIf="secilenSehirKodu" class="sonuc">
    <p>
      <strong>Seçilen Şehrin Plaka Kodu:</strong> {{ secilenSehirKodu }}
    </p>
  </div>

</div>

<router-outlet></router-outlet>

```

## Exaples Projects

### Angular | Pixi & Tic & Tac & Toe  Game *~~(Sonrasında deneysel olarak geliştirilecek)~~*

## For & if *~~(Öğrenildi)~~*

### Döngüler *~~(Öğrenildi)~~*

ngular v17 ile birlikte, `*ngFor`, `*ngIf` gibi yapısal direktiflerin yerini alan, daha modern, daha performanslı ve daha okunabilir **yerleşik bir kontrol akışı (built-in control flow)** tanıtıldı. Angular v19'da da bu yeni sözdizimi şiddetle tavsiye ediliyor.

Eski `*ngFor` "deprecated" (kullanımdan kaldırılmış) olmasa da, yeni projelerde `@for` bloğunu kullanmak en iyi pratiktir.

Angular v17 ile gelen yeni `@for` bloğu, döngüleri doğrudan HTML şablonu içinde, daha sezgisel bir sözdizimi ile oluşturmanızı sağlar.

### Neden Yeni Bir Sözdizimi? *~~(Öğrenildi)~~*

1. **Daha İyi Performans:** Yeni `@for` bloğu, değişiklikleri çok daha verimli bir şekilde izleyen yeni bir algoritma kullanır.
2. **Daha Okunabilir Kod:** Sözdizimi, JavaScript veya diğer programlama dillerindeki `for` döngülerine çok benzediği için daha kolay anlaşılır.
3. **`CommonModule`'e Gerek Yok:** En büyük kolaylıklardan biri! Artık `ngFor`'u kullanmak için component'in `imports` dizisine `CommonModule` veya `NgFor` eklemenize gerek yok. Bu, component'leri daha temiz ve bağımsız hale getirir.

### Yeni Sözdizimi *~~(Öğrenildi)~~*

```
@for (item of items; track item.id) {
  <!-- Her bir 'item' için tekrarlanacak HTML -->
  <p>{{ item.name }}</p>
}

```

* **`@for (item of items; ...)`** : Döngünün başlangıcını belirtir.
* **`track item.id` (Zorunlu!)** : Bu, yeni sözdiziminin en önemli ve zorunlu kısmıdır. Angular'a, listedeki her bir elemanı nasıl benzersiz bir şekilde tanıyacağını söyler. Bu sayede liste değiştiğinde, Angular tüm listeyi yeniden çizmek yerine sadece değişen elemanları günceller. Bu, performansı ciddi şekilde artırır. Genellikle elemanın `id`'si kullanılır.
* **`{ ... }`** : Tekrarlanacak olan HTML bloğu bu süslü parantezler içine yazılır.

### `@empty` Bloğu *~~(Öğrenildi)~~*

Yeni sözdizimi, listenin boş olması durumunda ne gösterileceğini belirten harika bir `@empty` bloğu da sunar:

```
@for (item of items; track item.id) {
  <p>{{ item.name }}</p>
} @empty {
  <!-- 'items' dizisi boş ise bu HTML gösterilir -->
  <p>Gösterilecek hiç öğe bulunamadı.</p>
}

```

### Yardımcı Değişkenler (`$index`, `$first` vb.)* ~~(Öğrenildi)~~*

* `ngFor`'daki `index`, `first`, `last` gibi yardımcı değişkenler artık **`$` önekiyle** kullanılır: `$index`, `$first`, `$last`, `$even`, `$odd`, `$count`.

app.ts

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // DİKKAT: Artık NgFor, NgClass gibi modüllere ihtiyacımız yok!
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // HTML'de @for ile listeleyeceğimiz kullanıcı dizisi.
  kullanicilar = [
    { id: 1, ad: 'Ahmet Yılmaz', sehir: 'İstanbul' },
    { id: 2, ad: 'Ayşe Kaya', sehir: 'Ankara' },
    { id: 3, ad: 'Mehmet Demir', sehir: 'İzmir' },
    { id: 4, ad: 'Fatma Çelik', sehir: 'Bursa' },
    { id: 5, ad: 'Ali Vural', sehir: 'Antalya' }
  ];

  // @empty bloğunu test etmek için bu metodu kullanabiliriz.
  listeyiBosalt(): void {
    this.kullanicilar = [];
  }
}
```

app.html

Yeni `@for`, `@empty` bloklarını ve `$` önekli yardımcı değişkenleri burada kullanıyoruz.

```csharp
<div class="container">
  <h1>Yeni @for Döngü Bloğu Örneği (v17+)</h1>
  <hr>

  <table>
    <thead>
      <tr>
        <th>Sıra No</th>
        <th>ID</th>
        <th>Ad Soyad</th>
        <th>Şehir</th>
      </tr>
    </thead>
    <tbody>
      <!--
        1. @for bloğu ile 'kullanicilar' dizisini dönüyoruz.
        2. track kullanici.id ile her elemanı benzersiz ID'si ile izliyoruz (ZORUNLU).
        3. Yardımcı değişken $index'i kullanıyoruz.
      -->
      @for (kullanici of kullanicilar; track kullanici.id; let i = $index) {
        <tr [class.odd-row]="$odd"> <!-- $odd ile tekil satırlara stil veriyoruz -->
          <td>{{ i + 1 }}</td>
          <td>{{ kullanici.id }}</td>
          <td>{{ kullanici.ad }}</td>
          <td>{{ kullanici.sehir }}</td>
        </tr>
      } @empty {
        <!--
          @empty bloğu, 'kullanicilar' dizisi boş olduğunda çalışır.
          colspan="4" ile bu hücrenin 4 sütunluk yer kaplamasını sağlıyoruz.
        -->
        <tr>
          <td colspan="4" class="empty-message">Gösterilecek kullanıcı bulunamadı.</td>
        </tr>
      }
    </tbody>
  </table>

  <button (click)="listeyiBosalt()">Listeyi Boşalt (@empty bloğunu test et)</button>

</div>

<router-outlet></router-outlet>
```

app.css

```csharp
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

thead th {
  background-color: #f2f2f2;
  font-weight: bold;
}

/* Tekil satırlara uygulanacak stil */
.odd-row {
  background-color: #f9f9f9;
}

.empty-message {
  text-align: center;
  color: #888;
  font-style: italic;
}

button {
  cursor: pointer;
}
```

### Şart - Koşul *~~(Öğrenildi)~~*

Angular v17'den itibaren, DOM'da bir HTML bloğunu şartlı olarak göstermek veya gizlemek için `*ngIf` ve `[ngSwitch]` direktifleri yerine `@if` ve `@switch` bloklarını kullanıyoruz.

### **`@if`, `@else if`, `@else` Bloğu *~~(Öğrenildi)~~***

Bu yapı, belirli bir koşulun `true` (doğru) olup olmadığını kontrol eder.

**Neden Daha İyi?**

* **Daha Okunabilir:** Kod, standart programlama dillerindeki `if/else` yapısına çok benzer.
* **`else` Kolaylığı:** `else` ve `else if` bloklarını tanımlamak artık çok daha basit ve doğrudan.
* **`CommonModule` Gerekmez:** `ngIf` için gereken `CommonModule`'ü import etme zorunluluğu ortadan kalktı.

**Sözdizimi:**

```
@if (kosul1) {
  <!-- kosul1 doğru ise bu HTML gösterilir -->
  <p>İlk koşul sağlandı.</p>
} @else if (kosul2) {
  <!-- kosul1 yanlış, ama kosul2 doğru ise bu HTML gösterilir -->
  <p>İkinci koşul sağlandı.</p>
} @else {
  <!-- Yukarıdaki hiçbir koşul doğru değilse bu HTML gösterilir -->
  <p>Hiçbir koşul sağlanmadı.</p>
}

```

### **`@switch`, `@case`, `@default` Bloğu *~~(Öğrenildi)~~***

Bu yapı, tek bir değişkenin değerini birden fazla olası duruma karşı kontrol etmek için kullanılır. `if/else if` zincirine göre daha temiz ve daha performanslı bir alternatiftir.

**Sözdizimi:**

```
@switch (degisken) {
  @case (deger1) {
    <!-- degisken'in değeri deger1'e eşitse bu HTML gösterilir -->
    <p>Durum 1 aktif.</p>
  }
  @case (deger2) {
    <!-- degisken'in değeri deger2'ye eşitse bu HTML gösterilir -->
    <p>Durum 2 aktif.</p>
  }
  @default {
    <!-- degisken'in değeri yukarıdaki hiçbir case ile eşleşmiyorsa bu HTML gösterilir -->
    <p>Varsayılan durum.</p>
  }
}
```

app.ts

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Kullanıcı tiplerini daha güvenli yönetmek için bir type tanımlayalım.
type KullaniciTipi = 'admin' | 'user' | 'guest';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // @if bloğunu kontrol edecek boolean değişken.
  girisYapildiMi: boolean = false;

  // @switch bloğunu kontrol edecek değişken.
  aktifKullaniciTipi: KullaniciTipi = 'guest';

  /**
   * Giriş durumunu tersine çevirir.
   */
  toggleGiris(): void {
    this.girisYapildiMi = !this.girisYapildiMi;
  }

  /**
   * Kullanıcı tipini değiştirir.
   * @param tip Yeni kullanıcı tipi.
   */
  kullaniciTipiDegistir(tip: KullaniciTipi): void {
    this.aktifKullaniciTipi = tip;
  }
}

```

app.html

```csharp
<div class="container">
  <h1>@if ve @switch Kontrol Akışı Örneği</h1>

  <!-- Kontrol Butonları -->
  <div class="controls">
    <button (click)="toggleGiris()">
      {{ girisYapildiMi ? 'Çıkış Yap' : 'Giriş Yap' }}
    </button>
    <button (click)="kullaniciTipiDegistir('admin')">Admin Yap</button>
    <button (click)="kullaniciTipiDegistir('user')">User Yap</button>
    <button (click)="kullaniciTipiDegistir('guest')">Guest Yap</button>
  </div>
  <hr>

  <!-- @if, @else if, @else Kullanımı -->
  <div class="card">
    <h2>@if Bloğu: Giriş Durumu</h2>
    @if (girisYapildiMi && aktifKullaniciTipi === 'admin') {
      <p class="success">Hoş geldin Admin! Tam yetkiye sahipsin.</p>
    } @else if (girisYapildiMi) {
      <p class="success">Hoş geldin! Başarıyla giriş yaptın.</p>
    } @else {
      <p class="error">Lütfen devam etmek için giriş yapın.</p>
    }
  </div>

  <!-- @switch, @case, @default Kullanımı -->
  <div class="card">
    <h2>@switch Bloğu: Kullanıcı Rolü</h2>
    @switch (aktifKullaniciTipi) {
      @case ('admin') {
        <p><strong>Rol:</strong> Yönetici Paneli Gösteriliyor.</p>
      }
      @case ('user') {
        <p><strong>Rol:</strong> Standart Kullanıcı Arayüzü Gösteriliyor.</p>
      }
      @case ('guest') {
        <p><strong>Rol:</strong> Ziyaretçi. Sınırlı içerik gösteriliyor.</p>
      }
      @default {
        <p><strong>Rol:</strong> Tanımsız rol!</p>
      }
    }
  </div>

</div>

<router-outlet></router-outlet>
```

app.css

```csharp
.container {
  font-family: sans-serif;
}

.controls {
  margin-bottom: 20px;
  display: flex;
  gap: 10px; /* Butonlar arası boşluk */
}

button {
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.success {
  color: green;
  font-weight: bold;
}

.error {
  color: red;
  font-weight: bold;
}

```

## Routing (Şu anda ihtiyaç yok, ama yinede eğitimlere bakıldı)

`Routing yapısı Pixi & Angular (Crash Oyun) uygulamalarında çok ihtiyacımız olan bir konu değidir. Ekstra page’ler, modal şeklinde sayfa üzerinde gösterilmelidir. Ama yinede ihtiyaç duyulur ise → Bölüm : 6 izlenilebilinir.`

## Directive *~~(Öğrenildi)~~*

En basit tanımıyla  **Direktif** , bir HTML elementine **yeni bir davranış veya görünüm kazandıran** bir talimattır. Angular'a, DOM'u nasıl manipüle edeceğini veya değiştireceğini söyleyen sınıflardır.

Angular'da üç ana direktif türü vardır:

1. **Component'ler (Bileşenler):** Aslında bir şablonu (template) olan en özel direktif türüdür. Zaten sürekli kullanıyoruz.
2. **Structural (Yapısal) Direktifler:** DOM'un yapısını değiştirirler; yani HTML elementleri ekler, kaldırır veya yeniden düzenlerler. `@if` ve `@for` en bilinen örnekleridir.
3. **Attribute (Nitelik) Direktifleri:** Bir elementin görünümünü veya davranışını değiştirirler. DOM'a element ekleyip çıkarmazlar. `[ngClass]` ve `[ngStyle]` bu türe örnektir. **Bizim oluşturacağımız özel direktif de bir nitelik direktifi olacaktır.**

### Custom Directive Oluşturma *~~(Öğrenildi)~~*

### Adım 1: Direktifi Oluşturmak *~~(Öğrenildi)~~*

Öncelikle Angular CLI ile direktif dosyamızı oluşturalım. Komut satırına şunu yazın:

```csharp
ng generate directive highlight
```

veya kısaca:

Bash

```csharp
ng g d highlight
```

Bu komut, `highlight.directive.ts` adında bir dosya oluşturur. Şimdi bu dosyayı düzenleyerek sihrimizi yapacağız.

### Adım 2: Direktif Mantığını Yazmak (`highlight.directive.ts`) *~~(Öğrenildi)~~*

Oluşturulan `highlight.directive.ts` dosyasını açıp içeriğini aşağıdaki gibi düzenleyelim. Kodun içindeki yorumlar her bir adımın ne işe yaradığını detaylıca açıklıyor.

```csharp
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // Bu direktifi HTML'de bu seçici ile kullanacağız.
  standalone: true, // Modern Angular'da direktifler varsayılan olarak standalone'dur.
})
export class HighlightDirective {
  // Direktife dışarıdan parametre (renk) alabilmek için @Input kullanıyoruz.
  // 'appHighlight' alias'ı sayesinde direktifi [appHighlight]="'yellow'" şeklinde kullanabiliriz.
  // Eğer bir renk belirtilmezse, varsayılan olarak 'yellow' kullanılacak.
  @Input('appHighlight') highlightColor: string = 'yellow';

  // ElementRef, direktifin uygulandığı HTML elementine doğrudan erişim sağlar.
  constructor(private el: ElementRef) {}

  // @HostListener, direktifin uygulandığı elementin bir olayını dinler.
  // 'mouseenter' olayı (fare üzerine geldiğinde) tetiklendiğinde bu metot çalışır.
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor); // Parametreden gelen veya varsayılan rengi uygula.
  }

  // 'mouseleave' olayı (fare üzerinden çekildiğinde) tetiklendiğinde bu metot çalışır.
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Rengi temizle (eski haline döndür).
  }

  /**
   * Bu özel metot, elementin arka plan rengini değiştirir.
   * @param color Uygulanacak renk veya null (temizlemek için).
   */
  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

```

### Adım 3: Direktifi Kullanmak (`app.component.ts` ve `app.component.html`) *~~(Öğrenildi)~~*

Artık özel direktifimiz hazır! Onu `AppComponent` içinde kullanalım.

### `app.component.ts`

Direktifimiz `standalone` olduğu için, onu kullanacağımız component'in `imports` dizisine eklememiz yeterlidir.

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. ADIM: Oluşturduğumuz özel direktifi import ediyoruz.
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. ADIM: Direktifi component'in imports dizisine ekliyoruz.
  imports: [RouterOutlet, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Direktife dinamik olarak göndermek için bir renk değişkeni.
  favoriRenk: string = 'cyan';
}
```

### `app.component.html`

Şimdi direktifimizi `selector`'ını (`appHighlight`) kullanarak HTML elementlerine uygulayalım.

```csharp
<div class="container">
  <h1>Özel Directive Kullanımı: [appHighlight]</h1>
  <hr>

  <h2>Parametresiz Kullanım (Varsayılan Renk)</h2>
  <!--
    Direktifi sadece selector'ı ile uyguluyoruz.
    Parametre vermediğimiz için varsayılan renk olan 'yellow' kullanılacak.
  -->
  <p appHighlight>
    Fareyi bu paragrafın üzerine getirin (varsayılan sarı renk).
  </p>

  <hr>

  <h2>Parametreli Kullanım (Özel Renk)</h2>
  <!--
    Direktife property binding [appHighlight] ile statik bir renk değeri gönderiyoruz.
  -->
  <p [appHighlight]="'lightgreen'">
    Fareyi bu paragrafın üzerine getirin (açık yeşil renk).
  </p>

  <!--
    Direktife property binding ile component'teki bir değişkenden gelen
    dinamik bir renk değeri gönderiyoruz.
  -->
  <p [appHighlight]="favoriRenk">
    Fareyi bu paragrafın üzerine getirin (değişkenden gelen cyan rengi).
  </p>
</div>

<router-outlet></router-outlet>

```

### Custom Validation Directive *~~(İhtiyaç duyulur ise sonra tekrar edilecek)~~*

Validation Directive için : Bölüm 7 → 2. Dersi İzle

## Service *~~(Öğrenildi)~~*

### Service Nedir ve Neden Bu Kadar Önemlidir? *~~(Öğrenildi)~~*

Angular'da bir  **Service** , belirli bir görevi yerine getiren, yeniden kullanılabilir bir  **sınıftır (class)** . Temel amacı, component'lerin (bileşenlerin) doğrudan sorumlu olmaması gereken iş mantığını, veri işlemlerini veya durum yönetimini component'lerden ayırmaktır.

### Temel Felsefesi: "Singleton" ve "Dependency Injection" *~~(Öğrenildi)~~*

Servislerin sihrini anlamak için iki anahtar kavramı bilmek gerekir:

1. **Dependency Injection (DI - Bağımlılık Enjeksiyonu):** Bu, Angular'ın en temel prensiplerinden biridir. Bir component'in bir servise ihtiyacı olduğunda, o servisi kendi içinde manuel olarak oluşturmaz. Bunun yerine, `constructor`'ı aracılığıyla Angular'dan bu servisi kendisine vermesini  **ister** . Angular, istenen servisi bulur ve component'e otomatik olarak "enjekte eder" (verir). Bu, kodun daha esnek, test edilebilir ve modüler olmasını sağlar.
2. **Singleton (Tekil Örnek) Prensibi:** Varsayılan olarak, bir servis `providedIn: 'root'` şeklinde tanımlandığında, Angular o servisten tüm uygulama yaşam döngüsü boyunca **sadece tek bir tane örnek (instance)** yaratır. Hangi component veya hangi sayfa bu servisi isterse istesin, Angular onlara hep aynı, tekil örneği verir. İşte bu sayede servisler, uygulama genelinde paylaşılan bir "merkezi beyin" veya "ortak veri deposu" görevi görür.

### Zustand ile Karşılaştırması *~~(Öğrenildi)~~*

* **Benzerlik:** Tıpkı Zustand gibi, bir Angular servisini tüm uygulama tarafından erişilebilen merkezi bir "store" (depo) olarak kullanabilirsin. Servis içindeki veri değiştiğinde, bu değişikliği dinleyen (subscribe olan) tüm component'ler anında güncellenir.
* **Farklılık:** Servisler, Zustand'dan daha genel bir kavramdır. Sadece durum yönetimi için değil, aynı zamanda:
  * API istekleri yapmak (`HttpClient` servisi gibi).
  * Tarayıcı depolamasıyla (localStorage) etkileşim kurmak.
  * Karmaşık hesaplamalar yapmak.
  * Farklı component'ler arasında iletişim kurmak gibi birçok farklı görev için kullanılabilirler.

### Otomatik Render (Yeniden Çizim) Nasıl Oluyor? *~~(Öğrenildi)~~*

Kullanıcının sezgisi burada çok doğru. Ancak servis kendi kendine "render" olmaz. Süreç şöyledir:

1. Servis, veriyi **"reaktif"** bir şekilde tutar. Bunun için genellikle **RxJS** kütüphanesinden `Subject` veya `BehaviorSubject` kullanılır.
2. Component'ler, servisteki bu reaktif veri kaynağına  **abone olurlar (subscribe)** .
3. Servis içindeki veri değiştiğinde (örneğin yeni bir veri eklendiğinde), servis bu değişikliği tüm abonelerine  **yayınlar** .
4. Değişiklik bildirimini alan component'ler, Angular'ın değişiklik algılama mekanizması sayesinde kendi görünümlerini  **otomatik olarak güncellerler (yeniden render ederler)** .

Şimdi, bu mantığı pekiştirmek için iki farklı component'in aynı servisi kullanarak iletişim kurduğu ve veri paylaştığı basit bir "Mesajlaşma" uygulaması yapalım.

### Adım 1: Servisi Oluşturmak *~~(Öğrenildi)~~*

Önce CLI ile `message` adında bir servis oluşturalım:

```csharp
ng generate service message
// yada kısaca
ng g s message
```

Bu komut, `message.service.ts` dosyasını oluşturur.

### Adım 2: Servis Mantığını Yazmak (`message.service.ts`) *~~(Öğrenildi)~~*

Bu servis, mesajları tutacak ve yeni mesaj eklendiğinde bunu tüm abonelere bildirecek.

```csharp
import { Injectable } from '@angular/core';
// RxJS, reaktif programlama için kullanılır.
import { BehaviorSubject } from 'rxjs';

@Injectable({
  // providedIn: 'root' sayesinde bu servis tüm uygulamada tekil (singleton) olarak çalışır.
  providedIn: 'root'
})
export class MessageService {
  // 1. Mesaj listesini tutacak olan özel bir BehaviorSubject oluşturuyoruz.
  // BehaviorSubject, içinde her zaman bir başlangıç değeri tutar ve yeni abonelere bu değeri anında gönderir.
  private messagesSource = new BehaviorSubject<string[]>(['Herkese merhaba!']);

  // 2. Component'lerin sadece dinleyebileceği (subscribe olabileceği) bir public Observable oluşturuyoruz.
  // Bu, component'lerin doğrudan .next() ile veriyi değiştirmesini engeller.
  public messages$ = this.messagesSource.asObservable();

  constructor() { }

  /**
   * Bu metot, yeni bir mesajı listeye ekler ve değişikliği tüm abonelere yayınlar.
   * @param message Eklenecek yeni mesaj.
   */
  addMessage(message: string) {
    // 3. Mevcut mesaj listesini alıyoruz.
    const currentMessages = this.messagesSource.getValue();
    // 4. Yeni mesajı ekleyerek listeyi güncelliyoruz.
    const updatedMessages = [...currentMessages, message];
    // 5. .next() ile yeni listeyi tüm abonelere (dinleyicilere) gönderiyoruz.
    this.messagesSource.next(updatedMessages);
  }
}

```

### Adım 3: Servisi Kullanacak Component'leri Oluşturmak *~~(Öğrenildi)~~*

Şimdi bu servisi kullanacak iki ayrı component oluşturalım: biri mesaj eklemek için, diğeri mesajları göstermek için.

```csharp
ng g c message-add
ng g c message-display
```

### Adım 4: Component'leri ve Servisi Birleştirmek *~~(Öğrenildi)~~*

### Mesaj Ekleme Component'i (`message-add.component.ts` ve `.html`)

```csharp
// message-add.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Servisimizi import ediyoruz.
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-add.component.html',
})
export class MessageAddComponent {
  newMessage: string = '';

  // 1. Dependency Injection: Angular'dan MessageService'i bize vermesini istiyoruz.
  constructor(private messageService: MessageService) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      // 2. Servisin public metodunu çağırarak yeni mesajı ekliyoruz.
      this.messageService.addMessage(this.newMessage);
      this.newMessage = ''; // Input'u temizle
    }
  }
}
```html
<!-- message-add.component.html -->
<div>
  <h3>Yeni Mesaj Ekle</h3>
  <input type="text" [(ngModel)]="newMessage" placeholder="Mesajınızı yazın...">
  <button (click)="sendMessage()">Gönder</button>
</div>
```

Mesaj Görüntüleme Component'i (`message-display.component.ts` ve `.html`)

```csharp
// message-display.component.ts
import { Component, OnInit } from '@angular/core';
// Servisimizi import ediyoruz.
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-display',
  standalone: true,
  imports: [],
  templateUrl: './message-display.component.html',
})
export class MessageDisplayComponent implements OnInit {
  // Servisten gelen mesajları tutacak olan dizi.
  messages: string[] = [];

  // 1. Dependency Injection: Angular, bu component'e de AYNI servis örneğini verir.
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    // 2. Component oluşturulduğunda, servisteki mesaj değişikliklerine abone oluyoruz.
    // Gelen her yeni mesaj listesi, bizim local 'messages' dizimizi günceller.
    // Bu sayede arayüz otomatik olarak yeniden çizilir.
    this.messageService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }
}
```html
<!-- message-display.component.html -->
<div>
  <h3>Mesajlar</h3>
  <ul>
    @for (message of messages; track message) {
      <li>{{ message }}</li>
    }
  </ul>
</div>
```

### Adım 5: Ana Component'te Hepsini Bir Araya Getirmek (`app.component.ts` ve `.html`) *~~(Öğrenildi~~*)

Son olarak, bu iki component'i ana `AppComponent`'te gösterelim.

```csharp
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageAddComponent } from './message-add/message-add.component';
import { MessageDisplayComponent } from './message-display/message-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageAddComponent, MessageDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-app';
}
```html
<!-- app.component.html -->
<div class="container">
  <h1>Angular Service Örneği</h1>
  <hr>
  <div class="components-wrapper">
    <app-message-add></app-message-add>
    <app-message-display></app-message-display>
  </div>
</div>
<router-outlet></router-outlet>
```

Bu uygulamayı çalıştırdığınızda, soldaki input'a bir mesaj yazıp "Gönder" dediğinizde, bu mesajın anında sağdaki listede belirdiğini göreceksiniz. Bu, iki tamamen farklı component'in, aynı servis örneği üzerinden nasıl sorunsuzca iletişim kurduğunu ve durum paylaştığını gösteren mükemmel bir kanıttır.

## Pipe *~~(Öğrenildi)~~*

<aside>
👌🏽

Özellik’le Currency’ler için, pipelarını kullanmalısın !

</aside>

**Pipe  Yapısı İçin : Bölüm 6’ı İzle**

Angular'da bir  **Pipe** , veriyi HTML şablonu içinde gösterime sunmadan önce **dönüştürmek ve formatlamak** için kullanılan basit ve güçlü bir mekanizmadır. Temel amacı, component sınıfındaki ham veriyi değiştirmeden, sadece kullanıcıya gösterilen çıktıyı biçimlendirmektir. Pipe'lar, `|` (boru) karakteri ile kullanılır ve bir değişkenin hemen sağına eklenir. Örneğin, bir tarih nesnesini okunabilir bir formata (`DatePipe`), bir sayıyı para birimi olarak (`CurrencyPipe`) veya bir metni tamamen büyük harfe (`UpperCasePipe`) çevirmek gibi işlemler için Angular'ın sunduğu birçok yerleşik pipe bulunmaktadır. Bu yerleşik pipe'ların yanı sıra, projeye özgü, tekrar tekrar kullanılacak özel formatlama ihtiyaçları için `ng generate pipe` komutuyla kendi özel pipe'larımızı da kolayca oluşturabiliriz. Pipe'lar, zincirleme bir şekilde art arda kullanılabilir (`{{ degisken | pipe1 | pipe2 }}`) ve iki nokta üst üste `:` karakteri ile parametre alarak (`{{ degisken | slice:0:10 }}`) daha esnek dönüşümler gerçekleştirebilirler. Bu yapı, component mantığını temiz tutarken, şablon içinde temiz ve okunabilir bir formatlama sağlar.

## Guard *~~(Routing ile ilgili olduğu için sonrasına bırakıldı, ama yinede ders izlendi)~~*

Angular'da bir  **Guard (Koruma)** , routing (yönlendirme) işlemleri sırasında devreye giren ve bir kullanıcının belirli bir sayfaya **erişip erişemeyeceğine** veya o sayfadan **ayrılıp ayrılamayacağına** karar veren bir kontrol mekanizmasıdır. Temel amacı, uygulamanın belirli bölümlerini koruma altına almaktır. Router, bir sayfaya geçiş yapmadan hemen önce ilgili Guard'ı çalıştırır ve ondan bir `true` (izin ver) veya `false` (engelle) yanıtı bekler. Bu sayede, "Kullanıcı giriş yapmış mı?" (Authentication), "Bu sayfayı görmeye yetkisi veya rolü var mı?" (Authorization) ya da "Kullanıcı sayfadan ayrılmadan önce kaydedilmemiş değişiklikler var mı?" gibi kritik soruları yanıtlayarak, istenmeyen veya yetkisiz sayfa geçişlerini kolayca engelleyebilirsiniz. Kısacası Guard'lar, uygulamanızın yollarında duran birer güvenlik görevlisi gibidir.

`Guard Yapıları, Routing konusuyla alakalıdır, Ama yinede ihtiyaç duyulur ise, Eğitim Serisinde Bölüm → 10’da izlenilebilinir.`

## Input / Output* ~~(Öğrenildi)~~*

`@Input` ve `@Output` dekoratörleri, Angular'da component'ler arası iletişimin temelini oluşturur ve bu konuyu anlamak, modüler ve yeniden kullanılabilir uygulamalar yazmak için hayati önem taşır. Bu konsepti, "Parent-Child" (Ebeveyn-Çocuk) component ilişkisi üzerinden detaylı üzerine kuruludur.

`@Input` ve `@Output`: Temel Felsefesinde

Component'ler arası iletişimi bir aile ilişkisine benzetebiliriz:

* **`@Input()` (Veri Akışı: Parent → Child):** Bu, ebeveynin (Parent Component) çocuğuna (Child Component) bir şey  **vermesidir** . Ebeveyn, sahip olduğu bir veriyi (örneğin bir ürün bilgisi, bir kullanıcı adı) çocuğun kullanması için ona aktarır. Veri akışı  **aşağı yönlüdür** .
* **`@Output()` (Veri Akışı: Child → Parent):** Bu, çocuğun ebeveynine bir şey  **söylemesidir** . Çocuk, kendi içinde gerçekleşen bir olayı (örneğin bir butona tıklandı, bir form dolduruldu) bir **"event" (olay)** olarak dışarıya yayınlar. Ebeveyn bu olayı dinler ve olay gerçekleştiğinde bir eylemde bulunur. Veri/olay akışı  **yukarı yönlüdür** .

### `@Input()` Detayları *~~(Öğrenildi)~~*

`@Input()` dekoratörü, bir child component'in property'sini (değişkenini), parent component'ten veri alabilecek şekilde işaretler.

**Sözdizimi:**

```
// Child component içinde
import { Input } from '@angular/core';

export class ChildComponent {
  @Input() veri: any; // 'veri' adındaki bu property artık dışarıdan doldurulabilir.
}

```

Parent component'in HTML'inde bu property'ye veri bağlamak için **property binding `[ ]`** kullanılır:

```
<!-- Parent component'in HTML'inde -->
<app-child [veri]="parenttekiVeri"></app-child>

```

### `@Output()` Detayları *~~(Öğrenildi)~~*

`@Output()` dekoratörü, bir child component'in property'sini, dışarıya olay yayınlayabilen bir **`EventEmitter`** olarak işaretler.

**Sözdizimi:**

```
// Child component içinde
import { Output, EventEmitter } from '@angular/core';

export class ChildComponent {
  @Output() birOlay = new EventEmitter<string>(); // string tipinde veri yayınlayacak bir olay.

  birMetot() {
    // Olayı tetiklemek ve dışarıya veri göndermek için .emit() kullanılır.
    this.birOlay.emit('Bu veri parent\\'a gidecek');
  }
}

```

Parent component'in HTML'inde bu olayı dinlemek için **event binding `( )`** kullanılır:

```
<!-- Parent component'in HTML'inde -->
<app-child (birOlay)="parenttekiMetot($event)"></app-child>

```

`$event`, child'dan `emit` ile gönderilen veriyi temsil eder.

Şimdi bu iki kavramı bir arada kullanarak, bir "Ürün Listesi" uygulaması yapalım.

* **Parent Component (`AppComponent`):** Tüm ürünlerin listesini tutacak ve sepete ekleme işlemini yönetecek.
* **Child Component (`ProductCardComponent`):** Sadece tek bir ürünün bilgisini alıp ekranda bir kart olarak gösterecek ve "Sepete Ekle" butonunu içerecek.

### Adım 1: Component'leri Oluşturmak *~~(Öğrenildi)~~*

Önce child component'imizi oluşturalım:

```csharp
ng g c product-card
```

### Adım 2: Child Component'i Hazırlamak (`product-card.component.ts` ve `.html`) *~~(Öğrenildi)~~*

Bu component, `@Input` ile ürün verisini alacak ve `@Output` ile "sepete ekle" olayını yayınlayacak.

```csharp
// product-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Ürün verisinin yapısını tanımlayan bir interface (isteğe bağlı ama iyi bir pratik).
export interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  // 1. @Input: Parent'tan gelecek olan ürün verisini bu property'de tutacağız.
  // 'productData' adını verdik. '!' işareti, bu verinin dışarıdan mutlaka geleceğini belirtir.
  @Input() productData!: Product;

  // 2. @Output: Parent'a "sepete ekle" olayını bildirecek olan EventEmitter.
  // Bu olay, sepete eklenecek ürünün ID'sini (number) taşıyacak.
  @Output() addToCart = new EventEmitter<number>();

  /**
   * Bu metot, "Sepete Ekle" butonuna tıklandığında çalışır.
   */
  onAddToCartClick() {
    console.log(this.productData.name, 'için sepete ekle butonu tıklandı.');
    // 3. Olayı .emit() ile yayınlıyoruz ve ürünün ID'sini parent'a gönderiyoruz.
    this.addToCart.emit(this.productData.id);
  }
}
```html
<!-- product-card.component.html -->
<div class="product-card">
  <!-- Input ile gelen ürün verisini burada gösteriyoruz -->
  <h3>{{ productData.name }}</h3>
  <p>Fiyat: {{ productData.price }} TL</p>
  <!-- Bu butona tıklandığında onAddToCartClick() metodu çalışacak -->
  <button (click)="onAddToCartClick()">Sepete Ekle</button>
</div>
```

### Adım 3: Parent Component'i Hazırlamak (`app.component.ts` ve `.html`) *~~(Öğrenildi)~~*

Bu component, ürün listesini tutacak, `*ngFor` (veya `@for`) ile her bir ürün için `ProductCardComponent`'i oluşturacak ve child'dan gelen olayları dinleyecek.

```csharp
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Child component'i ve interface'i import ediyoruz.
import { ProductCardComponent, Product } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Parent component'in sahip olduğu veri listesi.
  products: Product[] = [
    { id: 1, name: 'Akıllı Telefon', price: 15000 },
    { id: 2, name: 'Dizüstü Bilgisayar', price: 25000 },
    { id: 3, name: 'Kablosuz Kulaklık', price: 2500 }
  ];

  shoppingCart: number[] = [];

  /**
   * Bu metot, child component'ten gelen 'addToCart' olayını yakalar.
   * @param productId Child'dan $event ile gelen ürün ID'si.
   */
  onProductAddedToCart(productId: number) {
    console.log('Parent component,', productId, 'ID\\'li ürünün sepete eklendiğini öğrendi.');
    this.shoppingCart.push(productId);
  }
}
```html
<!-- app.component.html -->
<div class="container">
  <h1>Ürün Listesi</h1>
  <p>Sepetinizdeki Ürün ID'leri: {{ shoppingCart.join(', ') }}</p>
  <hr>
  <div class="product-list">
    <!--
      @for ile products dizisini dönüyoruz.
    -->
    @for (product of products; track product.id) {
      <!--
        Her bir ürün için bir child component (app-product-card) oluşturuyoruz.

        1. [productData]="product": Parent'taki 'product' verisini, child'daki 'productData'
           isimli @Input property'sine bağlıyoruz. (Parent -> Child)

        2. (addToCart)="onProductAddedToCart($event)": Child'daki 'addToCart' isimli @Output
           olayını dinliyoruz. Olay tetiklendiğinde, parent'taki 'onProductAddedToCart'
           metodunu çalıştırıyoruz. $event, emit ile gönderilen ürün ID'sini taşır. (Child -> Parent)
      -->
      <app-product-card
        [productData]="product"
        (addToCart)="onProductAddedToCart($event)">
      </app-product-card>
    }
  </div>
</div>
<router-outlet></router-outlet>
```

Bu uygulamayı çalıştırdığınızda, her bir ürün kartındaki "Sepete Ekle" butonuna tıkladığınızda, konsolda ve üstteki sepet listesinde ilgili ürün ID'sinin eklendiğini göreceksiniz. Bu, `@Input` ve `@Output` kullanarak component'ler arasında nasıl temiz ve etkili bir iletişim kurulabileceğinin mükemmel bir örneğidir.

## State Managment (Service Kulanımı) *~~(Öğrenildi)~~*

Angular'da en sık karşılaşılan ve en önemli senaryolardan biridir. `@Input` ve `@Output`'un işe yaramadığı, aralarında doğrudan bir hiyerarşi bulunmayan "kardeş" (sibling) veya tamamen alakasız component'ler arasındaki iletişim ihtiyacı, tam olarak servislerin bir **state management (durum yönetimi)** aracı olarak parladığı yerdir.

Senin "iki component birbirini görmez, bir servis ile konuşturmak" benzetmen durumu mükemmel özetliyor. Bu yapıyı, "Mediator Pattern" (Arabulucu Deseni) olarak düşünebilirsin; servis, iki taraf arasında bir arabulucu veya merkezi bir haberleşme kulesi görevi görür.

### Component'ler Arası İletişim: Service ile State Management *~~(Öğrenildi)~~*

Parent-child ilişkisi olmadığında, component'ler arasında veri aktarmanın en temiz ve en ölçeklenebilir yolu, merkezi bir **singleton servis** kullanmaktır. Bu servisin `providedIn: 'root'` ile tanımlanması, tüm uygulama boyunca ondan **sadece tek bir örnek** olmasını garantiler. Bu sayede, hangi component bu servisi enjekte ederse etsin, hepsi bellekteki aynı servis nesnesine erişir ve aynı veriyi paylaşır.

İletişim süreci şu şekilde işler:

1. **Merkezi Veri Kaynağı (Servis):** Servis, paylaşılacak olan veriyi reaktif bir şekilde tutmak için bir **RxJS `BehaviorSubject`** veya `Subject` kullanır. `BehaviorSubject`, içinde her zaman bir başlangıç değeri tutması ve yeni abone olan component'lere bu son değeri anında göndermesi nedeniyle state management için genellikle daha kullanışlıdır.
2. **Veri Gönderen Component (Sender):** Bu component, servisi enjekte eder. Kullanıcı bir eylemde bulunduğunda (örneğin bir butona tıkladığında), servisin public bir metodunu çağırarak yeni veriyi servise gönderir. Servis de bu yeni veriyi kendi `BehaviorSubject`'i üzerinden  **yayınlar (`.next()`)** .
3. **Veri Alan Component (Receiver):** Bu component de aynı servisi enjekte eder. `ngOnInit` yaşam döngüsü metodunda, servisin public olarak sunduğu `Observable`'a  **abone olur (`.subscribe()`)** .
4. **Otomatik Güncelleme:** Sender component'i servisteki veriyi her güncellediğinde, `BehaviorSubject` bu yeni veriyi tüm abonelerine (yani Receiver component'e) anında iletir. Abone olan Receiver component'in `subscribe` bloğu tetiklenir ve kendi içindeki veriyi güncelleyerek arayüzün otomatik olarak yeniden çizilmesini sağlar.

Bu yapı, component'leri birbirinden tamamen bağımsız (decoupled) tutar. Component'ler birbirlerinin varlığından bile haberdar olmak zorunda değildir; tek bildikleri, merkezi bir servis ile nasıl konuşacaklarıdır.

Şimdi, bu senaryoyu canlandıran, birbiriyle doğrudan ilişkisi olmayan iki kardeş component (`SenderComponent` ve `ReceiverComponent`) arasında veri iletişimini sağlayan bir örnek yapalım.

### Adım 1: Merkezi Servisi Oluşturmak *~~(Öğrenildi)~~*

Uygulama genelinde veri taşıyacak olan servisimizi oluşturalım.

```csharp
ng g s data
```

### Adım 2: Servis Mantığını Yazmak (`data.service.ts`)* ~~(Öğrenildi)~~*

Bu servis, bir metin verisini tutacak ve güncelleyecek.

```csharp
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // 1. Paylaşılacak veriyi tutan özel bir BehaviorSubject.
  // Başlangıç değeri olarak 'Başlangıç Verisi' atanıyor.
  private messageSource = new BehaviorSubject<string>('Başlangıç Verisi');

  // 2. Component'lerin abone olacağı public bir Observable.
  public currentMessage = this.messageSource.asObservable();

  constructor() { }

  /**
   * Bu metot, BehaviorSubject'in değerini günceller ve değişikliği yayınlar.
   * @param message Yeni veri.
   */
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

```

### Adım 3: Kardeş Component'leri Oluşturmak *~~(Öğrenildi)~~*

```csharp
ng g c sender
ng g c receiver
```

### Adım 4: Component'leri Servis ile Konuşacak Şekilde Düzenlemek *~~(Öğrenildi)~~*

### Veri Gönderen Component (`sender.component.ts` ve `.html`) *~~(Öğrenildi)~~*

```csharp
// sender.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
})
export class SenderComponent {
  // Dependency Injection ile DataService'i enjekte ediyoruz.
  constructor(private dataService: DataService) {}

  sendMessage(inputElement: HTMLInputElement) {
    // Servisin metodunu çağırarak yeni mesajı gönderiyoruz.
    this.dataService.changeMessage(inputElement.value);
  }
}
```html
<!-- sender.component.html -->
<div class="card">
  <h3>Gönderici Component</h3>
  <input #messageInput type="text" placeholder="Bir mesaj gönderin...">
  <button (click)="sendMessage(messageInput)">Gönder</button>
</div>

```

### Veri Alan Component (`receiver.component.ts` ve `.html`) *~~(Öğrenildi)~~*

```csharp
// receiver.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
})
export class ReceiverComponent implements OnInit, OnDestroy {
  message: string = '';
  private subscription!: Subscription;

  // AYNI servis örneğini enjekte ediyoruz.
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Servisteki Observable'a abone oluyoruz.
    // Gelen her yeni veri, 'message' değişkenimizi günceller.
    this.subscription = this.dataService.currentMessage.subscribe(message => {
      this.message = message;
    });
  }

  // ÖNEMLİ: Component yok edildiğinde memory leak (bellek sızıntısı)
  // olmaması için aboneliği sonlandırıyoruz.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```html
<!-- receiver.component.html -->
<div class="card">
  <h3>Alıcı Component</h3>
  <p>Gelen Mesaj: <strong>{{ message }}</strong></p>
</div>
```

### Adım 5: Ana Component'te Kardeşleri Barındırmak (`app.component.ts` ve `.html`) *~~(Öğrenildi)~~*

```csharp
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SenderComponent, ReceiverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
```html
<!-- app.component.html -->
<div class="container">
  <h1>Kardeş Component'ler Arası İletişim (Servis ile)</h1>
  <hr>
  <div class="components-wrapper">
    <!-- Bu iki component arasında doğrudan bir ilişki yok -->
    <app-sender></app-sender>
    <app-receiver></app-receiver>
  </div>
</div>
<router-outlet></router-outlet>
```

Bu uygulamayı çalıştırdığınızda, "Gönderici Component" içindeki input'a yazdığınız her mesajın, "Gönder" butonuna bastığınızda anında "Alıcı Component" içinde belirdiğini göreceksiniz. Bu, aralarında hiçbir hiyerarşi olmayan iki component'in, merkezi bir servis aracılığıyla nasıl kusursuz bir şekilde iletişim kurduğunun en net örneğidir.

## LocalStore *~~(Zaten biliniyordu)~~*

 **Local Storage** , web tarayıcısının sunduğu, verileri anahtar-değer (key-value) çiftleri olarak saklayan basit bir depolama alanıdır. En önemli özelliği, depolanan verilerin kalıcı olmasıdır; yani kullanıcı tarayıcıyı kapatsa veya bilgisayarı yeniden başlatsa bile veriler silinmez.

Sadece metin (string) formatında veri saklayabildiği için, JavaScript nesnelerini (object) veya dizileri (array) saklamak istersen, bunları önce `JSON.stringify()` ile metne çevirmen, okurken de `JSON.parse()` ile tekrar nesneye dönüştürmen gerekir. Genellikle kullanıcı tercihleri, basit tema ayarları veya bir JWT token gibi küçük ve kritik olmayan verileri saklamak için kullanılır.

## Standalone vs Module *~~(Öğrenildi)~~*

Angular'da,  **NgModule (Eski Yaklaşım)** , birbiriyle ilişkili component, directive ve pipe'ları mantıksal bir grup altında toplayan bir organizasyon birimiydi. Bir component'in çalışabilmesi için, ait olduğu NgModule'ün `declarations` dizisinde bildirilmesi ve ihtiyaç duyduğu diğer tüm bağımlılıkların (diğer component'ler, modüller vb.) yine o NgModule'ün `imports` dizisine eklenmesi gerekiyordu. Bu yapı, özellikle büyük projelerde karmaşıklığa, gereksiz kod tekrarına (boilerplate) ve anlaşılması zor bağımlılık ağaçlarına yol açabiliyordu.

Buna karşılık, Angular v17 ile varsayılan hale gelen  **Standalone (Yeni Yaklaşım)** , bu karmaşıklığı tamamen ortadan kaldırır. Standalone mimaride her component, directive ve pipe kendi kendine yeten, bağımsız bir birimdir. Artık bir NgModule'e ihtiyaç duymazlar; bunun yerine, ihtiyaç duydukları tüm bağımlılıkları (`FormsModule`, başka bir component, bir pipe vb.) doğrudan kendi `@Component` dekoratörlerinin içindeki `imports` dizisinde tanımlarlar. Bu yaklaşım, component'leri daha modüler, yeniden kullanılabilir ve anlaşılır hale getirirken, proje yapısını önemli ölçüde basitleştirir ve geliştirici deneyimini iyileştirir. Kısacası Standalone, daha az kodla daha temiz ve daha doğrudan bir geliştirme süreci sunar.

## API istekleri (HttpClient) *~~(Öğrenildi - Ama Websocket kullanılacağı için detaylara inilmedi)~~*

`Rest Api istekleri Pixi & Angular (Crash Oyun) uygulamalarında çok ihtiyacımız olan bir konu değidir. Ekstra page’ler, modal şeklinde sayfa üzerinde gösterilmelidir. Ama yinede ihtiyaç duyulur ise → Bölüm : 14 izlenilebilinir.`

## Formlar *~~(Sadece Chat feature form şeklinde olabilir, onun dışında çok ihtiaç yok gibi)~~*

`(NgForm) (Belki Chat kısmı için gerekli olabilir.) Pixi & Angular (Crash Oyun) uygulamalarında çok ihtiyacımız olan bir konu değidir. Ekstra page’ler, modal şeklinde sayfa üzerinde gösterilmelidir. Ama yinede ihtiyaç duyulur ise → Bölüm : 15 izlenilebilinir.`

## Lazy Loading ~~*(Routing olmadığı için, lazy loading'ede gerek yok*)~~

`Lazy Loading yapıları, Routing konusuyla alakalıdır, Ama yinede ihtiyaç duyulur ise, Eğitim Serisinde Bölüm → 16’da izlenilebilinir.`

## Signals *~~(Bakıldı ama detaylara inmek lazım, concept karışık geldi)~~*

`Signal Yapıları, Zoneless konusuyla alakalıdır, Ama yinede ihtiyaç duyulur ise, Eğitim Serisinde Bölüm → 17’da izlenilebilinir.`

Angular'da bir  **Signal** , içinde bir değer barındıran ve bu değer değiştiğinde, kendisiyle ilgilenen herkese bu değişikliği **otomatik olarak bildiren** özel bir sarmalayıcıdır (wrapper). Onu, reaktif bir veri kutusu olarak düşünebilirsin. Bir Signal'in üç temel görevi vardır: değerini tutmak (`get`), değerini güncellemek (`set`) ve değeri değiştiğinde bir bildirim yayınlamak (`notify`). Bu basit ama güçlü yapı, Angular'ın verideki değişiklikleri nasıl takip ettiğini temelden değiştirir. Bir Signal oluşturmak için `signal()`, bir veya daha fazla Signal'den türetilmiş yeni bir değer hesaplamak için `computed()` ve bir Signal değiştiğinde yan etkiler (logging, analitik vb.) çalıştırmak için `effect()` gibi temel araçları kullanırız.

Signal'lerin asıl önemi, Angular'ın geleneksel değişiklik algılama mekanizması olan  **Zone.js** 'e getirdiği modern ve çok daha performanslı alternatiftir. Eski yaklaşımda Zone.js, uygulamadaki tıklama, zamanlayıcı veya API isteği gibi her türlü asenkron olayı dinleyen "büyük bir kulak" gibi çalışır ve bir olay gerçekleştiğinde, neyin değiştiğinden emin olmak için component ağacının büyük bir kısmını kontrol ederdi. Bu, bazen gereksiz performans maliyetlerine yol açabilen bir "kirli kontrol" mekanizmasıdır. **Signals ise "lazer odaklı" bir yaklaşım sunar.** Bir Signal, sadece ve sadece kendisini dinleyen component'lerin veya `computed`/`effect` bloklarının hangileri olduğunu bilir. Değeri değiştiğinde, tüm uygulamayı kontrol etmek yerine, yalnızca bu ilgili parçalara bir bildirim göndererek çok daha hassas ve verimli bir güncelleme sağlar.

Bu "hassas reaktiflik" (granular reactivity) sayesinde Signals, Angular uygulamalarına üç temel fayda sağlar: **1) Üstün Performans:** Gereksiz kontroller ortadan kalktığı için uygulamalar, özellikle karmaşık arayüzlerde çok daha hızlı çalışır. **2) Daha Basit ve Öngörülebilir Kod:** Durum yönetimi daha açık ve takip etmesi kolay hale gelir; bir değerin nereden gelip nereyi etkilediği çok nettir. **3) Zone.js'ten Kurtulma (Zoneless):** Uzun vadede, Signals'in yaygınlaşması, Angular uygulamalarının Zone.js olmadan çalışabilmesini sağlayacak, bu da daha küçük paket boyutları ve daha basit bir iç mimari anlamına gelecektir. Kısacası Signals, Angular'ı daha hızlı, daha basit ve daha modern bir framework haline getiren devrimsel bir adımdır.

## Angular.json Information *~~(Öğrenildi)~~*

`Angular Json Yapılandırması,bir angular projesinin davranışları ile ilgilidir. Eğitim tekrar izlenmesi gerekir. Eğitim Serisinde Bölüm → 18’da izlenilebilinir.`

## Zoneless Feature (Zoneless Change Detection) *~~(Öğrenildi)~~*

`Zoneless Yapıları, Zoneless konusuyla alakalıdır, Ama yinede ihtiyaç duyulur ise, Eğitim Serisinde Bölüm → 19’da izlenilebilinir.`

Angular'da  **Zoneless** , bir uygulamanın, Angular'ın geleneksel değişiklik algılama mekanizması olan **Zone.js** kütüphanesine ihtiyaç duymadan çalışması anlamına gelir. Bu konuyu anlamak için önce Zone.js'in ne yaptığını bilmek gerekir. Geleneksel Angular uygulamalarında Zone.js, tarayıcıdaki tüm asenkron olayları (kullanıcı tıklamaları, `setTimeout` gibi zamanlayıcılar, HTTP istekleri vb.) "maymun yaması" (monkey-patch) yöntemiyle dinleyen bir kütüphanedir. Bir olay gerçekleştiğinde, Zone.js Angular'a "Hey, bir şeyler olmuş olabilir, git bir kontrol et!" der. Angular da bu uyarı üzerine, neyin değiştiğinden emin olmak için component ağacının tamamını veya büyük bir kısmını kontrol ederek değişiklik algılama sürecini tetikler. Bu, her şeyi kapsayan ama bazen gereksiz kontrollerle performansı düşürebilen bir yaklaşımdır.

**Zoneless mimari ise bu "büyük kulak" olan Zone.js'i tamamen devreden çıkarır.** Peki, Zone.js olmadan Angular ne zaman güncelleme yapacağını nasıl bilir? İşte bu noktada **Signals** devreye girer. Zoneless bir uygulamada, arayüzün güncellenmesi artık genel bir "bir şeyler oldu" uyarısıyla değil, doğrudan bir Signal'in değerinin değişmesiyle tetiklenir. Bir `signal`'in değeri `set()` veya `update()` ile değiştirildiğinde, o Signal kendisini dinleyen component'lere veya `effect`'lere doğrudan bir bildirim gönderir. Değişiklik algılama, artık tüm uygulamayı kapsayan bir arama operasyonu olmak yerine, bir veri değişikliğinden etkilenen belirli noktalara yapılan cerrahi bir müdahale haline gelir.

Bu geçişin temel amacı, Angular uygulamalarını daha hızlı, daha verimli ve daha öngörülebilir hale getirmektir. Zoneless mimarinin sağladığı en büyük avantajlar; **1) Üstün Performans:** Sadece gerekli olanın güncellenmesiyle gereksiz tüm kontrollerden kurtulunur. **2) Daha Küçük Paket Boyutu:** Zone.js kütüphanesi artık projenin son derlenmiş haline dahil edilmediği için uygulamanın boyutu küçülür. **3) Daha Basit ve Anlaşılır Mantık:** Bir UI güncellemesinin neden ve ne zaman gerçekleştiğini takip etmek çok daha kolaylaşır, çünkü artık her şey bir Signal'in değişimine doğrudan bağlıdır. Bu, özellikle reaktif programlamaya ve modern web standartlarına daha uyumlu, daha saf bir geliştirme deneyimi sunar.

## Production App *~~(Öğrenildi, özellikle development deployment ayarları için gereklidir.)~~*

`Bir uygulamayı canlıya alma süreçleri Özellike, test, prod, dev ortamlarının ayarı için bu ders tekrar izlenmesi gerekir. Eğitim Serisinde Bölüm → 20’da izlenilebilinir.`

## Js Lıbrary *~~(Bir crash oyunu yapıacamız için, sadece localization kütüphanesi için tekrardan bakılması gerekebilir)~~*

`Farklı Js Kütüphaneleri Pixi & Angular (Crash Oyun) uygulamalarında çok ihtiyacımız olan bir konu değidir. Ekstra page’ler, modal şeklinde sayfa üzerinde gösterilmelidir. Ama yinede ihtiyaç duyulur ise → Bölüm : 21 izlenilebilinir.`

## Internatioalization Localization - i18n *~~(Öğrenildi)~~*

`Bir uygulamayı dil ayarları çoklu dil yönetimi gibi konuları içerir. Bu ders tekrar izlenmesi gerekir. Eğitim Serisinde Bölüm → 22’da izlenilebilinir.`

## Flex - ui *~~(Crash oyunudna gerek yok)~~*

`Flex-ui Kütüphaneleri Pixi & Angular (Crash Oyun) uygulamalarında çok ihtiyacımız olan bir konu değidir. Ekstra page’ler, modal şeklinde sayfa üzerinde gösterilmelidir. Ama yinede ihtiyaç duyulur ise → Bölüm : 24 izlenilebilinir.`

## MonoRepo(Nx) *~~(Crash oyununda gerek yok)~~*

`Monorepo NX Kütüphanesi Pixi & Angular (Crash Oyun) uygulamalarında çok ihtiyacımız olan bir konu değidir. Ekstra page’ler, modal şeklinde sayfa üzerinde gösterilmelidir. Ama yinede ihtiyaç duyulur ise → Bölüm : 24 izlenilebilinir.`

## Ekstra konular *~~(Detaylı sonrasında Bakılacak, sadece kavram adları biliniyor.)~~*

`İleri seviye olduktan sonra tekrar bakılacak !`

* **RxJS (Reactive Extensions for JavaScript):**
  Bu, Angular'ın kalbinde yatan en önemli kütüphanelerden biridir. Asenkron işlemleri ve olayları birer "veri akışı" (stream) olarak yönetmeni sağlar. `HttpClient`'tan gelen yanıtlar, kullanıcı olayları, zamanla değişen veriler... hepsi RxJS ile yönetilir. `Observable`, `Subject`, `pipe()`, `map()`, `filter()` gibi operatörleri anlamak, Angular'da akıcı ve güçlü kod yazmanın anahtarıdır.
* **İleri Seviye State Management (NgRx, Elf):**
  Basit bir servis ile durum yönetimi harikadır, ancak uygulaman çok büyüdüğünde ve state (durum) karmaşıklaştığında, **NgRx** (Redux prensiplerini temel alır) veya **Elf** gibi özel state management kütüphaneleri devreye girer. Bunlar, uygulamanın durumunu çok daha öngörülebilir, yönetilebilir ve test edilebilir hale getiren katı kurallar ve yapılar sunar.
* **Change Detection Strategy (`OnPush`):**
  Bu, çok önemli bir performans optimizasyon tekniğidir. Bir component'e `ChangeDetectionStrategy.OnPush` stratejisini uyguladığında, Angular'a "Bu component'i sürekli kontrol etme, sadece `@Input()` verileri değiştiğinde veya kendi içinden bir olay tetiklendiğinde güncelle." demiş olursun. Bu, gereksiz yeniden çizimleri (re-render) önleyerek uygulamayı, özellikle de büyük listeler içeren sayfaları, inanılmaz hızlandırır.
* **Content Projection (`<ng-content>`):**
  Bu, son derece esnek ve yeniden kullanılabilir "wrapper" (sarmalayıcı) component'ler oluşturmanı sağlayan güçlü bir özelliktir. Bir child component'in şablonu içine `<ng-content>` etiketini yerleştirerek, parent component'in o child'ın içine kendi HTML içeriğini "yansıtmasına" (project etmesine) olanak tanırsın. Genel bir kart (card), modal veya panel component'i yaparken çok kullanışlıdır.
* **İleri Seviye Dependency Injection (Providers):**
  Servisleri hep `providedIn: 'root'` ile global yaptık. Ancak bazen bir servisin sadece belirli bir component ve onun alt component'leri için var olmasını isteyebilirsin. Servisi bir component'in `providers` dizisinde tanımlayarak, o servisten sadece o hiyerarşiye özel, yalıtılmış bir örnek oluşturabilirsin.
  </aside>
