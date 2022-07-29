import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month',
})
export class MonthPipe implements PipeTransform {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  transform(value: number): unknown {
    return this.months[value - 1];
  }
}
