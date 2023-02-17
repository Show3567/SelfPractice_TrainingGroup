import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditTableService {
  givenTable = {
    header: ['column1', 'column2', 'column3'],
    rows: [
      {
        id: 1,
        values: ['1', 'a', 'a1'],
      },
      {
        id: 2,
        values: ['2', 'b', 'b1'],
      },
      {
        id: 3,
        values: ['3', 'c', 'c1'],
      },
      {
        id: 4,
        values: ['4', 'd', 'd1'],
      },
    ],
  };

  constructor() {}
}
