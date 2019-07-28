import { Injectable } from '@angular/core';
import { IMovie } from './movie.model';
import { MovieService } from './movie.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  movies: IMovie[];

  constructor(private movieSerive: MovieService) { }

  public fetchMovies() {
    this.movieSerive.getMovies().pipe(first()).subscribe(movies => this.movies = movies);
  }

  public deleteMovie(movie: IMovie) {
    this.movies = this.movies.filter(u => u.id != movie.id);
  }
}
