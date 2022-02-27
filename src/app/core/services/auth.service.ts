import { Observable, map, BehaviorSubject } from 'rxjs';
import { deleteTokenUserModel, setTokenUserModel } from './../store/auth/auth.actions';

import { CookieService } from 'ngx-cookie-service';
import { CoreStates } from './../store/core.reducer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';

import { TokenUserModel } from './../models/tokenUserModel';
import { UserForLoginDto } from './../models/userForLoginDto';
import { UserForRegisterDto } from './../models/userForRegisterDto';
import { environment } from 'src/environments/environment';
import { LoginResultModel } from '../models/loginResultModel';
import { Router } from '@angular/router';
import { RegisterICModel } from 'src/app/features/rentals/models/registerICModel';
import { RegisterCCModel } from 'src/app/features/rentals/models/registerCCModel';

const role = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
const id = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  [x: string]: any;
  apiControllerUrl: string = `${environment.apiUrl}/Auth`;
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
    .select(states => states.appAuth)
    .pipe(map(state => state.tokenUserModel));

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private store: Store<CoreStates>,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {}
  public isAdminLogged = new BehaviorSubject(false);
  public isLogged = new BehaviorSubject(false);
  public userName = new BehaviorSubject(this.getUserName());
  getUserName() :string{
    let token = localStorage.getItem("token");
    if(this.isLoggedIn()){
      return this.jwtHelperService.decodeToken(token)["username"];
    }
    return "";
  }
  adminIsLoggedIn() : boolean{
    if(this.isLoggedIn()){
      let roles:string[] = this.getUserRoles();
      let result = roles.some( item => item == "Admin");
      this.isAdminLogged.next(result); 
      return result;
    }
    
    this.isAdminLogged.next(false);
    return false;
  }
  login(userForLoginDto: UserForLoginDto): Observable<LoginResultModel> {
    return this.httpClient.post<LoginResultModel>(`${this.apiControllerUrl}/login`, userForLoginDto);
  }
  getUserRoles():string[]{
    let token = localStorage.getItem("token");

    if(this.isLoggedIn()){
      let result = this.jwtHelperService.decodeToken(token)[role];
      //TO DO:burada result için kontrol yapılmalı. eğer null ise bir durum, eğer string ise başka bir durum söz konusu.
      if (typeof result =="string") {
        return [result];
      }else if(typeof result =="object"){
        return result;
      }
    }
    return [];
  }

  register(userForRegisterDto: UserForRegisterDto): Observable<LoginResultModel> {
    return this.httpClient.post<LoginResultModel>(
      `${this.apiControllerUrl}/register`,
      userForRegisterDto
    );
  }
  isAuthenticated() {
    let token = localStorage.getItem('token')

    //token varsa ve süresi dolmamışsa otantike et.
    if ( token && !this.jwtHelperService.isTokenExpired(token) ) {
      return true;
    }

    this.router.navigate(["login"]);
    return false;
  }

  logout() {
    this.cookieService.delete('token');
    this.deleteTokenUserModel();
    localStorage.removeItem('token');
    console.log("basıldı");
  }
  getUserId() : number{
    let token = localStorage.getItem("token");
    if(this.isLoggedIn()){
      return this.jwtHelperService.decodeToken(token)[id];
    }
    return null;    
  }
  
   

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel }));
  }

  // refleshTokenUserModel() {
  //   const tokenUserModel: TokenUserModel | undefined = this.getTokenUserModel();
  //   if (!tokenUserModel) return;

  //   const isAuthenticated = this.isAuthenticated(tokenUserModel);
  //   console.log(
  //     '🚀 ● file: auth.service.ts ● line 66 ● AuthService ● refleshTokenUserModel ● isAuthenticated',
  //     isAuthenticated
  //   );
  //   if (!isAuthenticated) return;

  //   this.setTokenUserModel(tokenUserModel);
  // }
 
  isLoggedIn():boolean{//birisi giris yaptı mı?
    if(this.jwtHelperService.tokenGetter()){
      this.isLogged.next(true); 
      return true
    } 
    this.isLogged.next(false);
    return false;
  }

  deleteTokenUserModel() {
    this.store.dispatch(deleteTokenUserModel());
  }

  getTokenUserModel(): TokenUserModel | undefined {
    const decodedToken = this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter());
    if (!decodedToken) return undefined;

    const tokenUserModel: TokenUserModel = {
      id: +decodedToken[Object.keys(decodedToken).find(k => k.endsWith('nameidentifier')) || ''],
      name: decodedToken[Object.keys(decodedToken).find(k => k.endsWith('name')) || ''],
      email: decodedToken.email,
      claims:
        decodedToken[Object.keys(decodedToken).find(k => k.includes('role')) || ''].split(',') || []
    };
    return tokenUserModel;
  }
  registerIndiviualCustomer(registerModel: RegisterICModel) {
    console.log(`${this.apiControllerUrl}IndividualCustomers/add`)
    
    return this.httpClient.post<LoginResultModel>(      
      `${this.apiControllerUrl}IndividualCustomers/add`,
      registerModel
    );
  }
  //http://localhost:5167/api/IndividualCustomers/add http://localhost:5167/api/

  registerCorporateCustomer(registerModel: RegisterCCModel) {
    return this.httpClient.post<LoginResultModel>(
      `${this.apiControllerUrl}CorporateCustomers/add`,
      registerModel
    );
  }
}
