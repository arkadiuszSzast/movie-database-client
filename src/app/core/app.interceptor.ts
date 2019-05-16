import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import {TokenStorage} from './token.storage';
import {catchError, map, tap, flatMap} from 'rxjs/operators'; 
import { RequiredValidator } from '@angular/forms';
import 'rxjs/add/operator/do';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'Authorization';
const REFRESH_TOKEN_KEY = 'Refresh-token';


@Injectable({providedIn: 'root'})
export class TokenInterceptor implements HttpInterceptor {
  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(private tokenStorage: TokenStorage, private router: Router, private authService: AuthService) { }

  intercept(
    req: HttpRequest<any>,
     next: HttpHandler
    ):Observable<HttpEvent<any>> {
    const request = this.applyToken(req);
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log(`Request for ${req.urlWithParams} took  ms.`);
        }
      }, error => {
        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {

            if(this.tokenStorage.getRefreshToken() && !this.isRefreshingToken) {
              this.isRefreshingToken = true;
              this.authService.getNewToken().subscribe(res => {
                var accessToken = res.headers.get(TOKEN_KEY);
                var refreshToken = res.headers.get(REFRESH_TOKEN_KEY);
                this.tokenStorage.saveToken(accessToken);
                this.tokenStorage.saveRefreshToken(refreshToken);
              });
              this.isRefreshingToken = false;
              console.log('refresh token present')
            }
            else {
              this.router.navigate(['login']);
            }
            
          }        
        }
      })
    )

}

applyToken(req: HttpRequest<any>): HttpRequest<any> {
  const headers = new HttpHeaders({
    'Refresh-token' : this.tokenStorage.getRefreshToken() ? this.tokenStorage.getRefreshToken() : '',
    'Authorization' : this.tokenStorage.getToken() ? this.tokenStorage.getToken() : '',
  });
  return req.clone({headers});
} 

}