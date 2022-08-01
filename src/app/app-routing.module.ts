import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comp/auth/login/login.component';
import { WelcomeComponent } from './comp/welcome/welcome.component';
import { SignupComponent } from './comp/auth/signup/signup.component';
import { TraningComponent } from './comp/traning/traning.component';
import { AuthGuard } from './comp/auth/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'traning',component:TraningComponent,canActivate:[AuthGuard]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
