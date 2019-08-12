import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReverseString } from './custom-reverse-string.pipe';
import { ReactiveFormComponent } from './reactive-form.component';

const routes: Routes = [
    { path: '', component: ReactiveFormComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [ReactiveFormComponent,ReverseString],
  exports: [RouterModule,ReverseString],
  providers:[ReverseString]
})
export class ReactiveFormModule {}
