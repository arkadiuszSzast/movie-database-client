import { Component, OnInit } from '@angular/core';
import { IActor } from './actor.model';
import { ActorService } from './actor.service';
import { first } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActorAddModalComponent } from './actor-add-modal/actor-add-modal.component';
import { ActorListService } from './actor-list.service';
import { ActorUpdateService } from './actor-update.service';
import { ActorDeleteModalComponent } from './actor-delete-modal/actor-delete-modal.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  constructor(private dialog: MatDialog, private actorListService: ActorListService, private actorUpdateService: ActorUpdateService) { }

  ngOnInit() {
    this.actorListService.fetchActors();
  }

  addActor(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(ActorAddModalComponent,dialogConfig);
  }

  showDeleteActor(actor: IActor) {
    this.actorUpdateService.setActor(actor);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(ActorDeleteModalComponent,dialogConfig);
  }

}
