import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Member } from '../interface/member';

@Component({
  selector: 'app-member-confirm',
  templateUrl: './member-confirm.component.html',
  styleUrls: ['./member-confirm.component.css']
})
export class MemberConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MemberConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Member) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addMemberRequest(): string {
    console.log("member add request!!");
    return "success!";
  }
}
