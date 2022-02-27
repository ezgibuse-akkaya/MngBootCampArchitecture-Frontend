import { Pipe, PipeTransform } from '@angular/core';

import { ModelListModel } from './../models/model/modelListModel';

@Pipe({
  name: 'filterModelList'
})
export class FilterModelListPipe implements PipeTransform {
  transform(value: ModelListModel[], filterText: string): ModelListModel[] {
    return value.filter((m: ModelListModel) =>
      `${m.brandName} ${m.name} ${m.fuelName} ${m.transmissionName}`
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  }
}
