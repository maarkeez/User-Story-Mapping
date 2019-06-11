import { TestBed } from '@angular/core/testing';

import { UsmStoryService } from './usm-story.service';

describe('UsmStoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsmStoryService = TestBed.get(UsmStoryService);
    expect(service).toBeTruthy();
  });
});
