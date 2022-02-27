import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { TokenUserModel } from './../../models/tokenUserModel';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

// import { UserDetail } from 'src/app/models/userDetail';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.authService.tokenUserModel$;
 
  constructor(private authService: AuthService,private router: Router) { }
  isSigin: boolean = false;
  userName: string = ""
  isLogged: boolean = false;
 toasterService:ToastrService
  adminIsLoggedIn: boolean = false
  myAdminSubscribtion: Subscription
  ngOnInit(): void {
    this.authService.isLogged.subscribe((val) => {
      this.isSigin = val;
    })
    this.adminIsLoggedIn = this.authService.adminIsLoggedIn();
    this.authService.userName.subscribe((name) => {
      this.userName = name;
    });
    this.myAdminSubscribtion = this.authService.isAdminLogged.subscribe(val => {
      this.adminIsLoggedIn = val;
    })

  }



  logout() {
    //this.authService.logout();
    // this.toasterService.success("Başarılı bir şekilde çıkış işlemi yapıldı.");
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);

    this.isSigin=false;
  }
 


}
