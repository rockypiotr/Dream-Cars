import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  open(
    message: string,
    action: string,
    horizontalPosition: MatSnackBarHorizontalPosition,
    verticalPosition: MatSnackBarVerticalPosition,
    duration: number
  ) {
    this._snackBar.open(message, action, {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      duration: duration,
    });
  }
}
