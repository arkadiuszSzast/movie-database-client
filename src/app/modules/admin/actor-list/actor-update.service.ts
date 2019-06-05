import { Injectable } from '@angular/core';
import { IActor } from './actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorUpdateService {

  public actor: IActor;

  constructor() { }

  setActor(actor: IActor): void {
    this.actor = actor;
  }
}
