import { Injectable } from '@angular/core';
import { ICategory } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryUpdateService {

  category: ICategory;

  constructor() { }

  setCategory(category: ICategory): void {
    this.category = category;
  }
}
