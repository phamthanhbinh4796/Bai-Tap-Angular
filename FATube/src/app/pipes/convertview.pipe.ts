import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertview'
})
export class ConvertviewPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let result: number;
    let result1: string;
    let output: string;
    if (value >= 1000000) {
      result = value / 1000000;
      result1 = result.toFixed(1);
      output = result1 + 'TR';
    }
    if (value < 1000000) {
      result = value / 1000;
      result1 = result.toFixed(0);
      output = result1 + 'N';
    }
    return output;
  }

}
