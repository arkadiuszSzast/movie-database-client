import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil, first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth.service';
import { TokenStorage } from 'src/app/core/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorage) { }

  username: string
  password: string
  error: boolean;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).pipe(first()).subscribe(
      (data: HttpResponse<Response>) => {
        if(data.status == 200) {
          this.tokenStorage.updateToken(data);
          this.authService.emmitLoggedUsername.emit(this.authService.getLoggedUsername());
          this.authService.emmitUserRoles.emit(this.authService.getUserRoles());
          this.router.navigate(['user']);
        }
      },
      (err: HttpErrorResponse) => {
        this.error = true;
      });
  }

}
