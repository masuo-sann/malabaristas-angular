import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
import { MyMaterialModule } from './module/my-material-module';
import { AppRoutingModule } from './module/app-routing.module';

// Componentはdeclarationに含める。
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberListComponent } from './member-list/member-list.component';
import { EventComponent } from './event/event.component';

// Dialogに表示されるComponentはentryComponentsにも含める。
import { MemberConfirmComponent } from './member-confirm/member-confirm.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

// providersに含める。
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MalabaristasInterceptor } from "./interceptor/malabaristas"

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberConfirmComponent,
    MemberAddComponent,
    MemberDetailComponent,
    MemberListComponent,
    EventComponent,
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
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: HTTP_INTERCEPTORS, useClass: MalabaristasInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [MemberConfirmComponent, MemberDetailComponent],  // modalで開かれる奴はここに入れる
})
export class AppModule { }
