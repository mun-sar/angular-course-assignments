import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onIntervalEmitted(emittedNumber: number) {
    if (emittedNumber % 2 === 0) {
      this.evenNumbers.push(emittedNumber);
    } else {
      this.oddNumbers.push(emittedNumber);
    }
  }
}
