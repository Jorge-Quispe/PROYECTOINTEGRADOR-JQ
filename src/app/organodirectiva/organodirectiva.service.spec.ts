import { TestBed } from '@angular/core/testing';

import { OrganodirectivaService } from './organodirectiva.service';

describe('OrganodirectivaService', () => {
  let service: OrganodirectivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganodirectivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
