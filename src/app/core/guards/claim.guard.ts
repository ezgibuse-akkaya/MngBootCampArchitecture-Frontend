// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree
// } from '@angular/router';

// import { AuthService } from '../services/auth.service';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';
// import { TokenUserModel } from './../models/tokenUserModel';

// @Injectable({
//   providedIn: 'root'
// })
// export class ClaimGuard implements CanActivate {
//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     private toastrService: ToastrService
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     const tokenUserModel: TokenUserModel | undefined = this.authService.getTokenUserModel();
//     if (!tokenUserModel) return false;

//     const requiredClaims: string[] = route.data['requiredClaims'] || [];

//     const isAuthenticated = this.authService.isAuthenticated(tokenUserModel, requiredClaims);
//     if (!isAuthenticated) {
//       this.toastrService.error('You are not authorized to access this page');
//       this.router.navigate(['/']);
//       return false;
//     }

//     return true;
//   }
// }
