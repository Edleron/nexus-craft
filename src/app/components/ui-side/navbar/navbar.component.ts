import { Component } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';


@Component({
  selector: 'app-navbar',
  imports: [TranslocoPipe],
  template: `
        <!-- Oyun İsmi (SADECE MOBİLDE GÖRÜNÜR) -->
        <div class="lg:hidden">
            <p class="font-bold text-white">  {{ 'navbar.game-name' | transloco }} </p>
        </div>
        <!-- Navbar İçeriği (Hamburger Menü vb.) -->
        <div>
            <p class="font-bold text-white">  {{ 'navbar.navbar-content' | transloco }} </p>
        </div>
  `,
  styles: `:host { @apply h-[6.5%] bg-indigo-800 flex items-center justify-between lg:justify-center px-4 shadow-lg z-10 } `
})
export default class NavbarComponent {

}
