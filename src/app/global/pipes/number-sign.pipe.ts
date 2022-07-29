import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSign',
})
export class NumberSignPipe implements PipeTransform {
  transform(value: number): unknown {
    if (!value) {
      return '';
    }

    return `${value > 0 ? '+' : ''}${value}`;
  }
}
