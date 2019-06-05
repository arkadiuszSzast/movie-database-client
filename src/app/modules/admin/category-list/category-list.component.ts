import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CategoryListService } from './category-list.service';
import { CategoryUpdateService } from './category-update.service';
import { CategoryAddModalComponent } from './category-add-modal/category-add-modal.component';
import { CategoryDeleteModalComponent } from './category-delete-modal/category-delete-modal.component';
import { ICategory } from './category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(private dialog: MatDialog, private categoryListService: CategoryListService, private categoryUpdateService: CategoryUpdateService) { }

  ngOnInit() {
    this.categoryListService.fetchCategories();
  }

  addCategory(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(CategoryAddModalComponent,dialogConfig);
  }

  showDeleteCategory(category: ICategory) {
    this.categoryUpdateService.setCategory(category);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "30%";
    this.dialog.open(CategoryDeleteModalComponent,dialogConfig);
  }

}
