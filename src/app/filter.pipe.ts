import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(names: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) return names;
    // return updated ninjas array
    return names.filter(function(name) {
      return name.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
