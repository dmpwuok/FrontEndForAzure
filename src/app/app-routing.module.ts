import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { from } from 'rxjs';
const routes: Routes = [
  {path: 'login-form', component: LoginFormComponent},
  { path: 'id_token',  redirectTo: '/dashboard',  pathMatch: 'full'},
  { path: '',  redirectTo: '/login-form',  pathMatch: 'full'},
  {path: 'dashboard', component:  DashboardComponent,canActivate: [AuthenticationGuard]},
  {path: 'test', component: DashboardComponent},
  {path: '**', component: LoginFormComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
