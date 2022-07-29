import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockDetailsRoutingModule } from './stock-details-routing.module';
import { StockDetailsHomeComponent } from './stock-details-home/stock-details-home.component';
import { StockChangeComponent } from './components/stock-change/stock-change.component';
import { GlobalModule } from 'src/app/modules/global/global.module';

@NgModule({
  declarations: [StockDetailsHomeComponent, StockChangeComponent],
  imports: [CommonModule, StockDetailsRoutingModule, GlobalModule],
})
export class StockDetailsModule {}
