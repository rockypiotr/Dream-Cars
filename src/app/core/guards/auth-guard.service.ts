import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, retry, throwIfEmpty} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../../features/auth/auth.service";
import {Value} from "sass";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (value) => {
          if (value) {
            return true;
          }
          return false;
        }
      )
  }
}

