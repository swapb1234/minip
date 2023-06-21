import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  


  constructor(private service:LoginService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(this.service.loginUser){
        return true;

      }else{
        this.router.navigate(['/Login']);
        alert("Enter Login credentials..");
        return false;
      }
  }
  
}
