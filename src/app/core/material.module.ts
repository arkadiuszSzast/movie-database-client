import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatIconModule],
    exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatIconModule],
})
export class CustomMaterialModule { }