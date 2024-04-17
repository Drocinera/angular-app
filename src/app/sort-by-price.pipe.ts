import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(value: { name: string, price: number, image: string }[], sortOrder: 'asc' | 'desc' = 'asc'): { name: string, price: number, image: string }[] {
    if (sortOrder === 'asc') {
      return value.slice().sort((a, b) => a.price - b.price);
    } else {
      return value.slice().sort((a, b) => b.price - a.price);
    }
  }
}
