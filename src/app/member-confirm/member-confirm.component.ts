import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Member } from '../interface/member';
import { MemberService } from '../service/server/member.service';

@Component({
  selector: 'app-member-confirm',
  templateUrl: './member-confirm.component.html',
  styleUrls: ['./member-confirm.component.css']
})
export class MemberConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MemberConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public member: Member,
    public memberService: MemberService,
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addMember(member: Member): void {
    this.memberService.addMember(this.member).subscribe(
      resp => console.log(resp.result),
      error => console.error(error)
    )
  }
}
