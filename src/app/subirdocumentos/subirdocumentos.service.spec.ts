import { TestBed } from '@angular/core/testing';

import { SubirdocumentosService } from './subirdocumentos.service';

describe('SubirdocumentosService', () => {
  let service: SubirdocumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirdocumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
