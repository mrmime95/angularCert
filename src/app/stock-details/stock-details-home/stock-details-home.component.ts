import { StockService } from './../../services/stock.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Changes from 'src/app/interfaces/changes';

@Component({
  selector: 'app-stock-details-home',
  templateUrl: './stock-details-home.component.html',
  styleUrls: ['./stock-details-home.component.css'],
})
export class StockDetailsHomeComponent implements OnInit {
  @Input() symbol!: string;
  @Input() changes: Changes[] = [];

  constructor(
    private route: ActivatedRoute,
    private stocksService: StockService
  ) {}

  ngOnInit(): void {
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';

    this.stocksService
      .getLastYearChangesOfSymbol(this.symbol)
      .subscribe((changes) => {
        this.changes = changes.slice(-3);
      });
  }
}
