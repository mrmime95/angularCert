import { StockService } from './../../services/stock.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Stock from '../../interfaces/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  @Input() stock!: Stock;

  @Output() remove = new EventEmitter();

  error?: string;
  isLoading: boolean = false;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.stockService.getQuoteOfSymbol(this.stock.symbol).subscribe(
      (quote) => {
        this.stock = {
          ...this.stock,
          ...quote,
        };

        this.error = '';
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        this.error = err.error.error;
      }
    );
  }

  handleRemoveClick(): void {
    console.log('REMOVE');
    this.remove.emit();
  }
}
