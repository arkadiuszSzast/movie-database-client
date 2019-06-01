import { Injectable } from '@angular/core';
import { IUser } from './user-form.model';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateRolesService {

  public user: IUser;

  constructor() { }

  setUser(user: IUser): void {
    this.user = user;
  } 
}
