import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../__servives/auth.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

  // tslint:disable-next-line:typedef
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const connectedUser = this.authService.connectedUserValue;
        var token = !!localStorage.getItem('token');
        console.log(connectedUser);
        if (connectedUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/connexion'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
