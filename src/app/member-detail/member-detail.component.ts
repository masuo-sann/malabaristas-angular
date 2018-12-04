import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MemberListComponent } from '../member-list/member-list.component';
import { Member } from '../interface/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MemberListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Member) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editMemberProfile(): string {
    console.log("member edit request!!");
    return "success!";
  }
}