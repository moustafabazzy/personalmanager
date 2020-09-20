import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initRegistrationForm();
  }

  ngOnInit(): void { }

  /**
   *
   */
  initRegistrationForm() {
    this.registrationForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  /**
   *
   */
  onSubmit() {
    console.log(this.registrationForm.value);
  }

}
