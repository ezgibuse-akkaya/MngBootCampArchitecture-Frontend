import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserForRegisterDto } from '../../models/userForRegisterDto';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  passwordHidden: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register() {
   
    if (!this.registerForm.valid) return;

    let registerModel: UserForRegisterDto = { ...this.registerForm.value };
    console.log(registerModel);
    this.authService.register(registerModel).subscribe({
      next: response => {
        localStorage.setItem('token', response.accessToken.token);
       
      },
      complete: () => {
        this.toastrService.info("You've been registered successfully!");
        this.router.navigateByUrl('');
      }
  
    });
  }
}
