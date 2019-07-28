import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatIconModule, MatSelectModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatIconModule, MatSelectModule],
    exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatIconModule, MatSelectModule],
})
export class CustomMaterialModule { }