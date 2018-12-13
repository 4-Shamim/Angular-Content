import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-reference-variable';

  clickAction(value) {
    console.log(value);
  }
  clickAction1(value) {
    console.log(value);
  }

}
