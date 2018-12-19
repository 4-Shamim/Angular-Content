import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/username.validator';
import { passwordValidator } from '../shared/password.validator';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private registrationService: RegistrationService) { }

  // registrationForm = new FormGroup({
  //   username: new FormControl("Kamrul"),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   address:new FormGroup({
  //     street: new FormControl(""),
  //     city: new FormControl(""),
  //     country: new FormControl("")
  //   })
  // });

  ngOnInit() {

    this.registrationForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      password: [""],
      confirmPassword: [""],
      address: this.formBuilder.group({
        street: [""],
        city: [""],
        country: [""]
      }),
      email: [""],
      subscribe: [false],
      alternateEmails: this.formBuilder.array([])
    }, {validator: passwordValidator});

    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if(checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });

  }

  get userName() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    console.log(this.alternateEmails.length);
    this.alternateEmails.push(this.formBuilder.control(''));
  }

  loadApiData() {
    // this.registrationForm.setValue({
    //   username: "Kamrul",
    //   password: "test",
    //   confirmPassword: "test",
    //   address: {
    //     street: "18 Banani",
    //     city: "Dhaka",
    //     country: "BD"
    //   }
    // });

    /* If you don't want to set all value  */
    this.registrationForm.patchValue({
      username: "Kamrul",
      password: "test",
      confirmPassword: "test"
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.registrationService.register(this.registrationForm.value).subscribe(
      response => {
        console.log("Success!", response)
      },
      error => console.log("Error!", error)
    );
  }

}
