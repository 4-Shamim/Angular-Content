import { Component } from '@angular/core';
import { User } from './model/user';
import { Address } from './model/address';
import { EnrollmentService } from './service/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Forms';
  languageHasError = true;
  errorMsg = "";

  public languages = ["Java", "Angular", "Ruby", "C++"];

  userModel = new User('Kamrul', 'kamrul@mail.com', 65465432132, 'default', 'morning', true, new Address("", "",""));

  constructor(private enrollmentService:EnrollmentService) {}

  validateLanguage(value:string) {
    if(value === "default") {
      this.languageHasError = true;
    } else {
      this.languageHasError = false;
    }
  }

  onSubmit() {
    this.enrollmentService.enroll(this.userModel)
      .subscribe(data => console.log("Success! ", data),
      err => this.errorMsg = err.statusText
      )
  }
}
