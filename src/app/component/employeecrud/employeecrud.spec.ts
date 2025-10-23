import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment6 } from './assignment6';

describe('Assignment6', () => {
  let component: Assignment6;
  let fixture: ComponentFixture<Assignment6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
