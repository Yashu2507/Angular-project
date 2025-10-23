import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeetable } from './employeetable';

describe('Employeetable', () => {
  let component: Employeetable;
  let fixture: ComponentFixture<Employeetable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeetable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeetable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
