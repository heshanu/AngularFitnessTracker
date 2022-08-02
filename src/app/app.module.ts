import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
//import auth module instead sing login c
//import { SignupComponent } from './auth/signup/signup.component';
//import { LoginComponent } from './auth/login/login.component';
import { TraningModule } from './training/training.module';
//import { TrainingComponent } from './training/training.component';
//import { CurrentTrainingComponent } from './training/current-training/current-training.component';
//import { NewTrainingComponent } from './training/new-training/new-training.component';
//import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
//import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { environment } from '../environments/environment';

import { MAT_DATE_LOCALE } from '@angular/material/core'
import { UIService } from './shared/ui.service';
import { StopTrainingComponent } from './training/current-training/stop-training.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AuthModule,
    TraningModule
  ],
  providers: [AuthService, TrainingService,UIService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
