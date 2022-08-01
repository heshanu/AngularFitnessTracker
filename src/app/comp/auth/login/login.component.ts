import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  submitted: boolean = false;
  isLoading: boolean = false;

  get f() {
    return this.loginForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  maxDate!: Date;

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.initForm();
  }
  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']

      //confirm:['']
      // email: [
      //   '',
      //   [Validators.required, Validators.pattern('[A-Za-z]{4,15}$')],
      // ],
      // password: [
      //   '',
      //   [Validators.required, Validators.pattern('[A-Za-z]{4,15}$')],
      // ],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.isLoading = true;
      console.log(this.loginForm.value);
      this.authService.login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      });
    }
  }
}
