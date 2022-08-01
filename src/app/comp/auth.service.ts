import { User } from './user.model';
import { AuthData } from './auth-data';
//import { retry } from 'rxjs';
import { Subject } from 'rxjs';

export class AuthService {

  //get observable and subsribe to emit
  authChange=new Subject<boolean>();
  private user!: User;

  registerUser(authdata: AuthData) {
    this.user={
      email:authdata.email,
      userId:Math.round(Math.random()*1000).toString()
    }
    this.authChange.next(true);
  }

  login(authdata:AuthData){
    this.user={
      email:authdata.email,
      userId:Math.round(Math.random()*1000).toString()
    }
    this.authChange.next(true);
  }

  logout(){
    this.user==null;
    this.authChange.next(false);
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    return this.user !=null;
  }
}


