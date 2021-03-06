import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate{
    constructor(private authService: AuthService, private router:Router) { }
    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.currentUser.isAdmin) return true;

        this.router.navigate(["/no-access"]);
 
        return false;
    }


}
