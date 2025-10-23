import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpring } from './user-spring';

describe('UserSpring', () => {
  let component: UserSpring;
  let fixture: ComponentFixture<UserSpring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSpring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSpring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
