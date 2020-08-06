import { TestBed } from '@angular/core/testing';

import { DatosorganizacionService } from './datosorganizacion.service';

describe('DatosorganizacionService', () => {
  let service: DatosorganizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosorganizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
