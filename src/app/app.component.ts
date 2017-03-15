import { Component, OnInit } from '@angular/core';

import { TestService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public TestService: TestService) {}

  serviceData = [];
  ngOnInit() {
    this.serviceData = this.TestService.getTestData();
  }

  title = 'app works!';
  anotherTitle = 'and this is great!';

  testArray = ['one', 'two', 'three', 'go...'];

  flag = true;
  buttonToggle(): void {
    this.flag = !this.flag;
  }
}
