import { TestBed } from '@angular/core/testing';

import { CombinationService } from './combination.service';

describe('CombinationService', () => {
  let service: CombinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinationService);
  });

  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
