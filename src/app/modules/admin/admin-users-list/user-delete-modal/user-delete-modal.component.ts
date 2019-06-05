import { Component, OnInit } from '@angular/core';
import { IUser } from '../user-form.model';
import { UserUpdateService } from '../user-update.service';
import { MatDialogRef } from '@angular/material';
import { RoleEditModalComponent } from '../role-edit-modal/role-edit-modal.component';
import { UserService } from '../user.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { UserListService } from '../user-list.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-delete-modal',
  templateUrl: './user-delete-modal.component.html',
  styleUrls: ['./user-delete-modal.component.scss']
})
export class UserDeleteModalComponent implements OnInit {

  public user: IUser;

  constructor(private userUpdateService: UserUpdateService,
     private dialogRef: MatDialogRef<RoleEditModalComponent>, 
     private userService: UserService,
     private notificationService: NotificationService,
     private userListService: UserListService
     ) { }

  ngOnInit() {
    this.user = this.userUpdateService.user;
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id).pipe(first()).subscribe(res => {
      if(res.status == 200) {
        this.userListService.deleteUser(this.user);
        this.notificationService.success('User deleted');
      }
      this.dialogRef.close();
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
