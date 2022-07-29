import Changes from 'src/app/interfaces/changes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-change',
  templateUrl: './stock-change.component.html',
  styleUrls: ['./stock-change.component.css'],
})
export class StockChangeComponent implements OnInit {
  @Input() change!: Changes;

  constructor() {}

  ngOnInit(): void {}
}
