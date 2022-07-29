import { StockService } from './../../services/stock.service';
import SymbolLookup from 'src/app/interfaces/symbol-lookup';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Stock from '../../interfaces/stock';
import QuoteResponse from 'src/app/interfaces/quote-response';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  @Input() symbolLookup!: SymbolLookup;
  @Input() stock!: Stock;

  @Output() remove = new EventEmitter();

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    console.log('ngOnInit', this.symbolLookup);

    this.stock = {
      name: `${this.symbolLookup.description} (${this.symbolLookup.symbol})`,
      todayChange: 0,
      currentPrice: 0,
      openingPrice: 0,
      highPrice: 0,
      symbol: this.symbolLookup.symbol,
    };
    this.stock.symbol = this.symbolLookup.symbol;

    this.stockService
      .getQuoteOfSymbol(this.symbolLookup.symbol)
      .subscribe((quote: QuoteResponse) => {
        this.stock = {
          name: `${this.symbolLookup.description} (${this.symbolLookup.symbol})`,
          todayChange: quote.dp,
          currentPrice: quote.c,
          openingPrice: quote.o,
          highPrice: quote.h,
          symbol: this.symbolLookup.symbol,
        };
      });
  }

  handleRemoveClick(): void {
    console.log('REMOVE');
    this.remove.emit();
  }
}
