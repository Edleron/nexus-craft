import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [],
  template: `
    <!-- 3a. Logo Alanı -->
    <div class="h-[20%] bg-sky-700 flex items-center justify-center">
        <p class="font-bold text-white">3a. LOGO (Masaüstü)</p>
    </div>
    <!-- 3b. History Paneli -->
    <div class="h-[80%] bg-sky-600 flex items-center justify-center p-4">
         <p class="font-bold text-center text-white">3b. HISTORY PANELİ (Masaüstü)</p>
    </div>
  `,
  styles: `:host { @apply w-[20%] bg-slate-700 flex-col hidden lg:flex } `
})
export default class SideBarComponent {

}
