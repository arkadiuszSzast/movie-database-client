import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './movie.model';
import { AppProperties } from 'src/app/core/app.properties';
import { IMovieRest } from './movie-rest.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(AppProperties.MOVIES_ENDPOINT);
  }

  public addMovie(movieRest: IMovieRest): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(AppProperties.MOVIES_ENDPOINT, movieRest, { observe: 'response' });
  }

  deleteMovie(movieId: string): Observable<HttpResponse<Response>> {  
      return this.http.delete<Response>(AppProperties.DELETE_MOVIE_ENDPOINT.replace('${movieId}', movieId), { observe : 'response' });
  }
}
