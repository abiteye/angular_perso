import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutGroupeCompetencesComponent } from './ajout-groupe-competences.component';

describe('AjoutGroupeCompetencesComponent', () => {
  let component: AjoutGroupeCompetencesComponent;
  let fixture: ComponentFixture<AjoutGroupeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutGroupeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutGroupeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
