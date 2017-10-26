import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'docfilter'
})
export class DocfilterPipe implements PipeTransform {

  transform(value: any, keywordFilter: any): any {
    console.log(keywordFilter);
    if (!keywordFilter) {
      return null;
    } else if (keywordFilter && keywordFilter.length < 3) { // if user's input < 3 characters -> no results
      return null;
    } else {
      const bigramValues = value.bigrams.filter(bigram => {
        return bigram.keyword.indexOf(keywordFilter) !== -1;
      });
      const trigramValues = value.trigrams.filter(trigram => {
        return trigram.keyword.indexOf(keywordFilter) !== -1;
      });
      return bigramValues.concat(trigramValues);
    }
  }
}
