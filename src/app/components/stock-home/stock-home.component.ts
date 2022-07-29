import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Stock from 'src/app/interfaces/stock';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css'],
})
export class StockHomeComponent implements OnInit {
  trackedStocks: Stock[] = [];
  isAdding: boolean = false;

  stockFinderForm = new FormGroup({
    symbol: new FormControl(
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(5)],
      // TODO: maybe another validation if the stock is allready tracked
      [this.stockService.isValidSymbol()]
    ),
  });

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.trackedStocks = JSON.parse(
      localStorage.getItem('trackedStocks') || '[]'
    );
  }

  trackStock(): void {
    this.isAdding = true;
    this.stockService
      .getFirstStockBySymbol(this.stockFinderForm.value.symbol)
      .subscribe((stockToTrack) => {
        this.trackedStocks.push({
          name: `${stockToTrack.description} (${stockToTrack.symbol})`,
          todayChange: 0,
          currentPrice: 0,
          openingPrice: 0,
          highPrice: 0,
          symbol: stockToTrack.symbol,
        });
        localStorage.setItem(
          'trackedStocks',
          JSON.stringify(this.trackedStocks)
        );
        this.isAdding = false;
        this.stockFinderForm.patchValue({
          symbol: '',
        });
      });
  }

  removeStock(index: number): void {
    this.trackedStocks?.splice(index, 1);
    localStorage.setItem('trackedStocks', JSON.stringify(this.trackedStocks));
  }
}
