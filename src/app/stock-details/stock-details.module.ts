import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockDetailsRoutingModule } from './stock-details-routing.module';
import { StockDetailsHomeComponent } from './stock-details-home/stock-details-home.component';

@NgModule({
  declarations: [StockDetailsHomeComponent],
  imports: [CommonModule, StockDetailsRoutingModule],
})
export class StockDetailsModule {}
