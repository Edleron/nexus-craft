import { ApplicationConfig, APP_INITIALIZER, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { CreateService } from './services/create.service';

// APP_INITIALIZER için bir factory fonksiyonu
// Bu fonksiyon, InitializationService'i enjekte eder ve onun init metodunu döndürür.
export function createAppFactory(initializationService: CreateService): () => Promise<void> {
  return () => initializationService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),

    // APP_INITIALIZER'ı burada sağlıyoruz
    {
      provide: APP_INITIALIZER,
      useFactory: createAppFactory,
      deps: [CreateService], // Factory'nin bağımlılıklarını belirtiyoruz
      multi: true // Birden fazla initializer olabileceğini belirtir
    }
  ]
};