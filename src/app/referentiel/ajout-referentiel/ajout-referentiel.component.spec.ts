import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutReferentielComponent } from './ajout-referentiel.component';

describe('AjoutReferentielComponent', () => {
  let component: AjoutReferentielComponent;
  let fixture: ComponentFixture<AjoutReferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutReferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutReferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
