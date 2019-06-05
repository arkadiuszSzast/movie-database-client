import { Component, OnInit } from '@angular/core';
import { DirectorUpdateService } from '../director-update.service';
import { DirectorService } from '../director.service';
import { DirectorListService } from '../director-list.service';
import { MatDialogRef } from '@angular/material';
import { RoleEditModalComponent } from '../../admin-users-list/role-edit-modal/role-edit-modal.component';
import { NotificationService } from 'src/app/shared/notification.service';
import { _iterableDiffersFactory } from '@angular/core/src/application_module';
import { IDirector } from '../director.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-director-delete-modal',
  templateUrl: './director-delete-modal.component.html',
  styleUrls: ['./director-delete-modal.component.scss']
})
export class DirectorDeleteModalComponent implements OnInit {

  public director: IDirector;

  constructor(private directorUpdateService: DirectorUpdateService,
    private dialogRef: MatDialogRef<DirectorDeleteModalComponent>, 
    private directorService: DirectorService,
    private notificationService: NotificationService,
    private directorListService: DirectorListService
    ) { }

  ngOnInit() {
    this.director = this.directorUpdateService.director;
  }

  deleteDirector() {
    this.directorService.deleteDirector(this.director.id).pipe(first()).subscribe(res => {
      if(res.status == 200) {
        this.directorListService.deleteDirector(this.director);
        this.notificationService.success('Director deleted');
      }
      this.dialogRef.close();
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
