import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';
import { MsAdalAngular6Module,AuthenticationGuard } from 'microsoft-adal-angular6';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MsAdalAngular6Module.forRoot({  
      tenant: 'b55f2784-c16f-4066-b93f-59f37242bc48',  
      clientId: '51c7fb2e-bb9e-450c-83c4-52c1d56dc820',  
      redirectUri: 'https://logforpdfgenerator.azurewebsites.net/#/dashboard',  
      endpoints: {  
        'api': '51c7fb2e-bb9e-450c-83c4-52c1d56dc820', 
      },  
      navigateToLoginRequestUrl: false,  
      cacheLocation: 'localStorage',  
      postLogoutRedirectUri: 'https://logforpdfgenerator.azurewebsites.net/#/login-form',
    }), 
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
