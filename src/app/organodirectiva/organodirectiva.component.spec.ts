import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganodirectivaComponent } from './organodirectiva.component';

describe('OrganodirectivaComponent', () => {
  let component: OrganodirectivaComponent;
  let fixture: ComponentFixture<OrganodirectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganodirectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganodirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
