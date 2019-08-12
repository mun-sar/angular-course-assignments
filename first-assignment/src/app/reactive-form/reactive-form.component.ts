import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userDataForm: FormGroup;
  isUserDataFormSubmitted = false;
  constructor(private formBuilder: FormBuilder,) {
    this.userDataForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    });
   }

  ngOnInit() {
    this.setUserDataFormValidation();
  }

  save() {
    this.isUserDataFormSubmitted = true;
    if (this.userDataForm.invalid) {
      return;
    }
    this.resetWebsiteFormValidation();
    this.userDataForm.reset();
  }

  private resetWebsiteFormValidation() {
    this.userDataForm.controls['email'].setValidators(null);
    this.userDataForm.controls['username'].setValidators(null);
    this.userDataForm.controls['password'].setValidators(null);
  }

  private setUserDataFormValidation() {
    this.userDataForm.controls['email'].setValidators([Validators.required, Validators.email]);
    this.userDataForm.controls['username'].setValidators(Validators.required);
    this.userDataForm.controls['password'].setValidators(Validators.required);
  }
}
