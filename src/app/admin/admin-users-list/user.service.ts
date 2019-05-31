import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user-form.model';
import { AppProperties } from 'src/app/core/app.properties';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(AppProperties.USERS_ENDPOINT);
  }
}
