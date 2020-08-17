import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private adalService: MsAdalAngular6Service) { }

  ngOnInit(): void {
  }

  loginUser():void
  {
    this.adalService.login();
  }
}
