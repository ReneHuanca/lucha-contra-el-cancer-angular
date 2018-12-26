import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCentroMedicoComponent } from './card-centro-medico.component';

describe('CardCentroMedicoComponent', () => {
  let component: CardCentroMedicoComponent;
  let fixture: ComponentFixture<CardCentroMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCentroMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCentroMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
