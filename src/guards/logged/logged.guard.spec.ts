import { TestBed } from '@angular/core/testing';

import { LoggedGuard } from './logged.guard';

describe('AuthGuard', () => {
  let guard: LoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
