import { TestBed } from '@angular/core/testing';

import { HTTPService } from './HTTP.service'

describe('HTTPService', () => {
  let service: HTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
