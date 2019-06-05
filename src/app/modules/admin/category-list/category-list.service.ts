import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { ICategory } from './category.model';
import { first } from 'rxjs/internal/operators/first';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  categories: ICategory[];

  constructor(private categoryService: CategoryService) { }

  public fetchCategories() {
    this.categoryService.getCategories().pipe(first()).subscribe(categories => this.categories = categories);
  }

  public deleteCategory(category: ICategory) {
    this.categories = this.categories.filter(u => u.id != category.id);
  }

}
