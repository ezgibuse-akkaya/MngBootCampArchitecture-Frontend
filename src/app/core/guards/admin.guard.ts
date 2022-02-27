import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private authService : AuthService
) {}

//2 parametre alıyor bu metot. boolean veya UrlTree dönüyor. Onların Observable veya Promiselerini de dönebiliyor.
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{

    //eğer admin otantike edildiyse true dön.
    if (this.authService.isAuthenticated() && this.authService.adminIsLoggedIn()){
        return true;
    }

    //eğer admin otantike edilmediyse false dön, login sayfasına yönlendir ve giriş yapma uyarısı ver.
      this.router.navigate(["login"]);
      this.toastrService.error("Sisteme giriş yetkiniz bulunmamaktadır!!");
      return false;
}
  
  
}
