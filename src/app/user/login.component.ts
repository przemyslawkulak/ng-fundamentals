import { Component } from '@angular/core';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  password;
  username;

  login(formValue) {
    console.log(formValue);
  }
}
