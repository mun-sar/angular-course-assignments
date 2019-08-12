import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

const routes: Routes = [
    { path: '', component: TemplateDrivenFormComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule],
  declarations: [TemplateDrivenFormComponent],
  exports: [RouterModule]
})
export class TemplateDrivenFormModule {}
