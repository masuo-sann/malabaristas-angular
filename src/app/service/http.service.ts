import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, ErrorObserver } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { MyHttpRequest } from "../interface/my-http-request";
import { Member } from '../interface/member';
import { error } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
    // 'Access-Control-Allow-Origin': '', 
    // 'Content-Type': 'application/json; charset=UTF-8',    
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  })
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private host: string = "https://z-mjf-operation.appspot.com/api/";
  private class: string = "member";
  private url: string = this.host + this.class;

  constructor(private http: HttpClient) { }
  
  public addMember (request: Member): any {
    console.log("httprequest! : " + this.host);
    return this.http.post(this.url + "!add", request, httpOptions).subscribe(res => console.log(res));
  }

  public listMember(): Observable<Member[]> {
    return this.http.post<Member[]>(this.url + "!list", null, httpOptions);
  }


}
