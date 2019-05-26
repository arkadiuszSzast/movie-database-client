import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { TokenStorage } from '../core/token.storage';
import 'rxjs/add/operator/map';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorage) { }

  username: string
  password: string
  error: boolean;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      (data: HttpResponse<Response>) => {
        if(data.status == 200) {
          this.tokenStorage.updateToken(data);
          this.router.navigate(['user']);
        }
      },
      (err: HttpErrorResponse) => {
        this.error = true;
      });
  }
}
