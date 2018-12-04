import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FormControl, Validators, ValidationErrors } from '@angular/forms';

import { MemberConfirmComponent } from '../member-confirm/member-confirm.component';
import { ValidateService } from "../service/validate.service";


@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
  lastNameControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  firstNameControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  gradeControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public dialog: MatDialog, private validateService: ValidateService ) { }

  ngOnInit() {
  }

  openConfirm(): void {
    if(!this.lastNameControl.value || !this.firstNameControl.value || !this.gradeControl.value) {
      if(!this.lastNameControl.value) this.lastNameControl.markAsDirty();
      if(!this.firstNameControl.value) this.firstNameControl.markAsDirty();
      if(!this.gradeControl.value) this.gradeControl.markAsDirty();
      return;
    } 

    // this.analysisOption = this.validateService.getAnalyseOption(this.sentiment, this.entity);
    const dialogRef = this.dialog.open(MemberConfirmComponent, {
      width: '500px',
      data: {
        lastName: this.lastNameControl.value,
        firstName: this.firstNameControl.value,
        grade: this.gradeControl.value,
      }
    });
    console.log("lastName = " + this.lastNameControl.value);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
