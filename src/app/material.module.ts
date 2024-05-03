import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: []
})
export class MaterialModule { }