import { User } from './user.model';
import { AuthData } from './auth-data';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  constructor(private router:Router){}
  //get observable and subsribe to emit
  authChange=new Subject<boolean>();
  private user!: User;

  registerUser(authdata: AuthData) {
    this.user={
      email:authdata.email,
      userId:Math.round(Math.random()*1000).toString()
    }
  this.authSuceessfully();
  }

  login(authdata:AuthData){
    this.user={
      email:authdata.email,
      userId:Math.round(Math.random()*1000).toString()
    };
    this.authSuceessfully();
  }

  logout(){
    this.user==null;
    this.authChange.next(false);
    this.router.navigate(['/login'])
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    return this.user !=null;
  }

  private authSuceessfully(){
    this.authChange.next(true);
    this.router.navigate(['/traning'])
  }
}


