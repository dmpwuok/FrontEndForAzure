import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UILogin';
  accessToken: string;  
 
  //constructor(private adalService: MsAdalAngular6Service) {  
  
  //}  
  
  
  //login(): void {  
    //this.adalService.login();  
  //}  
  
  //logout(): void {  
    //this.adalService.logout();  
  //}  
  
  //getLoggedInUser(): any {  
    //return this.adalService.LoggedInUserEmail;  
  //}  
  
  //getAccessToken(): Observable<any> {  
    //return this.adalService.acquireToken('backend-api-uri');  
  //}  
  
  //getToken(): string {  
    //return this.adalService.accessToken;  
  //}
}
  