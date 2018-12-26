import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCampaniaComponent } from './informacion-campania.component';

describe('InformacionCampaniaComponent', () => {
  let component: InformacionCampaniaComponent;
  let fixture: ComponentFixture<InformacionCampaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionCampaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
