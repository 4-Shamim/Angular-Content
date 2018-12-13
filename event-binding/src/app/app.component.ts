import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding';
  public hello = "";
  public hello1 ;

  onClick() {
    console.log("Hello I'm here!");
    this.hello = "Hello I'm here!";
  }
  onClick1(event) {
    console.log("Hello I'm here!");
    console.log(event.type);
    this.hello1 = "Hello I'm here!";
  }

}
