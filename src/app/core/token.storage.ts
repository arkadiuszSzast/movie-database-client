import { Injectable } from '@angular/core';


const TOKEN_KEY = 'Authorization';
const REFRESH_TOKEN_KEY = 'Refresh-token';

@Injectable({providedIn: 'root'})
export class TokenStorage {

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string) {
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY,  token);
  }

  public getRefreshToken(): string {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY);
  }

}