import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return value; 
    }
    searchTerm = searchTerm.toLowerCase(); 
    return value.filter(product => product.name.toLowerCase().includes(searchTerm)); 
  }

}

