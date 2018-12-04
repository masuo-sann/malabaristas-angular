import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  isAdd: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openAdd(): void {
    this.isAdd = !this.isAdd;
  }
}
