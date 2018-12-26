import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTratamientoComponent } from './card-tratamiento.component';

describe('CardTratamientoComponent', () => {
  let component: CardTratamientoComponent;
  let fixture: ComponentFixture<CardTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
