import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCampaniaComponent } from './card-campania.component';

describe('CardCampaniaComponent', () => {
  let component: CardCampaniaComponent;
  let fixture: ComponentFixture<CardCampaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCampaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
