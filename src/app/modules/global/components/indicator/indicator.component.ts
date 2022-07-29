import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css'],
})
export class IndicatorComponent implements OnInit {
  @Input() value?: number;

  constructor() {}

  ngOnInit(): void {}

  getArroPostition() {
    if (this.value === undefined) {
      return 'none';
    }
    if (this.value > 0) {
      return 'up';
    }
    return 'down';
  }
}
