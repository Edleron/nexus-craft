// src/app/components/game-container/game-container.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-game-container',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameContainerComponent {
  // İleride PixiJS servisini inject edip canvas'ı burada başlatacağız.
  constructor() {}
}