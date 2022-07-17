import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  studentForm!: FormGroup;

  submitted: boolean = false;
  isLoading: boolean = false;

  get f() {
    return this.studentForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  maxDate!:Date;

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.initForm();
  }
  initForm(): void {
    this.studentForm = this.formBuilder.group({
      email: [''],
      password: [''],
      bdate: [''],
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
    if (this.studentForm.valid) {
      this.isLoading = true;
      console.log(this.studentForm.value);
    }
  }

  /*
  clearForm(): void {
    this.submitted = false;
    this.studentForm.reset();
  }*/
}
