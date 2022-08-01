import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { AuthService } from '../../../comp/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sideNavToggle = new EventEmitter<void>();
  constructor(private authService: AuthService) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
    this.authSubscription.unsubscribe();
  }

  isAuth: boolean = false;
  authSubscription!: Subscription;

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

  onToggleSideNav() {
    this.sideNavToggle.emit();
  }

  onLogOut(){
    this.authService.logout();
  }
}
