import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketLogicService } from './05-socket.logic';
import { environment } from '../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-container', // Örnek selector
  templateUrl: './game.component.html', // Örnek template
})
export class SocketLogicInitial implements OnInit, OnDestroy {
  private socketService: SocketLogicService;
  private subscriptions = new Subscription();

  // Örnek state'ler
  public currentMultiplier: number = 1;
  public connectionStatus: string = 'Connecting...';

  constructor() {
    // Servisi environment bilgisi ile başlat
    this.socketService = new SocketLogicService(!environment.production);
  }

  ngOnInit(): void {
    this.socketService.initialize();

    // --- Tüm olayları dinlemek için subscription'lar ---
    // GÜNCELLENDİ: Yeni eklenen tüm olaylar burada dinleniyor.

    const connectSub = this.socketService.onConnect$.subscribe(() => {
      this.connectionStatus = 'Connected!';
      console.log('Socket connection successful.');
    });

    const disconnectSub = this.socketService.onDisconnect$.subscribe(() => {
      this.connectionStatus = 'Disconnected.';
      console.warn('Socket disconnected.');
    });
    
    const reconnectSub = this.socketService.onReconnect$.subscribe(() => {
      this.connectionStatus = 'Reconnected successfully!';
      console.log('Socket reconnected.');
    });

    const reconnectAttemptSub = this.socketService.onReconnectAttempt$.subscribe(attempt => {
      this.connectionStatus = `Reconnecting... (Attempt ${attempt})`;
      console.log(`Reconnection attempt #${attempt}`);
    });

    const reconnectFailedSub = this.socketService.onReconnectFailed$.subscribe(() => {
      this.connectionStatus = 'Connection Failed. Please refresh.';
      console.error('Could not reconnect to the socket.');
      // Burada kullanıcıya kalıcı bir hata mesajı gösterilebilir.
    });

    const stateSub = this.socketService.onStateUpdate$.subscribe(state => {
      // console.log('Yeni Oyun Durumu:', state);
      this.currentMultiplier = state.m; // Gelen 'state' verisini kullanarak arayüzü güncelle
    });

    const notifySub = this.socketService.onNotify$.subscribe(notification => {
      console.log(`Bildirim [${notification.code}]:`, notification.data);
      // Gelen bildirime göre kullanıcıya bir toast/popup göster
      // Örn: toastr.success(`You won ${notification.data.winAmount}!`);
    });

    const initSub = this.socketService.onInit$.subscribe(initData => {
        console.log('Game initialized with data:', initData);
        // Oyuncu bilgileri, bakiye, ayarlar vb. burada set edilir.
    });
    
    // Tüm subscription'ları tek bir yerden yönetmek için ekle
    this.subscriptions.add(connectSub);
    this.subscriptions.add(disconnectSub);
    this.subscriptions.add(reconnectSub);
    this.subscriptions.add(reconnectAttemptSub);
    this.subscriptions.add(reconnectFailedSub);
    this.subscriptions.add(stateSub);
    this.subscriptions.add(notifySub);
    this.subscriptions.add(initSub);
  }

  ngOnDestroy(): void {
      this.socketService.disconnect();
      this.subscriptions.unsubscribe();
  }

  // --- Örnek Eylem Fonksiyonları ---

  makeBet(): void {
    // Gerekli bilgiler (userId vb.) genellikle bir state management (örn: NgRx, Akita)
    // veya başka bir auth servisinden alınır.
    const betPayload = {
      amount: 10,
      order: 'first' as const,
      autoCashout: 2.5,
      userId: 'player123', // Örnek ID
      autoBet: false,
    };
    this.socketService.placeBet(betPayload);
  }

  cashOut(): void {
    const cashoutPayload = {
      type: 'cashout' as const,
      betId: 'bet_abc_123', // Aktif bahsin ID'si
      order: 'first' as const,
      userId: 'player123'
    };
    this.socketService.cashoutOrCancel(cashoutPayload);
  }

  sendChatMessage(message: string): void {
      const chatPayload = {
        message: message,
        userId: 'player123',
        username: 'Player123'
      };
      this.socketService.sendMessage(chatPayload);
  }
}