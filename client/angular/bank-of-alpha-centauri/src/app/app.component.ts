import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import AppHeaderComponent from "./components/app-header/app-header.component";
import { IdleService } from "./services/idle.service";

@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent, MatDialogModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private idleService: IdleService) {}
}
