import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UIService } from '../../shared/ui.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {
  maxDate;
 //spinner
isLoading=false;
private loadingSubs:Subscription;
  constructor(private authService: AuthService,private uiService:UIService) { }
  ngOnDestroy(): void {
    this.loadingSubs.unsubscribe();

  }

  ngOnInit() {
    this.loadingSubs=this.uiService.loadingStateChanged.subscribe(isLoading=>{
      this.isLoading=isLoading;
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() +2);
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

}
