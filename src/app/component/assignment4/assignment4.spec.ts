import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment4 } from './assignment4';

describe('Assignment4', () => {
  let component: Assignment4;
  let fixture: ComponentFixture<Assignment4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
