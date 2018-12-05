import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, ErrorObserver } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { MyHttpRequest } from "../interface/my-http-request";
import { Member } from '../interface/member';
import { error } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  })
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private host = "https://z-mjf-operation.appspot.com/datastore?method=add-member";
  private addMemberUri = "/datastore?method=add-member";

  constructor(private http: HttpClient) { }
  
  public addMember (request: MyHttpRequest): any {
    console.log("httprequest! : " + this.host);
    return this.http.post(this.host, request, httpOptions).subscribe(res => console.log(res));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', errorResponse.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${errorResponse.status}, `
      +`body was: ${errorResponse.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
