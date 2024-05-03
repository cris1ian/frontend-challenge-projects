import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  editing: boolean;
  title: string;
}

@Component({
  selector: 'app-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss']
})
export class DialogTitleComponent implements OnInit {
  title: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogTitleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

}
