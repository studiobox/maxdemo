import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginText: String;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.loginText = 'AMA Dashboard';
  }

  ngOnInit() {
  }

  authorization() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

}
