import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieItem } from './categorie-item';

describe('CategorieItem', () => {
  let component: CategorieItem;
  let fixture: ComponentFixture<CategorieItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
