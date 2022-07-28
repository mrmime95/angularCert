import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetailsHomeComponent } from './stock-details-home.component';

describe('StockDetailsHomeComponent', () => {
  let component: StockDetailsHomeComponent;
  let fixture: ComponentFixture<StockDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDetailsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
