import { Component } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  public products = [];

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.products = this.testService.getProducts();
  }

}
