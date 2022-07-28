import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css'],
})
export class StockHomeComponent implements OnInit {
  stocks: { name: string }[] = [{ name: 'TSLA' }, { name: 'GOOGL' }];

  constructor() {}

  ngOnInit(): void {}
}
