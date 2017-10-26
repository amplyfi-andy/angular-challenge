import { InMemoryDbService } from 'angular-in-memory-web-api';
import { mockdata } from '../mocks/data-mock';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let data = mockdata;
    return {data};
  }
}
