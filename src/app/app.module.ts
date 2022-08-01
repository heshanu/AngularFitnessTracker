import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material themes
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
//compoentsMatNativeDateModule
import { MatNativeDateModule } from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { SignupComponent } from './comp/auth/signup/signup.component';
import { LoginComponent } from './comp/auth/login/login.component';
import { TraningComponent } from './comp/traning/traning.component';
import { CurrentTraningComponent } from './comp/traning/current-traning/current-traning.component';
import { NewTraningComponent } from './comp/traning/new-traning/new-traning.component';
import { PastTraningComponent } from './comp/traning/past-traning/past-traning.component';
import { WelcomeComponent } from './comp/welcome/welcome.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeaderComponent } from './shared/navigation/header/header.component';
import { SidenavComponent } from './shared/navigation/sidenav/sidenav.component';
import { StopTraningCompoent } from './comp/traning/current-traning/stop-traning.compoent';
import { AuthService } from './comp/auth.service';
import { AuthGuard } from './comp/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TraningComponent,
    CurrentTraningComponent,
    NewTraningComponent,
    PastTraningComponent,
    WelcomeComponent,
    NavigationComponent,
    HeaderComponent,
    SidenavComponent,
    StopTraningCompoent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule,AuthService,AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[StopTraningCompoent]
})
export class AppModule {}
