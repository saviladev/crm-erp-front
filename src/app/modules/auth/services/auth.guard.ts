import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Check if user and token exist
    if(!this.authService.user || !this.authService.token){
      this.authService.logout();
      return false;
    }

    let token = this.authService.token;

    // Check if token is valid
    try {
      let expiration = (JSON.parse(atob(token.split(".")[1]))).exp;
      if(Math.floor((new Date().getTime()/1000)) >= expiration){
        this.authService.logout();
        return false;
      }
    } catch (error) {
      console.error('Token parsing error:', error);
      this.authService.logout();
      return false;
    }
    
    return true;
  }
}
