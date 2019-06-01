import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    `
  ]
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {

  }
  password: any;
  userName: any;
  mouseoverLogin;
  loginInvalid = false;

  login(formValue) {
  this.authService.loginUser(formValue.userName, formValue.password).subscribe(resp => {
    if (!resp) {
      this.loginInvalid = true;
    } else {
  this.router.navigate(['events']);
    }
  });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
