import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TokenStorage } from './token.storage';
import { AppProperties } from './app.properties';
import { IUserForm } from '../user/user-form.model';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {
  }

  attemptAuth(username: string, password: string): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(AppProperties.LOGIN_ENDPOINT + '?username=' + username + '&password=' + password, null, { observe: 'response' });
  }

  getNewToken(): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(AppProperties.REFRESH_ENDPOINT + '?refreshToken=' + this.tokenStorage.getRefreshToken(), null, { observe: 'response' });
  }

  signUp(body: IUserForm, recaptchaResponse: string): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(AppProperties.SIGN_UP_ENDPOINT + '?recaptchaResponse=' + recaptchaResponse, body, { observe: 'response' });
  }

  test(): Observable<HttpResponse<Response>> {
    return this.http.post<Response>('http://localhost:8080/test', null, { observe: 'response' });
  }

}