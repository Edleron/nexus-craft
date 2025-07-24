import { ApplicationConfig, APP_INITIALIZER, provideExperimentalZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideTransloco } from '@ngneat/transloco';
import { TranslocoHttpLoader } from './transloco-loader';
import { CreateService } from './services/create.service';
import { environment } from '../environments/environment';

// APP_INITIALIZER için bir factory fonksiyonu
// Bu fonksiyon, InitializationService'i enjekte eder ve onun init metodunu döndürür.
export function createAppFactory(creatingService: CreateService): () => Promise<void> {
  return () => creatingService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),

    // Transloco'nun çalışması için HttpClient gereklidir.
    provideHttpClient(), 
    
    // Transloco'nun yeni provider tabanlı kurulumu
    provideTransloco({
      config: { 
        availableLangs: ['en', 'tr'], // Bu dilleri transloco.config.js'den alabilirsiniz
        defaultLang: 'tr',
        // production modunda yeniden yüklemeyi devre dışı bırakarak performansı artırır
        reRenderOnLangChange: true,
        prodMode: environment.production,
      },
      loader: TranslocoHttpLoader
    }),

    {
      provide: APP_INITIALIZER,
      useFactory: createAppFactory,
      deps: [CreateService],
      multi: true
    }
  ]
};