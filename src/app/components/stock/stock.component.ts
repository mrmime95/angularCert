import { Component, Input, OnInit } from '@angular/core';
import Stock, { defaultStock } from '../../interfaces/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  @Input() stock: Stock = defaultStock;

  constructor() {}

  ngOnInit(): void {}

  handleRemoveClick(): void {
    console.log('REMOVE');
  }
}
