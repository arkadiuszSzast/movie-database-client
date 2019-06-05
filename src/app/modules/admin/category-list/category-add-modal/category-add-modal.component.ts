import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CategoryListService } from '../category-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category-add-modal',
  templateUrl: './category-add-modal.component.html',
  styleUrls: ['./category-add-modal.component.scss']
})
export class CategoryAddModalComponent implements OnInit {

  categoryAddForm: FormGroup;

  constructor(private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CategoryAddModalComponent>,
    private categoryListService: CategoryListService) { }

  ngOnInit() {
    this.categoryAddForm = this.formBuilder.group({
      category: ['', Validators.required],
    });
  }

  get f() { return this.categoryAddForm.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.categoryAddForm.controls[controlName].hasError(errorName);
  }

  public create() {
    if (this.categoryAddForm.valid) {
      this.categoryService.addCategory(this.categoryAddForm.get("category").value).pipe(first()).subscribe(res => {
        if (res.status == 200) {
          this.categoryListService.fetchCategories();
        }
      });
      this.dialogRef.close();
    }
  }

}
