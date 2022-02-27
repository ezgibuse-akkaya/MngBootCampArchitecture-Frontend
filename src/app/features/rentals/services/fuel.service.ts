import { Fuel } from '../models/fuel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FuelListModel } from '../models/fuel/fuelListModel';
import { ColorListModel } from '../models/colorModels/colorListModel';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  apiControllerUrl = `${environment.apiUrl}/Fuels/`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Fuel>> {
    return this.httpClient.get<ListResponseModel<Fuel>>(`${this.apiControllerUrl}getall`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Fuel> {
    return this.httpClient.get<Fuel>(`${this.apiControllerUrl}/${id}`);
  }
  add(fuel: Fuel): Observable<Fuel> {
    return this.httpClient.post<Fuel>(`${this.apiControllerUrl}add`, fuel);
  }
}

