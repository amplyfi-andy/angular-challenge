import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Document } from '../models/document';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  providers: [ DataService ]
})


export class DocumentsComponent implements OnInit {

  documents: Document[];
  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    this.dataService.getDocuments().subscribe( documents => {
      this.documents = documents;
    });
  }
}
