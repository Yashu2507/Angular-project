import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment5 } from './assignment5';

describe('Assignment5', () => {
  let component: Assignment5;
  let fixture: ComponentFixture<Assignment5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
