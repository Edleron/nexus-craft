llm-task klasörü içerisinde,

> 00-learn-angular-journey.md içersinde, son 3 gündür angular'da öğrendiklerim.
>
> 01-project-architech.md içerisinde, proje hakkında detaylı bilgiler.
>
> 02-basic-layout.html içerisinde tailwind css ile yapılandırılmış basic layout yapısı (ilk aşama olarak çıktı bu şekilde beklenir)
>
> 03-socket.logic.ts içerisinde  eski'den yazdığım şimdilik geçici olarak angular'a evirdiğim web-scoket bağlantısı için gerekli response'ler ve request'ler logic kodları (Angular tarafına daha rahat uygulaman için.)
>
> 04-socket.initial.ts içerisinde ise, logic kodların (RxJs) ile yönettiğim kod (Angular tarafına daha rahat uygulaman için.)
>
> 05-result-game.jpg içerisinde son kullanıcın göreceği ekran (Nihai olarak, projenin sonunda görüneceği ekran, ama şimdilik es geçebiliriz.)

Yaklaşık 10 yıldır, Igaming sektöründe bir oyun geliştiricisiyim, slot, crash, scracht card oyununu sayısız kere geliştirdim. Genelde bu süreçte In canvas içi ui yada react kullandım, ama bügün şartlarında hızlıca bir projei angular tarafında ayağa kaldırmam gerekiyor.

Angular UI tarafında kullanılacak v19'den devam edebiliriz, bu süreçte angular'da son 3 içerisinde öğrendiklerimi 00-learn-angular-journey.md dosyasında readme olarak paylaştım. ayrıca gerekli sistemleri package.json tarafında gerekli yapıları sağladım.

Şu an projeyede hakim olmam gerekiyor, basit tailwind css ile layout yapısınu pure html (02-basic-layout.html) olarak verdim. Amacım en iyi best practice ile mimariyi ve logic'i kesin bir pipeline ile oluşturmaktır. Bu sebeple 05-resul-game.jpg ekranını kullanıcın son olarak göreceği tasarımı implemente etmekden daha çok gerçekten çalışır, best practiclere uygun bir mimari istiyorum. Ama yinede uygulamanın sonunda oluşacağı görüntüyü şimdiden sana göstermek istedim.

Angular v19 kullancağız, pixi tarafında ise v8 kullanacağız, Ayrıca pixi-asset pack kütüphane entegrasyonu ve bunun angular tarafında config'lerinin ayarlanması çok tatlı olur, gerekli dosyalarını ve yapıları ben senin için package.json içerisinde hazırladım. -> package.json içerisinde detaylı bir şekide hazırladım.

uygulamanın lifecyle'ında ise,

* bir - splash-screen > angular & pixi sürecini inital eden süreçtir (Spinning + black bakcgorund olmalıdır.)(game cancas'ta bu süreçte inital edilmelidir)
* sonrasında bir loading screen, pixi scene mantığı ile yapılmış bir loading olmalı ve asset'lerin yüklenme süreçlerini göstermelidir. (Web-socket + localization)
* assetler yüklendikten sonra canvas main screen'ı attach etmeli ve main screen'de bir adet ortada text yazmalıdır. arka plan'ı siyah olması yeterlidir.

Bu süreçte basic-layout klasörü içerisindeki pure hmtl baz alınarak custom bir layout yapısı kurulmalıdır, zaten gerekli bilgiler orada mevcut. Ekstra css,'e yada farklı bir yapılandırmaya şimdilik gerek yok.

dediğim gibi amacımız sağlam bir mimari üzerine süreci oturtmaktır.

Yine bu süreçte, 01-project-architecure.md (Bunu direk implmente et diye söylemiyorum, görüntü olarak 02-basic-layout.html baz alonacak, sadece, html elementlerinin bir açıklmaası gibi düşünmeni istiyorum. )proje'ye dair detaylar paylaşılmıştır ve buna binayen rxjs ile llm-task klasörü altında 2 adet ts dosyası vardır, (03-socket-logic.ts, 04-socket.init.ts) bunlar websocket için tüm süreçleri senin için hazırlanmış bulunmaktayım. bunlarda yine düzenlenip projeye dahil edilecek, bir state managment yapısı kurulmalıdır.

ekstra, bu süreçte hem angular hemde pixi tarafındai language dosyları (gerekirse external bir kütüphane kurulmalıdır.(i18n)) ile dil dosyarı splash screen'de yüklenmelidir, angular tarafını bunu kullanacak şekilde hazır hale getirilmelidir. game tarafında ise, asset-pack ile bu entegrasyon yapılmalıdır.

Onun dışında, angular.json içerisidne development ve deployment ortamları llm-taskiçerisidne(03-socket-logic.ts, 04-socket.init.ts) içerisinde bilgiler ile ayarlanmalıdır.

projemizde signal yapısını kullancağımız için Zoneless yapılar artık kaldırılmıştır. Angular tarafı Standalone şekilde kurgulnacaktır.

Buraya kadar projedeki yapmak istediklerimi detaylandırmaya çalıştım.

benim için bu süreci, gerekli analizleri ve proje yapılarını okuyarak hızlıca inşa edebilirmisin ?

Yukarıda anlatılan frontend süreçleri, 02-basic-layout.html betiğinde, pure html olarak tasarlanmıştır, bu tasarım dikkate alınarak, best practice olarak angular layout yapısını ve component yapısı oluşturmalısın. Iç component'ler yada bahis kontrol paneli, chat gibi, history'ler gibi detaylı komponentler şimdilik kesin bir dil ile istemiyorum, 02-basic-layout gibi component mimarisi kurulmalı, tailwind ile css güzelleştirilmeli, ve yer tutucu olarak gösterilmelidir. şimdilik basit beklentim, yer tutucu şeklinde responsive kurallara uyarak ilk aşamanın geçilmesidir.
