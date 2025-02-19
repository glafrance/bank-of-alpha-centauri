import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-idle-warning-dialog',
  templateUrl: './idle-warning-dialog.component.html',
  styleUrls: ['./idle-warning-dialog.component.css']
})
export class IdleWarningDialogComponent {
  countdown = 15; // Start countdown from 15 seconds

  constructor(public dialogRef: MatDialogRef<IdleWarningDialogComponent>) {
    this.startCountdown();
  }

  private startCountdown() {
    const interval = setInterval(() => {
      this.countdown--;

      if (this.countdown === 0) {
        clearInterval(interval);
        this.dialogRef.close(false); // User didn't respond, auto logout
      }
    }, 1000);
  }

  stayActive() {
    this.dialogRef.close(true); // User clicked "Stay Active"
  }
}
