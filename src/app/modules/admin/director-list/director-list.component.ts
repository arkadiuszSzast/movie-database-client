import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DirectorListService } from './director-list.service';
import { DirectorAddModalComponent } from './director-add-modal/director-add-modal.component';
import { DirectorUpdateService } from './director-update.service';
import { IDirector } from './director.model';
import { DirectorDeleteModalComponent } from './director-delete-modal/director-delete-modal.component';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrls: ['./director-list.component.scss']
})
export class DirectorListComponent implements OnInit {

  constructor(private dialog: MatDialog, private directorListService: DirectorListService, private directorUpdateService: DirectorUpdateService) { }

  ngOnInit() {
    this.directorListService.fetchDirectors();
  }

  addDirector(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(DirectorAddModalComponent,dialogConfig);
  }

  showDeleteDirector(director: IDirector) {
    this.directorUpdateService.setDirector(director);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(DirectorDeleteModalComponent,dialogConfig);
  }

}
