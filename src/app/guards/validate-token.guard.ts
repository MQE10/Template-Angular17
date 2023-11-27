import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly AccountService: AccountService
  ) {


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validateToken(state);
  }

  validateToken(state: RouterStateSnapshot) {
    const hasToken = localStorage.getItem("TokenUser") != undefined ? true : false;

    if (!hasToken) this.router.navigateByUrl(`/login?next=${state.url}`);
    if (hasToken) {
      this.renovartoken();
    }
    return hasToken;

  }

  renovartoken() {
    this.AccountService.renovartoken().then((resp: any) => {
      localStorage.setItem('TokenUser', resp.token);
    });
  }
}
