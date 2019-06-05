import { Component, OnInit } from '@angular/core';
import { ActorUpdateService } from '../actor-update.service';
import { ActorListService } from '../actor-list.service';
import { MatDialogRef } from '@angular/material';
import { ActorService } from '../actor.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { IActor } from '../actor.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-actor-delete-modal',
  templateUrl: './actor-delete-modal.component.html',
  styleUrls: ['./actor-delete-modal.component.scss']
})
export class ActorDeleteModalComponent implements OnInit {
  
  public actor: IActor;

  constructor(private actorUpdateService: ActorUpdateService,
    private dialogRef: MatDialogRef<ActorDeleteModalComponent>, 
    private actorService: ActorService,
    private notificationService: NotificationService,
    private actorListService: ActorListService
    ) { }

  ngOnInit() {
    this.actor = this.actorUpdateService.actor;
  }

  deleteActor() {
    this.actorService.deleteActor(this.actor.id).pipe(first()).subscribe(res => {
      if(res.status == 200) {
        this.actorListService.deleteActor(this.actor);
        this.notificationService.success('Actor deleted');
      }
      this.dialogRef.close();
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
