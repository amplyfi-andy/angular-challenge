import { Injectable } from '@angular/core';
import { Document } from '../models/document';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  private dataUrl = 'api/data';  // URL to web api

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<Document[]> { //Returns all documents
    console.log('Fetching Documents');
    return this.http.get(this.dataUrl);
  }

  getDoc(id): Observable<Document> { // Returns a single documents.
    return new Observable( observer => {
      this.getDocuments().subscribe( docs => {
        let document: Document;
        docs.forEach(doc => {
          if (doc.id == id) {
            document = doc;
          }
        });
        if (document) {
          observer.next(document);
          observer.complete();
        } else {
          console.log('doc not found');
          observer.error();
        }
      });
    });
  }


}
