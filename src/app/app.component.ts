// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ayar ve durum tanımlarımızı import edelim
import { GameState, APP_SETTINGS } from './app.config';

// Gerekli tüm alt bileşenler
import { SplashScreenComponent } from './components/splash-screen/splash.component';
import { SPLASH_SCREEN_CONFIG } from './components/splash-screen/splash.config';
import { LoadingScreenComponent } from './components/loading-screen/loading.component';
import { GameContainerComponent } from './components/game-screen/game.component';


@Component({
  selector: 'app-root',
  standalone: true,
  // Gerekli modülleri ve bileşenleri import ediyoruz
  imports: [
    CommonModule, // ngSwitch gibi direktifler için
    SplashScreenComponent,
    LoadingScreenComponent,
    GameContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  // Başlangıç durumunu ayar dosyasından alıyoruz
  gameState: GameState = APP_SETTINGS.initialState;

  ngOnInit() {
    // Uygulama başladığında, splash ekranını belirli bir süre göster.
    // Bu süre sonunda durumu 'LOADING' olarak değiştir.
    if (this.gameState === 'SPLASH') {
      setTimeout(() => {
        this.gameState = 'LOADING';
      }, SPLASH_SCREEN_CONFIG.duration);
    }
  }

  /**
   * Bu metod, LoadingScreenComponent tarafından yayılan (emit)
   * 'assetsLoaded' event'i tetiklendiğinde çalışır.
   * Oyun durumunu 'GAME' olarak günceller.
   */
  onAssetsLoaded(): void {
    console.log('Ana bileşen: Assetlerin yüklendiği bilgisi alındı. Oyun başlatılıyor.');
    this.gameState = 'GAME';
  }
}