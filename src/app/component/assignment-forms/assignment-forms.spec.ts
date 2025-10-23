import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentForms } from './assignment-forms';

describe('AssignmentForms', () => {
  let component: AssignmentForms;
  let fixture: ComponentFixture<AssignmentForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
