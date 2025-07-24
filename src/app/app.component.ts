import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import NavbarComponent from './components/ui-side/navbar/navbar.component';
import MainSideComponent from './components/ui-side/main-side/main-side.component';
import SplashScreenComponent from './components/splash-screen/splash-screen.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SplashScreenComponent,
    NavbarComponent,
    MainSideComponent
  ],
  templateUrl: './app.component.html',
  styles: `:host { @apply flex flex-col h-screen } `
})
export class AppComponent {

  // Yüklenme durumunu tutmak için bir Signal kullanıyoruz.
  // Başlangıçta true, yani splash screen görünecek.
  isLoading = signal(true);

  constructor() {
    // APP_INITIALIZER görevleri bittikten sonra bu constructor çalışır.
    // Artık her şeyin hazır olduğunu biliyoruz.
    // Küçük bir gecikme ile (animasyon için) splash screen'i gizleyebiliriz.
    setTimeout(() => {
      this.isLoading.set(false); // isLoading sinyalini false yap.
    }, 4000); // 4 saniyelik ek bir bekleme (isteğe bağlı)
  }
}