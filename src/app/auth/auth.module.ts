import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from "../shared/shared.module";
@NgModule({
  declarations:[
    SignupComponent,
    LoginComponent
  ],
  imports:[
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  exports:[]
})
export class AuthModule{}

