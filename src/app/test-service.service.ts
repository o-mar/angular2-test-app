import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  getTestData() {
    return ['test1', 'test2', 'test3', 'test4'];
  }

}
