import { CreateColorModel } from './../models/colorModels/createColorModel';
import { UpdatedColorDto } from './../models/colorModels/updatedColorDto';
import { UpdateColorModel } from './../models/colorModels/updateColorModel';
import { ColorListModel } from '../models/colorModels/colorListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PagedListResponseModel } from 'src/app/core/models/pagedListResponseModel';
import { ResponseModel } from 'src/app/core/models/responseModel';
import { CreatedColorDto } from '../models/colorModels/createdColorDto';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Observable } from 'rxjs';
import { Color } from '../models/colorModels/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiControllerUrl = `${environment.apiUrl}/Colors/`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(`${this.apiControllerUrl}getall`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Color> {
    return this.httpClient.get<Color>(`${this.apiControllerUrl}/${id}`);
  }
  add(color: Color): Observable<Color> {
    return this.httpClient.post<Color>(`${this.apiControllerUrl}add`, color);
  }
}
