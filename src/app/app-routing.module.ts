import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DocumentsComponent} from './documents/documents.component';
import {KeywordsComponent} from './keywords/keywords.component';
import {DocumentComponent} from './documents/document.component';
import {WelcomeComponent} from "./welcome.component";

const routes: Routes = [
  { path: '',  component: WelcomeComponent },
  { path: 'keywords', component: KeywordsComponent },
  { path: 'document', component: DocumentsComponent},
  { path: 'document/:id', component: DocumentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
