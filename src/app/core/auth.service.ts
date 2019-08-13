import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders, HttpEvent } from '@angular/common/http';
import { TokenStorage } from './token.storage';
import { AppProperties } from './app.properties';
import { TokenService } from './token.service';
import { IUserForm } from '../modules/user/user-form.model';
import { first } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {

  @Output() emmitLoggedUsername: EventEmitter<String> = new EventEmitter();
  @Output() emmitUserRoles: EventEmitter<String[]> = new EventEmitter();

  constructor(private http: HttpClient, private tokenStorage: TokenStorage, private tokenService: TokenService) {
  }

  attemptAuth(username: string, password: string): Observable<HttpResponse<Response>> {
    const params = new HttpParams().append('username', username).append('password', password);
    return this.http.post<Response>(AppProperties.LOGIN_ENDPOINT, {}, { observe: 'response', params: params });
  }

  getNewToken(): Observable<HttpResponse<Response>> {
    const headers = new HttpHeaders().append('Refresh-token', this.tokenStorage.getRefreshToken());
    return this.http.post<Response>(AppProperties.REFRESH_ENDPOINT, {}, { observe: 'response', headers: headers });
  }

  getNewTokenAndSave() {
    this.getNewToken().pipe(first()).subscribe(token => this.tokenStorage.updateToken(token));
  }

  signUp(body: IUserForm, recaptchaResponse: string): Observable<HttpResponse<Response>> {
    const params = new HttpParams().append('recaptchaResponse', recaptchaResponse);
    return this.http.post<Response>(AppProperties.SIGN_UP_ENDPOINT, body, { observe: 'response', params: params });
  }

  logout(): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(AppProperties.LOGOUT_ENDPOINT, {}, { observe: 'response' });
  }

  isUserLogged(): boolean {
    return this.tokenStorage.getToken() ? true : false;
  }

  getLoggedUsername(): String {
    if(this.tokenStorage.getToken()) {
      var user = this.tokenService.decodeToken(this.tokenStorage.getToken())
      return user.username;
    }
    return null;
  }

  getUserRoles(): String[] {
    if(this.tokenStorage.getToken()) {
      var user = this.tokenService.decodeToken(this.tokenStorage.getToken())
      return user.roles;
    }
    return null;
  }

  getUserAvatar(): String {
    if(this.tokenStorage.getToken()) {
      var user = this.tokenService.decodeToken(this.tokenStorage.getToken())
      return user.avatar;
    }
    return null;
  }
}