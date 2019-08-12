import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

const routes: Routes = [
    { path: '', component: GameComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  declarations: [GameComponent,GameControlComponent,OddComponent,EvenComponent],
  exports: [RouterModule]
})
export class GameModule {}
