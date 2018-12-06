import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog } from '@angular/material';

import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { Member } from '../interface/member';
import { HttpService } from "../service/http.service";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  isLoading: boolean = true;
  displayedColumns: string[] = ['name', 'grade'];
  dataSource: MatTableDataSource<Member>;

  constructor(public dialog: MatDialog, public httpService: HttpService) { }

  ngOnInit() {
    console.log("[DEBUG] init member-list");
    this.httpService.listMember()
    .subscribe(
      (memberList: Member[]) => this.finishLoad(memberList),
      error => console.error(error)
    );
  }

  finishLoad(memberList: Member[]): void{
    this.isLoading = false;
    this.dataSource = new MatTableDataSource(memberList);
    console.log("[INFO] finish load! memberList = " + memberList);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetail(member: Member): void {
    const dialogRef = this.dialog.open(MemberDetailComponent, {
      width: '500px',
      data: {
        lastName: member.lastName,
        firstName: member.firstName,
        grade: member.grade,
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

}
