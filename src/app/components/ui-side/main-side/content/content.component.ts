import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  template: `
    <!-- 7. Geçmiş Değerler (Mobil'de 1. sırada) -->
    <div class="min-h-[60px] lg:h-[10%] bg-teal-700 flex items-center justify-center p-2 order-1 lg:order-3">
        <p class="font-bold text-center text-white">7. GEÇMİŞ DEĞERLER</p>
    </div>

    <!-- 5. Sağ Panel - Üst Kısım (Mobil'de 2. sırada) -->
    <!-- Dikey büyüme (flex-grow) kaldırıldı -->
    <div class="lg:h-[80%] flex flex-col lg:flex-row order-2 lg:order-1">
        <!-- 5a. Game Canvas Alanı -->
        <!-- Dikey büyüme (flex-grow) kaldırıldı -->
        <div class="w-full lg:w-[67%] bg-rose-700 flex items-center justify-center min-h-[250px]">
            <p class="font-bold text-white">5a. GAME CANVAS</p>
        </div>
        <!-- 5b. Chat Alanı (SADECE MASAÜSTÜNDE GÖRÜNÜR) -->
        <div class="w-full lg:w-[33%] bg-rose-600 items-center justify-center hidden lg:flex">
            <p class="font-bold text-white">5b. CHAT (Masaüstü)</p>
        </div>
    </div>

    <!-- 6. Sağ Panel - Orta Kısım (Bet Alanları) (Mobil'de 3. sırada) -->
    <div class="lg:h-[16.5%] bg-amber-700 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 order-3 lg:order-2">
        <div class="bg-amber-600 rounded-lg flex items-center justify-center min-h-[70px]">
            <p class="font-bold text-white">6a. Bet 1</p>
        </div>
         <div class="bg-amber-600 rounded-lg flex items-center justify-center min-h-[70px]">
            <p class="font-bold text-white">6b. Bet 2</p>
        </div>
         <div class="bg-amber-600 rounded-lg flex items-center justify-center min-h-[70px]">
            <p class="font-bold text-white">6c. Bet 3</p>
        </div>
    </div>
    
    <!-- Mobil: History Paneli (Mobil'de en altta, ekranın kalanını kaplar) -->
    <div class="flex-grow order-4 p-4 text-center lg:hidden bg-sky-600">
         <p class="font-bold text-white">HISTORY PANELİ (Mobil)</p>
         <!-- İçerik buraya gelecek ve bu alan dikeyde genişleyecektir -->
    </div>
  `,
  styles: `:host { @apply w-full lg:w-[80%] bg-slate-800 flex flex-col } `
})
export default class ContentComponent {

}
