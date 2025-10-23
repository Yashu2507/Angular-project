import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistItem } from './productlist-item';

describe('ProductlistItem', () => {
  let component: ProductlistItem;
  let fixture: ComponentFixture<ProductlistItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductlistItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlistItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
