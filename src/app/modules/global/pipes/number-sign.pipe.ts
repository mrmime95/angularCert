import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSign',
})
export class NumberSignPipe implements PipeTransform {
  transform(value: number): string | number {
    if (value === 0) {
      return value;
    }

    return `${value > 0 ? '+' : ''}${value}`;
  }
}
