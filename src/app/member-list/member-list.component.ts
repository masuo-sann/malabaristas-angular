import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog } from '@angular/material';
import { MemberService } from "../service/server/member.service";
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { Member } from '../interface/member';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  ELEMENT_DATA: Member[] 
  displayedColumns: string[] = ['name', 'grade'];
  dataSource;

  constructor(public dialog: MatDialog, public memberService: MemberService) { }

  ngOnInit() {
    this.memberService.listMember().subscribe(
      resp => {
        this.ELEMENT_DATA = resp.body;
        console.log(resp.body);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      },
      error => console.log(error)
    )
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
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  listMember(members: Member[]): void {
    console.log(members);
  }

}
