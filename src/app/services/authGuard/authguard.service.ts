import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  isLoggedIn:boolean=false;
  constructor() { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if(localStorage.getItem('loggedIn')=="true")
       this.isLoggedIn=true;
      else
       this.isLoggedIn=false; 
      return this.isLoggedIn;

  }
}
