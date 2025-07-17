// src/app/components/loading-screen/loading-screen.component.ts

import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { LOADING_SCREEN_CONFIG } from './loading.config';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingScreenComponent implements AfterViewInit {
  @Output() assetsLoaded = new EventEmitter<void>();

  ngAfterViewInit() {
    // Gerçek Pixi asset yükleme mantığı buraya gelecek.
    // Şimdilik config dosyasındaki süreyi kullanarak simüle ediyoruz.
    console.log('PixiJS asset yüklemesi başlıyor...');
    
    setTimeout(() => {
      console.log('Assetler yüklendi!');
      this.assetsLoaded.emit();
    }, LOADING_SCREEN_CONFIG.fakeLoadingTime);
  }
}