import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = { providers: [provideZoneChangeDetection({ eventCoalescing: true })]};

// src/app/app.settings.ts

// Oyunun durumlarını tanımlayan bir enum veya type oluşturmak kod okunabilirliğini artırır.
export type GameState = 'SPLASH' | 'LOADING' | 'GAME';

export const APP_SETTINGS = {
  // Uygulamanın başlangıç durumu
  initialState: 'SPLASH' as GameState,
  // Diğer global uygulama ayarları buraya eklenebilir.
  appName: 'Aviation Game',
};