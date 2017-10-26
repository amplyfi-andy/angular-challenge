import {Component, OnDestroy, OnInit} from '@angular/core';
import {Document} from '../models/document';
import {DataService} from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  providers: [DataService]
})

export class DocumentComponent implements OnInit, OnDestroy {
  id: number;
  document: Document;

  private sub: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.dataService.getDoc(this.id).subscribe( doc => {
        this.document = doc;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
