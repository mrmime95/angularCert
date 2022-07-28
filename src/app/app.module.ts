import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockHomeComponent } from './components/stock-home/stock-home.component';
import { StockComponent } from './components/stock/stock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndicatorComponent } from './components/indicator/indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    StockHomeComponent,
    StockComponent,
    IndicatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
