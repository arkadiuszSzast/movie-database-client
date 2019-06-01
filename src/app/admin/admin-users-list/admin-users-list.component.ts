import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { IUser } from './user-form.model';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss']
})
export class AdminUsersListComponent implements OnInit {

  private _unsubscribe: Subject<void> = new Subject<void>();
  private users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().pipe(first()).subscribe(users => this.users = users);
  }

  test() {
    this.userService.getUsers().pipe(first()).subscribe(users => console.log(users));
  }

}
