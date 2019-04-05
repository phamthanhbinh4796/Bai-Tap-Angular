import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value: string, index: number): any {
    let array: string[];
    let result = '';
    array = value.split(' ', index);
    array.forEach(element => {
      result = result + ' ' + element;
    });
    return result;
  }

}
