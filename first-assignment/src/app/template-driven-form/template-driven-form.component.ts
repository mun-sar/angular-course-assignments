import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    password: '',
    subscription: '',
    gender: ''
  };
  submitted = false;

  ngOnInit(){

  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

}
