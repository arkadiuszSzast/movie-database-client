import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IActor } from './actor.model';
import { Observable } from 'rxjs';
import { AppProperties } from 'src/app/core/app.properties';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  public getActors(): Observable<IActor[]> {
    return this.http.get<IActor[]>(AppProperties.ACTORS_ENDPOINT);
  }

  public addActor(name: string, surname: string): Observable<HttpResponse<Response>> {
    const actor = {
      name: name,
      surname: surname
    } as IActor;
    return this.http.post<Response>(AppProperties.ACTORS_ENDPOINT, actor, { observe : 'response' });
  }
}
