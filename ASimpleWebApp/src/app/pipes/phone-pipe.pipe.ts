import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let subValue: string = value.replace(/-/g, '');
    value = subValue.slice(0, 3) + '-' + subValue.slice(3, 6) + '-' + subValue.slice(6);
    value = '(+84)' + value;
    return value;
  }

}
