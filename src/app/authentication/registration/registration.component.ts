import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { UserApiService } from '../services/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserApiService,
    private router: Router
  ) {
    this.initRegistrationForm();
  }

  ngOnInit(): void { }

  /**
   *
   */
  initRegistrationForm() {
    this.registrationForm = this.fb.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  /**
   *
   */
  onSubmit() {
    let user = this.registrationForm.value;
    let userRegistered = this.userService.register(user);

    if (userRegistered) {
      this.router.navigate(['/login']);
    }
  }
}
