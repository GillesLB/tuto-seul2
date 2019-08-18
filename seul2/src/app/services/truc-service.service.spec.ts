import { TestBed } from '@angular/core/testing';

import { TrucServiceService } from './truc-service.service';

describe('TrucServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrucServiceService = TestBed.get(TrucServiceService);
    expect(service).toBeTruthy();
  });
});
