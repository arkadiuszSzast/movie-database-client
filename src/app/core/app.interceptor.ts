import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorage } from './token.storage';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AppProperties } from './app.properties';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
  isRefreshingTokenInProgress = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private tokenStorage: TokenStorage, private router: Router, private authService: AuthService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    let request = this.applyToken(req);

    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse && err.status === 401 && this.isNotLoginPage(err)) {
          if (!this.tokenStorage.getRefreshToken ||
            this.isRefreshEp(err)) {
            this.router.navigate(['login']);
            throw err;
          }
          return this.authService.getNewToken()
            .pipe(tap(
              (success) => {  
                this.tokenStorage.updateToken(success); 
              },
              (error) => {
                throw error;
              },
              () => {
                this.isRefreshingTokenInProgress = false;
              }
            )).mergeMap(res => {
              return next.handle(this.applyToken(request));
            });
        }
        else {
          throw err;
        }
      })
    )
  }

  isNotLoginPage(err: HttpErrorResponse): boolean {
    return !err.url.includes(AppProperties.LOGIN_ENDPOINT);
  }

  isRefreshEp(err: HttpErrorResponse): boolean {
    return err.url.includes(AppProperties.REFRESH_ENDPOINT);
  }

  applyToken(req: HttpRequest<any>): HttpRequest<any> {
    if(this.tokenStorage.getToken()) {
      const headers = req.headers.set('Authorization', this.tokenStorage.getToken())
      return req.clone({headers: headers});
    }
    return req;
  }
}