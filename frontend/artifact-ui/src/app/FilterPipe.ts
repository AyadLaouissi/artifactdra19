import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.cardNames[0].value_.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}