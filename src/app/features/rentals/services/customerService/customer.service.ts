import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../../models/customer';
import { CreateCustomerDto } from './createCustomerDto';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiControllerUrl = `${environment.apiUrl}/Customers`;

  constructor(private httpClient: HttpClient) {}

  getByAuth(): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.apiControllerUrl}/ByAuth`);
  }

  add(createCustomerDto: CreateCustomerDto): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiControllerUrl, createCustomerDto);
  }
}
