import { TestBed } from '@angular/core/testing';

import { ServicioBromasService } from './servicio-bromas.service';

describe('ServicioBromasService', () => {
  let service: ServicioBromasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioBromasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
