import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  attemptAuth(username: string, password: string): Observable<HttpResponse<Response>> {
    return this.http.post<Response>('http://localhost:8080/login?username='+username+'&password='+password, null, {observe: 'response'});
  }

}