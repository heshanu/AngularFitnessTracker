import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { AngularFireAuth } from "angularfire2/auth";

import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { TrainingService } from "../training/training.service";
import { MatSnackBar } from "@angular/material";
import { UIService } from "../shared/ui.service";

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  e: boolean = false;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiservice: UIService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(["/training"]);
      } else {
        this.trainingService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(["/login"]);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.uiservice.loadingStateChanged.next(true);
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.uiservice.loadingStateChanged.next(false);
      })
      .catch((error) => {
        this.uiservice.loadingStateChanged.next(false);
        console.log(error);
        this.uiservice.showSnakeBar(error,null,3000);
        /*
        this.snackbar.open(error.message,null,{
          duration:3000
        })*/
      });
  }

  login(authData: AuthData) {
    //spinner
    this.uiservice.loadingStateChanged.next(true);
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
        this.uiservice.loadingStateChanged.next(false);
      })
      .catch((error) => {
        console.log(error);
        //adeed spiinner
        this.uiservice.showSnakeBar(error,null,3000);
        this.uiservice.loadingStateChanged.next(false);
        /*
        this.snackbar.open(error.message, null, {
          duration: 3000,
        });*/
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
