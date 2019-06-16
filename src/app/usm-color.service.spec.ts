import { TestBed } from '@angular/core/testing';

import { UsmColorService } from './usm-color.service';

describe('UsmColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsmColorService = TestBed.get(UsmColorService);
    expect(service).toBeTruthy();
  });
});
