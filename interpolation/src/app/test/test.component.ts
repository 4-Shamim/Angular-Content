import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Shamim";
  siteUrl = window.location.origin;
  
  constructor() { }

  ngOnInit() {
  }

  greeting() {
    return "Hello " + this.name + " this a method interpolation!";
  }

}
