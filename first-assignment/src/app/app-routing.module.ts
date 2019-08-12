import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: 'game',
    loadChildren: './game/game.module#GameModule'
  },
  {
    path: 'td-form',
    loadChildren: './template-driven-form/template-driven-form.module#TemplateDrivenFormModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
