import { Component } from "@angular/core";
import LoginFormComponent from "../../components/login-form/login-form.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    LoginFormComponent
  ]
})
export default class HomePageComponent {

}