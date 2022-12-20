import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuthenticated = !!user
    if (!isAuthenticated) {
      alert("You don't have acces to this page, please log in")
      this.router.navigate(['login']);
    }
    return isAuthenticated;
  }
}

