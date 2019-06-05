import { Component, OnInit } from '@angular/core';
import { ICategory } from '../category.model';
import { CategoryUpdateService } from '../category-update.service';
import { CategoryService } from '../category.service';
import { CategoryListComponent } from '../category-list.component';
import { CategoryListService } from '../category-list.service';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category-delete-modal',
  templateUrl: './category-delete-modal.component.html',
  styleUrls: ['./category-delete-modal.component.scss']
})
export class CategoryDeleteModalComponent implements OnInit {

  category: ICategory;

  constructor(private categoryUpdateService: CategoryUpdateService,
    private dialogRef: MatDialogRef<CategoryDeleteModalComponent>, 
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private categoryListService: CategoryListService
    ) { }

  ngOnInit() {
    this.category = this.categoryUpdateService.category;
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.category.id).pipe(first()).subscribe(res => {
      if(res.status == 200) {
        this.categoryListService.deleteCategory(this.category);
        this.notificationService.success('Category deleted');
      }
      this.dialogRef.close();
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
