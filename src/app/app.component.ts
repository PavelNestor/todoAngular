import { Component } from "@angular/core";
import { Model } from "./models/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }
}