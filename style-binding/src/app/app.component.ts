import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style-binding';

  public hasError = true;
  public highlight = "orange";
  public demoStyle = {
    color: "blue",
    fontStyle: "italic"
  }

}
