import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ICategory } from './category.model';
import { Observable } from 'rxjs';
import { AppProperties } from 'src/app/core/app.properties';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(AppProperties.CATEGORIES_ENDPOINT);
  }

  public addCategory(categoryName: string): Observable<HttpResponse<Response>> {
    const category = {
      category: categoryName,
    } as ICategory;
    return this.http.post<Response>(AppProperties.CATEGORIES_ENDPOINT, category, { observe : 'response' });
  }

  public deleteCategory(categoryId: string): Observable<HttpResponse<Response>> {
    return this.http.delete<Response>(AppProperties.DELETE_CATEGORY_ENDPOINT.replace('${categoryId}', categoryId), { observe : 'response' });
  }

}
