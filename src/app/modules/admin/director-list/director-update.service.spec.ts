import { TestBed } from '@angular/core/testing';

import { DirectorUpdateService } from './director-update.service';

describe('DirectorUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectorUpdateService = TestBed.get(DirectorUpdateService);
    expect(service).toBeTruthy();
  });
});
