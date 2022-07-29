import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Changes from 'src/app/interfaces/changes';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-details-home',
  templateUrl: './stock-details-home.component.html',
  styleUrls: ['./stock-details-home.component.css'],
})
export class StockDetailsHomeComponent implements OnInit {
  @Input() symbol!: string;
  @Input() changes: Changes[] = [];
  stockName?: string;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private stocksService: StockService
  ) {}

  ngOnInit(): void {
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';

    this.stocksService.getFirstStockBySymbol(this.symbol).subscribe((stock) => {
      this.stockName = `${stock.description} (${stock.symbol})`;
    });

    this.stocksService
      .getLastYearChangesOfSymbol(this.symbol)
      .subscribe((changes) => {
        this.changes = changes.slice(-3);
        this.isLoading = false;
      });
  }
}
