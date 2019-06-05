import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';
import { ActorListService } from '../actor-list.service';

@Component({
  selector: 'app-actor-add-modal',
  templateUrl: './actor-add-modal.component.html',
  styleUrls: ['./actor-add-modal.component.scss']
})
export class ActorAddModalComponent implements OnInit {

  actorAddForm: FormGroup;

  constructor(private actorService: ActorService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ActorAddModalComponent>,
    private actorListService: ActorListService) { }

  ngOnInit() {
    this.actorAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
  }

  get f() { return this.actorAddForm.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.actorAddForm.controls[controlName].hasError(errorName);
  }

  public create() {
    if (this.actorAddForm.valid) {
      this.actorService.addActor(this.actorAddForm.get("name").value, this.actorAddForm.get("surname").value).pipe(first()).subscribe(res => {
        if (res.status == 200) {
          this.actorListService.fetchActors();
        }
      });
      this.dialogRef.close();
    }
  }
}
