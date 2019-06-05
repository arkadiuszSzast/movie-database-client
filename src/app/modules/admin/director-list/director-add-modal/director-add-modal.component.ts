import { Component, OnInit } from '@angular/core';
import { DirectorListService } from '../director-list.service';
import { DirectorService } from '../director.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-director-add-modal',
  templateUrl: './director-add-modal.component.html',
  styleUrls: ['./director-add-modal.component.scss']
})
export class DirectorAddModalComponent implements OnInit {

  directorAddForm: FormGroup;

  constructor(private directorService: DirectorService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DirectorAddModalComponent>,
    private directorListService: DirectorListService) { }


  ngOnInit() {
    this.directorAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
  }

  get f() { return this.directorAddForm.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.directorAddForm.controls[controlName].hasError(errorName);
  }

  public create() {
    if (this.directorAddForm.valid) {
      this.directorService.addDirector(this.directorAddForm.get("name").value, this.directorAddForm.get("surname").value).pipe(first()).subscribe(res => {
        if (res.status == 200) {
          this.directorListService.fetchDirectors();
        }
      });
      this.dialogRef.close();
    }
  }

}
