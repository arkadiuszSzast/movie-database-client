import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TokenStorage } from './token.storage';


@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {
  }

  attemptAuth(username: string, password: string): Observable<HttpResponse<Response>> {
    return this.http.post<Response>('http://localhost:8080/login?username='+username+'&password='+password, null, {observe: 'response'});
  }

  getNewToken(): Observable<HttpResponse<Response>> {
    console.log('getting new token');
    return this.http.post<Response>('http://localhost:8080/api/auth/refresh?refreshToken=' + this.tokenStorage.getRefreshToken(), null, {observe: 'response'});
  }

  test(): Observable<HttpResponse<Response>> {
    console.log('testing secured ep');
    return this.http.post<Response>('http://localhost:8080/test', null, {observe: 'response'});
  }

}