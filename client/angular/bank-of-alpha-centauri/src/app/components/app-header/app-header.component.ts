import { Component, ViewChild } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import LogoComponent from "../logo/logo.component";
import { LogoutConfirmDialog } from "../dialogs/logout-confirm.dialog";
import AuthService from "../../services/auth.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  imports: [CommonModule, LogoComponent, MatButtonModule, MatDialogModule]
})
export default class AppHeaderComponent {
  @ViewChild('logoutButton', { static: false }) logoutButton!: MatButton;

  constructor(private authService: AuthService, private dialog: MatDialog) {
    this.authService.getIsLoggedInBS().subscribe({
      next: result => this.loggedIn = result,
      error: err => console.log('Failed to get updated login status: ', err)
    });
  }

  loggedIn: boolean = false;

  openLogoutDialog() {
    const dialogRef = this.dialog.open(LogoutConfirmDialog);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
      }
      this.restoreFocus();
    });
  }

  restoreFocus(): void {
    setTimeout(() => {
      if (this.logoutButton) {
        (this.logoutButton._elementRef.nativeElement as HTMLButtonElement).focus();
      } else {
        console.warn('Logout button reference not found.');
      }
    }, 0);
  }
}