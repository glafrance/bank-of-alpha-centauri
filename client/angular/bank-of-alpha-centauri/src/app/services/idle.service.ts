import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { IdleWarningDialogComponent } from '../components/dialogs/idle-warning.dialog';
import AuthService from "./auth.service";

@Injectable({
  providedIn: 'root' // ✅ This allows it to be automatically provided
})
export class IdleService {
  private idleTimeout = 5 * 60 * 1000; // 5 minutes
  private warningTimeout = 15 * 1000;  // 15 seconds
  private idleTimer: any;
  private warningTimer: any;

  constructor(
    private router: Router, 
    private dialog: MatDialog, 
    private ngZone: NgZone,
    private authService: AuthService
  ) {
    this.resetTimers();
    this.startIdleTracking();
  }

  private startIdleTracking() {
    const events = ['mousemove', 'keydown', 'scroll', 'click'];

    events.forEach(event => {
      window.addEventListener(event, () => this.resetTimers());
    });
  }

  private resetTimers() {
    clearTimeout(this.idleTimer);
    clearTimeout(this.warningTimer);

    this.idleTimer = setTimeout(() => {
      this.showIdleWarning();
    }, this.idleTimeout);
  }

  private showIdleWarning() {
    this.ngZone.run(() => {
      const dialogRef = this.dialog.open(IdleWarningDialogComponent, {
        width: '400px',
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(continueSession => {
        if (continueSession) {
          this.resetTimers();
        } else {
          this.logoutUser();
        }
      });
    });

    this.warningTimer = setTimeout(() => {
      this.logoutUser();
    }, this.warningTimeout);
  }

  private logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.authService.setIsLoggedIn(false);
    this.router.navigateByUrl('/home');
  }
}
