import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeadd } from './employeeadd';

describe('Employeeadd', () => {
  let component: Employeeadd;
  let fixture: ComponentFixture<Employeeadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeeadd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeeadd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
