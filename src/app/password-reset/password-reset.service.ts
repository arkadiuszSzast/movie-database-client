import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppProperties } from '../core/app.properties';

@Injectable({ providedIn: 'root' })
export class PasswordResetService {

    constructor(private http: HttpClient) {
    }

    resetPasswordMailRequest(email: string): Observable<HttpResponse<Response>> {
        const params = new HttpParams().set('email', email);
        return this.http.post<Response>(AppProperties.RESET_PASSWORD_MAIL_REQUEST_ENDPOINT, {}, { observe: 'response', params: params });
    }

    resetPassword(password: string, token: string): Observable<any> {
        const headers = new HttpHeaders().append('Reset-password-token', token);
        return this.http.post<Response>(AppProperties.RESET_PASSWORD_ENDPOINT, {}, {
            observe: 'response',
            params: new HttpParams().set('password', password),
            headers: headers});
    }
}