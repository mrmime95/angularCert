import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import Stock, { defaultStock } from '../../interfaces/stock';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css'],
})
export class StockHomeComponent implements OnInit {
  stocks: Stock[] = [
    { ...defaultStock, name: 'TSLA' },
    { ...defaultStock, name: 'GOOGL' },
  ];

  stockFinderForm = new FormGroup({
    symbol: new FormControl(
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(5)],
      [this.stockService.isValidSymbol()]
    ),
  });

  constructor(private stockService: StockService) {}

  ngOnInit(): void {}

  trackStock(): void {
    console.log('TRACK');
  }
}
