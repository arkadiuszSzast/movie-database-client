import { Component, OnInit } from '@angular/core';
import { IActor } from './actor.model';
import { ActorService } from './actor.service';
import { first } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActorAddModalComponent } from './actor-add-modal/actor-add-modal.component';
import { ActorListService } from './actor-list.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  constructor(private dialog: MatDialog, private actorListService: ActorListService) { }

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

}
