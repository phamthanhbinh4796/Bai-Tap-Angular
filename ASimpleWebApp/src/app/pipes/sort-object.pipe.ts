import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sortObject'
})
export class SortObjectPipe implements PipeTransform {

  transform(value: any, check: string): any {
    if (check === 'id'){
      value = orderBy(value, ['id']);
    }
    else if(check === 'firstName'){
      value = orderBy(value, ['firstName']);
    }
    else if(check === 'lastName'){
      value = orderBy(value, ['lastName']);
    }
    else if(check === 'birthday'){
      value = orderBy(value, ['birthday']);
    }
    else if(check === 'salary'){
      value = orderBy(value, ['salary']);
    }
    else if(check === 'email'){
      value = orderBy(value, ['email']);
    }
    return value;
  }

}
