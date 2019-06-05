import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IDirector } from './director.model';
import { Observable } from 'rxjs';
import { AppProperties } from 'src/app/core/app.properties';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private http: HttpClient) { }

  public getDirectors(): Observable<IDirector[]> {
    return this.http.get<IDirector[]>(AppProperties.DIRECTORS_ENDPOINT);
  }

  public addDirector(name: string, surname: string): Observable<HttpResponse<Response>> {
    const director = {
      name: name,
      surname: surname
    } as IDirector;
    return this.http.post<Response>(AppProperties.DIRECTORS_ENDPOINT, director, { observe : 'response' });
  }

  public deleteDirector(directorId: string): Observable<HttpResponse<Response>> {
    return this.http.delete<Response>(AppProperties.DELETE_DIRECTOR_ENDPOINT.replace('${directorId}', directorId), { observe : 'response' });
  }
}
