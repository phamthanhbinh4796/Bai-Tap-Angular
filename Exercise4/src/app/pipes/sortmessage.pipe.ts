import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../model/message.class';
import { orderBy } from 'lodash'

@Pipe({
  name: 'sortmessage'
})
export class SortmessagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = orderBy(value, ['date']);
    return value;
  }

}
