import { Brand } from '../models/brand/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatedBrandDto } from '../models/brand/createdBrandDto';
import { UpdatedBrandDto } from '../models/brand/updatedBrandDto';
import { DeletedBrandDto } from '../models/brand/deletedBrandDto';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiControllerUrl = `${environment.apiUrl}/Brands/`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(`${this.apiControllerUrl}getall`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Brand> {
    return this.httpClient.get<Brand>(`${this.apiControllerUrl}/${id}`);
  }
  add(brand: Brand): Observable<CreatedBrandDto> {
  return this.httpClient.post<CreatedBrandDto>(`${this.apiControllerUrl}add`, brand);
}
update(brand: Brand): Observable<UpdatedBrandDto> {
  return this.httpClient.put<UpdatedBrandDto>(`${this.apiControllerUrl}edit`, brand);
}
delete(brand: Brand): Observable<DeletedBrandDto> {
  return this.httpClient.delete<DeletedBrandDto>(`${this.apiControllerUrl}delete`, { body: brand });
}
}






