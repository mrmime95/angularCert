import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  @Input() stock: { name: string } = { name: '' };

  constructor() {}

  ngOnInit(): void {}
}
