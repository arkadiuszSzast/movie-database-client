import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user-form.model';
import { AppProperties } from 'src/app/core/app.properties';
import { IRole } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(AppProperties.USERS_ENDPOINT);
  }

  public getRoles(): Observable<IRole[]> {
    return this.http.get<IRole[]>(AppProperties.ROLES_ENDPOINT);
  }

  public updateUserRoles(userId: string, roles: IRole[]): Observable<HttpResponse<Response>> {
    return this.http.put<Response>(AppProperties.UPDATE_USER_ROLES_ENDPOINT.replace('${userId}', userId), roles, { observe : 'response' });
  }

  public deleteUser(userId: string): Observable<HttpResponse<Response>> {
    return this.http.delete<Response>(AppProperties.DELETE_USER_ENDPOINT.replace('${userId}', userId), { observe : 'response' });
  }
}
