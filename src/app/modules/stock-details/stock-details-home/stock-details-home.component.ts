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

    // this.stocksService
    //   .getLastYearChangesOfSymbol(this.symbol)
    //   .subscribe((changes) => {
    //     this.changes = changes.slice(-3);
    //     this.isLoading = false;
    //   });

    this.stocksService
      .getLast3MonthsChangesOfSymbol(this.symbol)
      .subscribe((changes) => {
        const d = new Date();
        const month_1 = d.getMonth() + 1 - 3;
        const month_2 = d.getMonth() + 1 - 2;
        const month_3 = d.getMonth() + 1 - 1;

        const changeOfMonth_1 = changes.find(
          (change) => change.month === month_1
        ) || { month: month_1 };
        const changeOfMonth_2 = changes.find(
          (change) => change.month === month_2
        ) || { month: month_2 };
        const changeOfMonth_3 = changes.find(
          (change) => change.month === month_3
        ) || { month: month_3 };
        this.changes = [changeOfMonth_1, changeOfMonth_2, changeOfMonth_3];
        this.isLoading = false;
      });
  }
}
