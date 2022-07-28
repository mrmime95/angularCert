import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChangeComponent } from './stock-change.component';

describe('StockChangeComponent', () => {
  let component: StockChangeComponent;
  let fixture: ComponentFixture<StockChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
