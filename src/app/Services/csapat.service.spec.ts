import { TestBed } from '@angular/core/testing';

import { CsapatService } from './csapat.service';

describe('CsapatService', () => {
  let service: CsapatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsapatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
