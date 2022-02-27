import { Pipe, PipeTransform } from '@angular/core';
import { BrandListModel } from '../models/brand/brandListModel';
import { ModelListModel } from '../models/model/modelListModel';

@Pipe({
  name: 'filterBrandsList'
})
export class FilterBrandsListPipe implements PipeTransform {
  
  transform(value: BrandListModel[], filterText: string): BrandListModel[] {
    return value.filter((b: BrandListModel) =>
      ` ${b.name}`
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  }
}