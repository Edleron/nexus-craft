import { Injectable, inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private translocoService = inject(TranslocoService);

  /**
   * Uygulamanın başlangıç dilini belirler ve ilgili dil dosyasını yükler.
   * Bu metot, APP_INITIALIZER tarafından çağrılacaktır.
   */
  init(): Promise<void> {
    // Tarayıcı dilini veya varsayılan bir dili belirleyebilirsiniz.
    const defaultLang = 'en'; // TODO : Tarayıcı dilini otomatik algıla veya kullanıcı ayarlarından al

    this.translocoService.setActiveLang(defaultLang);
    console.log(`[L10n] Aktif dil ayarlandı: ${defaultLang}`);

    // Aktif dilin yüklenmesini bekleyerek bir Promise döndürüyoruz.
    // Bu, uygulamanın dil dosyaları hazır olmadan başlamamasını garantiler.
    return firstValueFrom(this.translocoService.load(defaultLang)).then(() => {});
  }

  /**
   * Aktif dili değiştirir.
   * @param lang Kodu (örn: 'en', 'tr')
   */
  changeLanguage(lang: string): Promise<any> {
    this.translocoService.setActiveLang(lang);
    return firstValueFrom(this.translocoService.load(lang));
  }
}