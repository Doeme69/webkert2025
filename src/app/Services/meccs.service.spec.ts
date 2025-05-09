import { TestBed } from '@angular/core/testing';

import { MeccsService } from './meccs.service';

describe('MeccsService', () => {
  let service: MeccsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeccsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
