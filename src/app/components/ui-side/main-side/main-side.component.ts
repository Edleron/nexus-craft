import { Component } from '@angular/core';
import SideBarComponent from './side-bar/side-bar.component';
import ContentComponent from './content/content.component';

@Component({
  selector: 'app-main-side',
  imports: [SideBarComponent, ContentComponent],
  template: `  
    <!-- ============================================= -->
    <!-- 3. Sol Panel (SADECE MASAÜSTÜNDE GÖRÜNÜR) -->
    <!-- ============================================= -->
    <!-- <app-side-bar class="w-[20%] bg-slate-700 flex-col hidden lg:flex"></app-side-bar> -->
    <!-- styles .ts içerisine taşındı -->
    <app-side-bar></app-side-bar>

    <!-- ============================================= -->
    <!-- 4. Sağ Panel (Mobil'de ana gövde) -->
    <!-- ============================================= -->
    <!-- <app-content class="w-full lg:w-[80%] bg-slate-800 flex flex-col"></app-content> -->
    <!-- styles .ts içerisine taşındı -->
    <app-content></app-content>
  `,
  styles: `:host { @apply flex flex-col flex-grow overflow-y-auto lg:flex-row } `
})
export default class MainSideComponent {

}
