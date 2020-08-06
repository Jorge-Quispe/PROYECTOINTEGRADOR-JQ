import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirdocumentosComponent } from './subirdocumentos.component';

describe('SubirdocumentosComponent', () => {
  let component: SubirdocumentosComponent;
  let fixture: ComponentFixture<SubirdocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirdocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirdocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
