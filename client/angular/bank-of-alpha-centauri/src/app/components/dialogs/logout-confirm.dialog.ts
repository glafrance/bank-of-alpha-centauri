import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-confirm-dialog',
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Confirm Logout</h2>
    <mat-dialog-content>Are you sure you want to log out?</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="closeDialog(false)">Cancel</button>
      <button mat-button color="warn" (click)="closeDialog(true)">Logout</button>
    </mat-dialog-actions>
  `,
})
export class LogoutConfirmDialog {
  constructor(public dialogRef: MatDialogRef<LogoutConfirmDialog>) {}

  closeDialog(result: boolean): void {
    this.dialogRef.close(result);
  }
}
