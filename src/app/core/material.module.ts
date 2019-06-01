import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule],
    exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule],
})
export class CustomMaterialModule { }