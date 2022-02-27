import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { environment } from 'src/environments/environment';
import { CreateRentalDto } from '../../models/createRentalDto';
import { Rental, RentalList } from '../../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiControllerUrl = `${environment.apiUrl}/rentals`;

  constructor(private httpClient: HttpClient) {}

  add(createRentalDto: CreateRentalDto): Observable<Rental> {
    return this.httpClient.post<Rental>(`${this.apiControllerUrl}`, createRentalDto);
  }

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<RentalList>> {
    return this.httpClient.get<ListResponseModel<RentalList>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }
}
