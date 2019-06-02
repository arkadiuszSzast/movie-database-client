import { Component, OnInit } from '@angular/core';
import { IRole } from '../role.model';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { IUser } from '../user-form.model';
import { UserUpdateRolesService } from '../user-update-roles.service';
import { IRoleCheckbox } from './role-checkbox.model';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-role-edit-modal',
  templateUrl: './role-edit-modal.component.html',
  styleUrls: ['./role-edit-modal.component.scss']
})
export class RoleEditModalComponent implements OnInit {

  private roles: IRoleCheckbox[] = [];
  public user: IUser;

  constructor(private userService: UserService, 
    private userUpdateRoleService: UserUpdateRolesService, 
    public dialogRef: MatDialogRef<RoleEditModalComponent>,  
    private notificationService: NotificationService,
    private userListService: UserListService) { }

  ngOnInit() {
    this.user = this.userUpdateRoleService.user;
    this.userService.getRoles().pipe(first())
    .subscribe(roles => roles.forEach(role => this.roles.push({id: role.id, role: role.role, checked: this.user.roles.includes(role.role) ? true : false})));
  }

  updateRoles() {
    const checkedRoles = this.roles.filter(role => role.checked);
    this.userService.updateUserRoles(this.user.id, checkedRoles).pipe(first()).subscribe(res => {
      if(res.status == 200) {
        this.user.roles = checkedRoles.map(role => role.role);
        this.userListService.updateUser(this.user);
        this.notificationService.success('Roles updated');
      }
    });
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
}

}
