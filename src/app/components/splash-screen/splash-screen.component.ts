import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  imports: [],
  template: `
    <div class="text-center">
        
        <!-- Loading Spinner -->
        <!-- This is a standard Tailwind animation class -->
        <div class="w-16 h-16 mx-auto mb-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
        
        <!-- Loading Text -->
        <!-- The original component translated 'splash.welcome'. I've used "Welcome" as a placeholder. -->
        <h2 class="mb-2 text-xl font-semibold text-white">
            Welcome
        </h2>
        
        <!-- The original component translated 'splash.initializing'. I've used "Initializing..." as a placeholder. -->
        <p class="text-sm text-gray-300 animate-pulse">
            Initializing...
        </p>
        
        <!-- Version Info -->
        <div class="mt-8 text-xs text-gray-500">
            <p>Angular v19 • PixiJS v8</p>
            <p>Aviation Game v1.0.0</p>
        </div>

    </div>
  `,
  styles: `:host { @apply fixed inset-0 z-50 flex items-center justify-center bg-black } `
})
export default class SplashScreenComponent {

}
