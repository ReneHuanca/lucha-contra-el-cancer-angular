import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrevencionComponent } from './card-prevencion.component';

describe('CardPrevencionComponent', () => {
  let component: CardPrevencionComponent;
  let fixture: ComponentFixture<CardPrevencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPrevencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrevencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
