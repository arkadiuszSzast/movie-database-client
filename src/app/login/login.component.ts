import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { TokenStorage } from '../core/token.storage';
import 'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorage) { }

  username: string
  password: string

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(res => {
      this.tokenStorage.updateToken(res);
      this.router.navigate(['user']);
    });

  }
}
