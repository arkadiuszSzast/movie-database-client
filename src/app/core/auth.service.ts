import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from './token.storage';
import { AppProperties } from './app.properties';
import { IUserForm } from '../user/user-form.model';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {
  }

  attemptAuth(username: string, password: string): Observable<HttpResponse<Response>> {
    const params = new HttpParams().append('username', username).append('password', password);
    return this.http.post<Response>(AppProperties.LOGIN_ENDPOINT, {}, { observe: 'response', params: params });
  }

  getNewToken(): Observable<HttpResponse<Response>> {
    const headers = new HttpHeaders().append('Refresh-token', this.tokenStorage.getRefreshToken());
    return this.http.post<Response>(AppProperties.REFRESH_ENDPOINT, {}, { observe: 'response', headers: headers });
  }

  signUp(body: IUserForm, recaptchaResponse: string): Observable<HttpResponse<Response>> {
    const params = new HttpParams().append('recaptchaResponse', recaptchaResponse);
    return this.http.post<Response>(AppProperties.SIGN_UP_ENDPOINT, body, { observe: 'response', params: params });
  }

}