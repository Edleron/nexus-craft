import { io, Socket } from 'socket.io-client';
import { Subject } from 'rxjs';

// --- Arayüz ve Enum Tanımları (Orijinal projenizden alındı) ---

export enum RoundState {
  WAITING = 'WAITING',
  BETTING = 'BETTING',
  DISTRIBUTING = 'DISTRIBUTING',
  FINISHED = 'FINISHED',
}

export enum NOTIFY_CODES {
  InsufficientFunds = "InsufficientFunds",
  DISCONNECT= "DISCONNECT",
  ALREADY_LOGGED = "ALREADY_LOGGED",
  TokenNotFound = "TokenNotFound",
  UnknownError = "UnknownError",
  API_ERROR = "API_ERROR",
  BALANCE = "BALANCE",
  CASHOUT = "CASHOUT",
  EXPIRED = "EXPIRED",
  CANCEL = "CANCEL",
  BET = "BET",
}

export interface GameLoaderData {
  apidomain?: string;
  socketdomain?: string;
  language: string;
  freePlay: string;
  token: string;
  currencyCode: string;
  LobbyUrl: string;
  gameId: string;
  clientId: string;
  cashierUrl: string;
}

const BROADCAST = {
  INIT: 'INIT',
  STATE: 'STATE',
  NOTIFY: 'NOTIFY',
  BOOMER_UPDATE: 'BOOMER_UPDATE',
  ROUND_INFO: 'ROUND_INFO',
  MAINTENANCE: 'MAINTENANCE',
  CHAT_MESSAGE: 'CHAT_MESSAGE',
  CHAT_ERROR: 'CHAT_ERROR',
  FREESPIN: 'FREESPIN',
  DISCONNECT: 'DISCONNECT',
};


/**
 * @class SocketLogicService
 * @description GhostX oyununun tüm WebSocket iletişimini yöneten servis.
 * Orijinal projedeki tüm olayları ve eylemleri kapsar.
 */
export class SocketLogicService {
  private socket: Socket | null = null;
  private lastPingTime: number = 0;
  private isDevelopment: boolean;

  // --- Sunucudan Gelen Olaylar İçin Observable'lar ---
  // YENİ: Orijinal projedeki tüm olaylar eklendi.
  public onConnect$ = new Subject<void>();
  public onDisconnect$ = new Subject<void>();
  public onReconnect$ = new Subject<void>();
  public onReconnectAttempt$ = new Subject<number>();
  public onReconnectFailed$ = new Subject<void>();
  public onInit$ = new Subject<any>();
  public onStateUpdate$ = new Subject<any>();
  public onNotify$ = new Subject<{ code: NOTIFY_CODES; data: any }>();
  public onRoundInfo$ = new Subject<any>();
  public onMaintenance$ = new Subject<boolean>();
  public onBoomerUpdate$ = new Subject<any[]>();
  public onChatMessage$ = new Subject<any>();
  public onChatError$ = new Subject<any>();
  public onFreespin$ = new Subject<any>();
  public onServerSideDisconnect$ = new Subject<void>(); // Sunucudan gelen強制disconnect


  constructor(isDev: boolean) {
      this.isDevelopment = isDev;
  }

  /**
   * Oyunu başlatır: konfigürasyonu yükler ve WebSocket bağlantısını kurar.
   */
  public async initialize(): Promise<void> {
    try {
      const loaderData = await this.extractGameLoaderData();
      if (!loaderData.token) {
        throw new Error("Token not found. Cannot initialize socket.");
      }
      const socketUrl = this.buildSocketUrl(loaderData);

      this.socket = io(socketUrl, {
        reconnection: true,
        reconnectionAttempts: 9,
        reconnectionDelay: 10000,
        reconnectionDelayMax: 15000,
        transports: ["websocket"],
        query: {
          device: navigator.userAgent,
          token: loaderData.token,
          GameId: loaderData.gameId,
          clientId: loaderData.clientId,
        },
      });

      this.registerSocketEvents();
    } catch (error) {
      console.error("Socket Initialization failed:", error);
    }
  }
  
  /**
   * WebSocket bağlantısını sonlandırır.
   */
  public disconnect(): void {
    this.socket?.disconnect();
  }

  /**
   * Geliştirme veya canlı ortamına göre oyun başlatma verilerini çeker.
   * GÜNCELLENDİ: 'tokend' mantığı orijinaldeki gibi daha doğru işleniyor.
   */
  private async extractGameLoaderData(): Promise<GameLoaderData> {
    let launchUrlString: string = window.location.search;

    if (this.isDevelopment) {
      const response = await fetch("https://em-api.aperion.dev/createLaunchURL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Balance: 50000, GameId: "GhostX", Currency: "TRY" }),
      });
      const { LaunchURL } = await response.json();
      launchUrlString = LaunchURL;
    }

    const launchParams = new URLSearchParams(launchUrlString);
    const data: any = {};
    const queryKeys = ["token", "gameId", "clientId", "cashierUrl", "language", "currencyCode", "LobbyUrl"];
    queryKeys.forEach(key => data[key] = launchParams.get(key));

    const tokendFromLaunchUrl = launchParams.get("tokend");
    const tokendFromWindowUrl = new URLSearchParams(window.location.search).get("tokend");
    const tokend = tokendFromWindowUrl || tokendFromLaunchUrl;

    if (tokend) {
      // Bu subdomain isimleri `package.json`'dan esinlenilmiştir,
      // Angular environment dosyalarında yönetilebilir.
      const apiSubdomain = 'ghostx-api';
      const socketSubdomain = 'ghostx-socket';
      const domain = window.atob(tokend);

      data['apidomain'] = `https://${apiSubdomain}.${domain}`;
      data['socketdomain'] = `${socketSubdomain}.${domain}`;
    }
    
    return data as GameLoaderData;
  }

  /**
   * Verilen bilgilere göre WebSocket sunucu URL'ini oluşturur.
   */
  private buildSocketUrl(loaderData: GameLoaderData): string {
    // Bu değerler Angular environment dosyalarından gelmeli.
    const defaultUrl = "localhost";
    const defaultPort = "5002";
    const defaultSsl = false;

    const hostname = loaderData.socketdomain || defaultUrl;
    const port = defaultPort;
    const useSsl = hostname.includes('localhost') ? defaultSsl : true;

    const protocol = useSsl ? "wss" : "ws";
    const portString = (port && hostname.includes('localhost')) ? `:${port}` : "";

    return `${protocol}://${hostname}${portString}`;
  }

  /**
   * Sunucudan gelecek tüm olayları dinlemek için event handler'ları kaydeder.
   * GÜNCELLENDİ: Tüm olaylar ve yeniden bağlanma mantığı eklendi.
   */
  private registerSocketEvents(): void {
    if (!this.socket) return;
    
    // Bağlantı yaşam döngüsü olayları
    this.socket.on('connect', () => this.onConnect$.next());
    this.socket.on('disconnect', () => this.onDisconnect$.next());
    
    // Sunucudan gelen oyun olayları
    this.socket.on(BROADCAST.INIT, (data: any) => this.onInit$.next(data));
    this.socket.on(BROADCAST.STATE, (data: any) => this.onStateUpdate$.next(data));
    this.socket.on(BROADCAST.NOTIFY, (data: any) => this.onNotify$.next(data));
    this.socket.on(BROADCAST.ROUND_INFO, (data: any) => this.onRoundInfo$.next(data));
    this.socket.on(BROADCAST.MAINTENANCE, (data: boolean) => this.onMaintenance$.next(data));
    this.socket.on(BROADCAST.BOOMER_UPDATE, (data: any[]) => this.onBoomerUpdate$.next(data));
    this.socket.on(BROADCAST.CHAT_MESSAGE, (data: any) => this.onChatMessage$.next(data));
    this.socket.on(BROADCAST.CHAT_ERROR, (data: any) => this.onChatError$.next(data));
    this.socket.on(BROADCAST.FREESPIN, (data: any) => this.onFreespin$.next(data));
    this.socket.on(BROADCAST.DISCONNECT, () => this.onServerSideDisconnect$.next());
    
    // Yeniden bağlanma ve ping yönetimi
    this.socket.io.on("ping", () => {
      this.lastPingTime = new Date().getTime();
    });

    this.socket.io.on("reconnect", () => {
      if (new Date().getTime() - this.lastPingTime > 90000) { // 90 saniyeden fazla sürdüyse
        this.socket?.disconnect();
        this.onReconnectFailed$.next(); // Başarısız kabul et
      } else {
        this.onReconnect$.next();
      }
    });

    this.socket.io.on("reconnect_attempt", (attempt) => this.onReconnectAttempt$.next(attempt));
    this.socket.io.on("reconnect_failed", () => this.onReconnectFailed$.next());
  }


  // --- İstemciden Sunucuya Gönderilen Eylemler ---
  // GÜNCELLENDİ: Payload'lar orijinal 'game.ts' ile tam uyumlu hale getirildi.

  public placeBet(payload: { amount: number, order: 'first' | 'second', autoCashout?: number, autoBet?: boolean, userId?: string, vendorBonusId?: string }): void {
    const { amount, order, autoCashout = 0, autoBet = false, userId, vendorBonusId } = payload;
    this.socket?.emit('bet', {
      order,
      autoBet,
      autoCashout,
      betAmount: amount,
      userId,
      ...(vendorBonusId ? { vendorBonusId } : {}),
    });
  }

  public cashoutOrCancel(payload: { type: 'cashout' | 'cancel', betId: string, order: 'first' | 'second', userId?: string, vendorBonusId?: string }): void {
    const { type, betId, order, userId, vendorBonusId } = payload;
    this.socket?.emit(type, {
      order,
      processBetId: betId,
      userId,
      ...(vendorBonusId ? { vendorBonusId } : {}),
    });
  }
  
  public sendMessage(payload: { message: string, userId?: string, username?: string }): void {
      this.socket?.emit(BROADCAST.CHAT_MESSAGE, payload);
  }
}