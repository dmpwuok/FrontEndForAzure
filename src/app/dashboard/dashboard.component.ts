import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adalService: MsAdalAngular6Service,) { }

  ngOnInit(): void {
  }

  goToUrl(): void {
    window.location.href = 'https://localhost:44329';
  }  
  logoutUser():void
  {
    this.adalService.logout();
  }
}
