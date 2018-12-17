import { Component } from '@angular/core';
import { User } from './model/user';
import { Address } from './model/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Forms';
  public languages = ["Java", "Angular", "Ruby", "C++"];

  userModel = new User('', 'kamrul@mail.com', 65465432132, '', 'morning', true, new Address("", "",""));
}
