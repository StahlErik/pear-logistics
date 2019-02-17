import { TestBed } from '@angular/core/testing';

import { LogisticsService } from './logistics.service';

describe('LogisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogisticsService = TestBed.get(LogisticsService);
    expect(service).toBeTruthy();
  });
});
