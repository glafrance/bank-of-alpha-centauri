import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AppHeaderComponent from "./components/app-header/app-header.component";

@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
