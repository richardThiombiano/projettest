import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TestModel} from './test.model';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get<TestModel[]>(environment.apiUrl + '/unitemesures');
  }

}
