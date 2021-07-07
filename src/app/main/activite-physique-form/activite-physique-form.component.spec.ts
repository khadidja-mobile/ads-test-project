import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitePhysiqueFormComponent } from './activite-physique-form.component';

describe('ActivitePhysiqueFormComponent', () => {
  let component: ActivitePhysiqueFormComponent;
  let fixture: ComponentFixture<ActivitePhysiqueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitePhysiqueFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitePhysiqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
