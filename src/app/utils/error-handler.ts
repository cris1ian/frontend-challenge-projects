import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandler {

    constructor(private snackBar: MatSnackBar) { }

    open(message: string, action: string = 'Close', duration: number = 4000): void {
        this.snackBar.open(message, action, {
            duration: duration,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
        });
    }
}
