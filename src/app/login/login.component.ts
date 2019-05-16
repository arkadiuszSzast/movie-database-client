import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { TokenStorage } from '../core/token.storage';
import { tokenKey } from '@angular/core/src/view';
import 'rxjs/add/operator/map';

const TOKEN_KEY = 'Authorization';
const REFRESH_TOKEN_KEY = 'Refresh-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router, public authService: AuthService, private tokenStorage: TokenStorage) { }

  username : string
  password : string

  login() : void {
    this.authService.attemptAuth(this.username, this.password).subscribe(res => {
      var accessToken = res.headers.get(TOKEN_KEY);
      var refreshToken = res.headers.get(REFRESH_TOKEN_KEY);
      this.tokenStorage.saveToken(accessToken);
      this.tokenStorage.saveRefreshToken(refreshToken);
      this.router.navigate(['user']);
    });
    
  }
}
