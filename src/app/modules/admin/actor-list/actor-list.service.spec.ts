import { TestBed } from '@angular/core/testing';

import { ActorListService } from './actor-list.service';

describe('ActorListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActorListService = TestBed.get(ActorListService);
    expect(service).toBeTruthy();
  });
});
