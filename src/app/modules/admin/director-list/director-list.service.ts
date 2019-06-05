import { Injectable } from '@angular/core';
import { DirectorService } from './director.service';
import { first } from 'rxjs/operators';
import { IDirector } from './director.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorListService {

  public directors: IDirector[];

  constructor(private directorService: DirectorService) { }

  public fetchDirectors() {
    this.directorService.getDirectors().pipe(first()).subscribe(directors => this.directors = directors);
 }

  public deleteDirector(director: IDirector) {
    this.directors = this.directors.filter(u => u.id != director.id);
  }

}
