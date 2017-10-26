import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';
import {Document} from '../models/document';

declare interface Ngram {
  keyword: string;
  count: number;
  documentIDs: Document[];
}

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
})
export class KeywordsComponent implements OnInit {
  ngrams;
  keywordFilter = '';
  selectedNgram: Ngram;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getNgramData().subscribe(result => {
      console.log('ngrams:', result);
      this.ngrams = result;
    });
  }

  selectNgram(ngram: Ngram) {
    this.selectedNgram = ngram;
  }

  getNgramData() {
    return new Observable(observer => {
      this.dataService.getDocuments().subscribe( docs => {
        const ngrams: any = {};
        ngrams.bigrams = [];
        ngrams.trigrams = [];
        docs.forEach(doc => {
          doc.m_BiGrams.forEach(bigram => {
            const existingBigram: Ngram = ngrams.bigrams.find((savedBigram: Ngram) => {
              return savedBigram.keyword === bigram;
            });
            if (existingBigram) {
              existingBigram.count ++;
              existingBigram.documentIDs.push(doc);
            } else {
              ngrams.bigrams.push({
                keyword: bigram,
                count: 1,
                documentIDs: [doc]
              });
            }
          });
          doc.m_TriGrams.forEach(trigram => {
            const existingTrigram: Ngram = ngrams.trigrams.find((savedTrigram: Ngram) => {
              return savedTrigram.keyword === trigram;
            });
            if (existingTrigram) {
              existingTrigram.count ++;
              existingTrigram.documentIDs.push(doc);
            } else {
              ngrams.trigrams.push({
                keyword: trigram,
                count: 1,
                documentIDs: [doc]
              });
            }
          });
        });
        ngrams.bigrams.sort((a, b) => {
          return b.count - a.count;
        });
        ngrams.trigrams.sort((a, b) => {
          return b.count - a.count;
        });
        observer.next(ngrams);
        observer.complete();
      });
    });
  }
}
