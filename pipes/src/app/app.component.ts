import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  public message = "Welcome to pipe in angular!"
  public product = {
    name: "Samsung note 8",
    price: 800000
  }
  public date = new Date();
}
