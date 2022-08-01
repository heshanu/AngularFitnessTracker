import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/comp/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.authservice.logout();
  }



}
