import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { UserApiService } from '../services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserApiService,
    private router: Router
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {
  }

  /**
   *
   */
  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   *
   */
  onSubmit() {
    let credentials = this.loginForm.value;
    let loginResult = this.userService.login(credentials.email, credentials.password);

    if (loginResult) {
      this.router.navigate(['/home']);
    }
  }

}
