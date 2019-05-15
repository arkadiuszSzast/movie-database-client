import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { TokenStorage } from '../core/token.storage';
import { tokenKey } from '@angular/core/src/view';
import 'rxjs/add/operator/map';


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
      var token = res.headers.get('Authorization').replace('Bearer ', '');
      this.tokenStorage.saveToken(token);
      this.router.navigate(['user']);
    });
    
  }
}
