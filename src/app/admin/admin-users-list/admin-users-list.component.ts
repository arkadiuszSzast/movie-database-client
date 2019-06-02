import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { IUser } from './user-form.model';
import { IRole } from './role.model';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { RoleEditModalComponent } from './role-edit-modal/role-edit-modal.component';
import { UserUpdateService } from './user-update.service';
import { UserListService } from './user-list.service';
import { UserDeleteModalComponent } from './user-delete-modal/user-delete-modal.component';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss']
})
export class AdminUsersListComponent implements OnInit {

  private users: IUser[];

  constructor(private dialog: MatDialog, private userUpdateService: UserUpdateService, private userListService: UserListService) { }

  ngOnInit() {
    this.userListService.fetchUsers();
  }

  showEditRoles(user: IUser) {
    this.userUpdateService.setUser(user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(RoleEditModalComponent,dialogConfig);
  }

  showDeleteUser(user: IUser) {
    this.userUpdateService.setUser(user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(UserDeleteModalComponent,dialogConfig);
  }

}
