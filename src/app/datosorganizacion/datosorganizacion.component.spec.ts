import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosorganizacionComponent } from './datosorganizacion.component';

describe('DatosorganizacionComponent', () => {
  let component: DatosorganizacionComponent;
  let fixture: ComponentFixture<DatosorganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosorganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosorganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
