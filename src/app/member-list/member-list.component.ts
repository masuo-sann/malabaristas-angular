import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog } from '@angular/material';

import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { Member } from '../interface/member';

const ELEMENT_DATA: Member[] = [
  {lastName: 'Ishino', firstName: 'Akihisa', grade: 3},
  {lastName: 'Hukaya', firstName: 'Shiho', grade: 2},
  {lastName: 'Okazaki', firstName: 'Daiki', grade: 6},
  {lastName: 'Yamamoto', firstName: 'Takashi', grade: 2},
  {lastName: 'Saito', firstName: 'Masaki', grade: 4},
  {lastName: 'Kitawaki', firstName: 'Shun', grade: 4},
  {lastName: 'Sina', firstName: 'Shunpei', grade: 4},
];

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'grade'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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

}
