import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material-module';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from "@angular/material/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MemberConfirmComponent } from './member-confirm/member-confirm.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberListComponent } from './member-list/member-list.component';
import { EventComponent } from './event/event.component';
// import { SearchComponent } from './search/search.component';
// import { SearchDetailComponent } from './search-detail/search-detail.component';
// import { ResultComponent } from './result/result.component';
// import { HistoryComponent } from './history/history.component';
// import { HistoryDetailComponent } from './history-detail/history-detail.component';

// import { ValidateService } from "./service/validate.service";

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberConfirmComponent,
    MemberAddComponent,
    MemberDetailComponent,
    MemberListComponent,
    EventComponent,
    // SearchComponent,
    // SearchDetailComponent,
    // ResultComponent,
    // HistoryComponent,
    // HistoryDetailComponent,
    // SearchConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MyMaterialModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [
    // ValidateService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent],
  entryComponents: [MemberConfirmComponent, MemberDetailComponent],  // modalで開かれる奴はここに入れる
})
export class AppModule { }
