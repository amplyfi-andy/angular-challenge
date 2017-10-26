import { NgModule } from '@angular/core';
import { KeywordsComponent } from './keywords.component';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DocfilterPipe} from './docfilter.pipe';
import {LimitPipe} from './limit.pipe';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    KeywordsComponent,
    DocfilterPipe,
    LimitPipe
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  providers: []
})
export class KeywordsModule { }
