import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { CanActivateGuard } from './Guard/can-activate.guard';

const routes: Routes = [
 {path:"Home", component:HomeComponent, canActivate:[CanActivateGuard]},
 {path:"Login",component:LoginComponent},
 {path:"Registration", component:RegistrationComponent},
 {path:"About", component:AboutComponent},
 {path:"", redirectTo:"/WelcomePage", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
