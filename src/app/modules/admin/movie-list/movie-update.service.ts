import { Injectable } from '@angular/core';
import { IMovie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieUpdateService {

  movie: IMovie;

  constructor() { }

  setMovie(movie: IMovie): void {
    this.movie = movie;
  }
}
