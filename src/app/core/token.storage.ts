import { Injectable } from '@angular/core';
import { AppProperties } from './app.properties';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TokenStorage {

  constructor() { }

  public updateToken(res: HttpResponse<Response>) {
    var accessToken = res.headers.get(AppProperties.AUTHORIZATION_TOKEN_KEY);
    var refreshToken = res.headers.get(AppProperties.REFRESH_TOKEN_KEY);
    this._saveToken(accessToken);
    this._saveRefreshToken(refreshToken);
  }

  public signOut() {
    window.sessionStorage.removeItem(AppProperties.AUTHORIZATION_TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public getToken(): string {
    return sessionStorage.getItem(AppProperties.AUTHORIZATION_TOKEN_KEY);
  }

  public getRefreshToken(): string {
    return sessionStorage.getItem(AppProperties.REFRESH_TOKEN_KEY);
  }

  private _saveToken(token: string) {
    window.sessionStorage.removeItem(AppProperties.AUTHORIZATION_TOKEN_KEY);
    window.sessionStorage.setItem(AppProperties.AUTHORIZATION_TOKEN_KEY, token);
  }

  private _saveRefreshToken(token: string) {
    window.sessionStorage.removeItem(AppProperties.REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(AppProperties.REFRESH_TOKEN_KEY, token);
  }
}