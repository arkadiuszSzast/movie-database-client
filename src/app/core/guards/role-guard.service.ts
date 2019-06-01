import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    if(!this.authService.isUserLogged() ||
       !this.authService.getUserRoles().includes(expectedRole)) {
        this.router.navigate(['login']);
        return false;
       }
    return true;
  }
}
