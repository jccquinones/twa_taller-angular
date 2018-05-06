import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewServiceService {
  url = 'https://jsonplaceholder.typicode.com';

  constructor(
    public _http: Http,
  ) { }

  getUrl() {
    return this.url;
  }
  getObjetos() {
    return this._http.get(this.url + '/photos').map(res => res.json());
  }
}
