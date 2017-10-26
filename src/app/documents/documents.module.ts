import { NgModule } from '@angular/core';
import { DocumentComponent } from './document.component';
import { DocumentsComponent } from './documents.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DocumentComponent,
    DocumentsComponent
  ],
  imports: [CommonModule,
    HttpModule, RouterModule, FormsModule],
  providers: []
})
export class DocumentsModule { }
