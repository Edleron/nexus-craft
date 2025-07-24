import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
        <!-- Oyun İsmi (SADECE MOBİLDE GÖRÜNÜR) -->
        <div class="lg:hidden">
            <p class="font-bold text-white">OYUN İSMİ (Mobil)</p>
        </div>
        <!-- Navbar İçeriği (Hamburger Menü vb.) -->
        <div>
            <p class="font-bold text-white">NAVBAR İÇERİĞİ</p>
        </div>
  `,
  styles: `:host { @apply h-[6.5%] bg-indigo-800 flex items-center justify-between lg:justify-center px-4 shadow-lg z-10 } `
})
export default class NavbarComponent {

}
