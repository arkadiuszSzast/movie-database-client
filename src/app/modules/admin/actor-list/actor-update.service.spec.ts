import { TestBed } from '@angular/core/testing';

import { ActorUpdateService } from './actor-update.service';

describe('ActorUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActorUpdateService = TestBed.get(ActorUpdateService);
    expect(service).toBeTruthy();
  });
});
