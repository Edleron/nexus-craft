import { Injectable, inject } from '@angular/core';
import { LocalizationService } from './localization.service';
// Örnek olarak WebSocket ve Localization servislerini import edelim
// import { WebsocketService } from './websocket.service';
// import { LocalizationService } from './localization.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  // private websocketService = inject(WebsocketService);
  private localizationService = inject(LocalizationService);

  /**
   * Bu metot, uygulamanın çalışması için gereken tüm asenkron
   * başlangıç görevlerini yönetir.
   * @returns Tüm görevler tamamlandığında çözülen bir Promise.
   */
  init(): Promise<void> {
    console.log('[Init] Uygulama başlatma görevleri başlıyor...');

    const tasks = [
      this.connectToWebsocket(),        // WebSocket'e bağlan
      this.localizationService.init(),  // Dil dosyalarını yükle
      // Buraya diğer başlangıç görevlerini ekleyebilirsin
    ];

    // Promise.all ile tüm görevlerin bitmesini bekliyoruz.
    return Promise.all(tasks).then(() => {
      console.log('[Init] Tüm başlatma görevleri başarıyla tamamlandı.');
    }).catch(error => {
      console.error('[Init] Başlatma sırasında bir hata oluştu!', error);
      // Hata durumunda da promise'i resolve edebiliriz ki uygulama kilitlenmesin
      // veya reject ederek global bir hata yönetimi yapabiliriz.
      return Promise.reject(error);
    });
  }

  // --- Örnek Görevler ---
  // Bu metotları kendi servislerinizdeki metotlarla değiştireceksiniz.

  private connectToWebsocket(): Promise<void> {
    return new Promise(resolve => {
      console.log('[Init] WebSocket bağlantısı deneniyor...');
      // Gerçek senaryoda: this.websocketService.connect()...
      setTimeout(() => {
        console.log('[Init] WebSocket bağlantısı başarılı.');
        resolve();
      }, 1500); // 1.5 saniye gecikme simülasyonu
    });
  }
}