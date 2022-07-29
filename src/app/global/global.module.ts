import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberSignPipe } from './pipes/number-sign.pipe';
import { MonthPipe } from './pipes/month.pipe';

@NgModule({
  declarations: [NumberSignPipe, MonthPipe],
  imports: [CommonModule],
  exports: [NumberSignPipe, MonthPipe],
})
export class GlobalModule {}
