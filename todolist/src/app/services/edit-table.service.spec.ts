import { TestBed } from '@angular/core/testing';

import { EditTableService } from './edit-table.service';

describe('EditTableService', () => {
  let service: EditTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTableService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
