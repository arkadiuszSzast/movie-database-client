import { Injectable } from '@angular/core';
import { IActor } from './actor.model';
import { ActorService } from './actor.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorListService {

  public actors: IActor[];

  constructor(private actorService: ActorService) { }

  public fetchActors() {
    this.actorService.getActors().pipe(first()).subscribe(actors => this.actors = actors);
 }

  public deleteActor(actor: IActor) {
    this.actors = this.actors.filter(u => u.id != actor.id);
  }

}
