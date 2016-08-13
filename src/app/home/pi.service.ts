import { Injectable } from '@angular/core';
import { HmrState } from 'angular2-hmr';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from "rxjs";

class CredentialsModel {
  username: string;
  password: string;
}

@Injectable()
export class PiService {
  // @HmrState() is used by HMR to track the state of any object during HMR (hot module replacement)
  @HmrState() _state = { };
  localState = { value: '' };

  constructor(public http:Http) {

  }

  updatePiConfig():any
   {
    var creds = "username=admin&password=simon";
    let body = JSON.stringify({ name });
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization' , 'Basic ' + 'YWRtaW46c2ltb24=')
    let options = new RequestOptions({ headers: headers});
    this.http.get('http://192.168.1.15/api/config', options)
        .map(response => response.json())
        .subscribe(
        response => console.log(response),
        error=>console.log(error),
        () => console.log('Authentication Complete')
        );

    // return this.http.get("http://admin:simon@192.168.1.15/api/config/settings/gui")
    // // .map(res=>res.json())
    // // .do(res=>{this.localState.value = JSON.stringify(res)})
    // .do(res=>console.log(res.json()))

  }
}
