import { Component, OnInit } from '@angular/core';
import {TestModel} from './shared/test.model';
import {TestService} from './shared/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests: TestModel[];
  constructor(public apiTest: TestService) { }

  ngOnInit() {
  }

  getAllDatas() {
    this.apiTest.getData().subscribe((test: TestModel[]) => {
      this.tests = test;
    });
  }

}
