import { StockDetailsModule } from './stock-details/stock-details.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockHomeComponent } from './components/stock-home/stock-home.component';
import { StockComponent } from './components/stock/stock.component';

@NgModule({
  declarations: [AppComponent, StockHomeComponent, StockComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
