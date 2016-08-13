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

    // todo: this is base64 encoding. Now hard coded. Fix this! :
    headers.append('Authorization' , 'Basic ' + 'YWRtaW46c2ltb24=')

    // headers.append('Authorization' , 'Basic ' + Base64.encode('username:password'))
    let options = new RequestOptions({ headers: headers});
    return this.http.get('http://192.168.1.15/api/config', options)
        .map(response => response.json())


    // return this.http.get("http://admin:simon@192.168.1.15/api/config/settings/gui")
    // // .map(res=>res.json())
    // // .do(res=>{this.localState.value = JSON.stringify(res)})
    // .do(res=>console.log(res.json()))

  }
}
