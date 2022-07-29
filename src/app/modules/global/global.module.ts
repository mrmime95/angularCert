import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberSignPipe } from './pipes/number-sign.pipe';
import { MonthPipe } from './pipes/month.pipe';
import { IndicatorComponent } from './components/indicator/indicator.component';

@NgModule({
  declarations: [NumberSignPipe, MonthPipe, IndicatorComponent],
  imports: [CommonModule],
  exports: [NumberSignPipe, MonthPipe, IndicatorComponent],
})
export class GlobalModule {}
