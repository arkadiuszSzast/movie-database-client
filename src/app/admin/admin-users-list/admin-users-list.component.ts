import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { IUser } from './user-form.model';
import { IRole } from './role.model';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { RoleEditModalComponent } from './role-edit-modal/role-edit-modal.component';
import { UserUpdateRolesService } from './user-update-roles.service';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss']
})
export class AdminUsersListComponent implements OnInit {

  private users: IUser[];

  constructor(private userService: UserService,  private dialog: MatDialog, private userUpdateRoleService: UserUpdateRolesService, private userListService: UserListService) { }

  ngOnInit() {
    this.userListService.fetchUsers();
  }

  showEditRoles(user: IUser) {
    this.userUpdateRoleService.setUser(user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(RoleEditModalComponent,dialogConfig);
  }

}
