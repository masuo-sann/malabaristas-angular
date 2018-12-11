import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from 'src/app/interface/api-response';
import { Member } from 'src/app/interface/member';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private addMemberUri: string = "/api/member!add";
  private listMemberUri: string = "/api/member!list";
  private updateMemberUri: string = "/api/member!update";
  private deleteMemberUri: string = "/api/member!delete";
  
  constructor(private http: HttpClient) { }

  public addMember(member: Member): Observable<ApiResponse<null>> {
    console.log("[INFO] addMember");
    return this.http.post<ApiResponse<null>>(this.addMemberUri, {member: member}, httpOptions);
  }

  public listMember(): Observable<ApiResponse<Member[]>> {
    console.log("[INFO] listMember");
    return this.http.post<ApiResponse<Member[]>>(this.listMemberUri, {}, httpOptions);
  }

  public updateMember(datastoreId: number): Observable<ApiResponse<null>> {
    console.log("[INFO] updateMember");
    return this.http.post<ApiResponse<null>>(this.updateMemberUri, {datastoreId: datastoreId}, httpOptions);
  }

  public deleteMember(datastoreId: number): Observable<ApiResponse<null>> {
    console.log("[INFO] deleteMember");
    return this.http.post<ApiResponse<null>>(this.deleteMemberUri, {datastoreId: datastoreId}, httpOptions);
  }
}
