import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppProperties } from 'src/app/core/app.properties';

@Injectable({
  providedIn: 'root'
})
export class AvatarUploadService {

  constructor(private httpClient: HttpClient) { }

  public uploadAvatar(file: File): Observable<HttpResponse<Response>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<Response>(AppProperties.AVATAR_UPLOAD_ENDPOINT, formData , { observe : 'response' });
  }
}
