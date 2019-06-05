import { TestBed } from '@angular/core/testing';

import { DirectorListService } from './director-list.service';

describe('DirectorListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectorListService = TestBed.get(DirectorListService);
    expect(service).toBeTruthy();
  });
});
