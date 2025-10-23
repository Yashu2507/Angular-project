import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObervableDemo2 } from './obervable-demo2';

describe('ObervableDemo2', () => {
  let component: ObervableDemo2;
  let fixture: ComponentFixture<ObervableDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObervableDemo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObervableDemo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
