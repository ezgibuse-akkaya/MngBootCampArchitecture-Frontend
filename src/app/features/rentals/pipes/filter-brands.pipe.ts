import { Pipe, PipeTransform } from '@angular/core';

import { Brand } from '../models/brand/brand';

@Pipe({
  name: 'filterBrands'
})
export class FilterBrandsPipe<T> implements PipeTransform {
  transform(value: Brand[], filterText: string): Brand[] {
    return value.filter((b: Brand) =>
      b.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
