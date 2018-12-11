import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MemberListComponent } from '../member-list/member-list.component';
import { Member } from '../interface/member';
import { MemberService } from '../service/server/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MemberListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Member,
    public memberService: MemberService
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editMemberProfile(): string {
    console.log("member edit request!!");
    return "success!";
  }

  updateMember(id: number): void {
    this.memberService.updateMember(id).subscribe(
      resp => console.log(resp.result),
      error => console.error(error)
    )
  }

  deleteMember(id: number): void {
    this.memberService.deleteMember(id).subscribe(
      resp => console.log(resp.result),
      error => console.error(error)
    )
  }
}