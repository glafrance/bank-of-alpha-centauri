import { Component } from "@angular/core";
import LogoComponent from "../logo/logo.component";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  imports: [LogoComponent]
})
export default class AppHeaderComponent {

}