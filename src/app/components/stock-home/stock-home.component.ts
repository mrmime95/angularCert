import { map } from 'rxjs/operators';
import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import SymbolLookup from 'src/app/interfaces/symbol-lookup';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css'],
})
export class StockHomeComponent implements OnInit {
  trackedStocks: SymbolLookup[] = [];

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
    this.stockService
      .getFirstStockBySymbol(this.stockFinderForm.value.symbol)
      .subscribe((stockToTrack) => {
        this.trackedStocks.push(stockToTrack);
        localStorage.setItem(
          'trackedStocks',
          JSON.stringify(this.trackedStocks)
        );
      });
  }

  removeStock(index: number): void {
    this.trackedStocks?.splice(index, 1);
    localStorage.setItem('trackedStocks', JSON.stringify(this.trackedStocks));
  }
}
