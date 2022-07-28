import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-details-home',
  templateUrl: './stock-details-home.component.html',
  styleUrls: ['./stock-details-home.component.css'],
})
export class StockDetailsHomeComponent implements OnInit {
  @Input() id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }
}
