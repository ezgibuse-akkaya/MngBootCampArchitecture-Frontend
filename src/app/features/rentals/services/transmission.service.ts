import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Observable } from 'rxjs';
import { Transmission } from '../models/transmission/transmission';
import { environment } from 'src/environments/environment';
import { TransmissionListModel } from '../models/transmission/transmissionListModel';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {
  apiControllerUrl = `${environment.apiUrl}/Transmissions`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Transmission>> {
    return this.httpClient.get<ListResponseModel<Transmission>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Transmission> {
    return this.httpClient.get<Transmission>(`${this.apiControllerUrl}/${id}`);
  }
  add(transmission: Transmission): Observable<TransmissionListModel> {
    return this.httpClient.post<TransmissionListModel>(`${this.apiControllerUrl}add`, transmission);
  }
}
