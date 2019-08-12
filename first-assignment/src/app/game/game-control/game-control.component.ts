import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() intervalEmitted = new EventEmitter<number>(); // Output event that emits the incremented number
  interval;
  incrementalNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Function to emit an event that increments a number after each second
   */
  startGame() {
    this.interval = setInterval(() => {
      this.intervalEmitted.emit(this.incrementalNumber + 1);
      this.incrementalNumber++;
    }, 1000);
  }

  /**
   * Function to stop the interval
   */
  stopGame() {
    clearInterval(this.interval);
  }

}
