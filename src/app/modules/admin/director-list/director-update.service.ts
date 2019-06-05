import { Injectable } from '@angular/core';
import { IDirector } from './director.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorUpdateService {

  director: IDirector;

  constructor() { }

  setDirector(director: IDirector): void {
    this.director = director;
  }
}
