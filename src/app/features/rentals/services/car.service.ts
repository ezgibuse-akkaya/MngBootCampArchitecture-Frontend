import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PagedListResponseModel } from 'src/app/core/models/pagedListResponseModel';
import { CarListModel } from '../models/car/carListModel';
import { UpdateCarModel } from '../models/car/updateCarModel';
import { ResponseModel } from 'src/app/core/models/responseModel';
import { CreateCarModel } from '../models/car/createCarModel';
import { CreatedCarDto } from '../models/car/createdCarDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiControllerUrl = `${environment.apiUrl}Cars/`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  getAllCars(page:number = 0, pageSize : number = 10) :Observable<PagedListResponseModel<CarListModel>> {
    return this.httpClient.get<PagedListResponseModel<CarListModel>>(`${this.apiControllerUrl}getall`, {
      params: { page, pageSize }
    });
  }
  getAllRentableCars(page:number = 0, pageSize : number = 10) :Observable<PagedListResponseModel<CarListModel>> {
    return this.httpClient.get<PagedListResponseModel<CarListModel>>(`${this.apiControllerUrl}getallrentables`, {
      params: { page, pageSize }
    });
  }
   

  
  //TODO: getbyid controller'da yok ama yazılacak.
 /* getCarById(id : number) {
    return this.httpClient.get<CarListModel>(this.apiUrl+"get/"+id)
  }*/

  updateCar(carToUpdate : UpdateCarModel){
    return this.httpClient.put<UpdateCarModel>(`${this.apiControllerUrl}update`, carToUpdate, this.httpOptions);
  }

  deleteCar(id : number){
    return this.httpClient.delete<ResponseModel>(`${this.apiControllerUrl}delete/`+id);
  }

  addCar(createCarModel : CreateCarModel){

    return this.httpClient.post<CreatedCarDto>(
      this.apiControllerUrl + 'add',
      createCarModel,
      this.httpOptions
    );
  }
}
