import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(list = [], limit: number) {
    return list.slice(0, limit);
  }

}
