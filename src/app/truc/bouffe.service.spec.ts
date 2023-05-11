import { TestBed } from '@angular/core/testing';

import { BouffeService } from './bouffe.service';

describe('BouffeService', () => {
  let service: BouffeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouffeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
