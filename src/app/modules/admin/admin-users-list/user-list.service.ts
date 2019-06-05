import { Injectable } from '@angular/core';
import { IUser } from './user-form.model';
import { UserService } from './user.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  public users: IUser[];

  constructor(private userService: UserService) { }

  public fetchUsers() {
     this.userService.getUsers().pipe(first()).subscribe(users => this.users = users);
  }

  public updateUser(user: IUser) {
    const index = this.users.findIndex(u => u.id === user.id);
    if(index != -1) {
      this.users[index] = user;
    }
  }

  public deleteUser(user: IUser) {
    this.users = this.users.filter(u => u.id != user.id);
  }
}
