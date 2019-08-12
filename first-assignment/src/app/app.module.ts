import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { UsersComponent } from './users/users.component';
import { LandingComponent } from './landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsersComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
