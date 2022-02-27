import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, PrimeNGConfig, SelectItem } from 'primeng/api';

import { CarState } from 'src/app/core/models/enum/carState';
import { CarListModel } from 'src/app/features/rentals/models/car/carListModel';
import { UpdateCarModel } from 'src/app/features/rentals/models/car/updateCarModel';
import { CityListModel } from 'src/app/features/rentals/models/cityListModel';
import { ColorListModel } from 'src/app/features/rentals/models/colorModels/colorListModel';
import { ModelListModel } from 'src/app/features/rentals/models/model/modelListModel';
import { CarService } from 'src/app/features/rentals/services/car.service';
import { CityService } from 'src/app/features/rentals/services/city.service';
import { ColorService } from 'src/app/features/rentals/services/color.service';
import { ModelService } from 'src/app/features/rentals/services/model.service';

@Component({
  selector: 'app-cars-dashboard',
  templateUrl: './cars-dashboard.component.html',
  styleUrls: ['./cars-dashboard.component.scss']
})
export class CarsDashboardComponent implements OnInit {

  constructor(
    private carService : CarService,
    private modelService : ModelService,
    private colorService : ColorService,
    private cityService : CityService,
    private toastrService : ToastrService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
    ) { }

    //for showing car details
    cars: CarListModel[] = [];    

    //for updating selected cars
    updateCarForm : FormGroup;
    carUpdateModel : UpdateCarModel = new UpdateCarModel();
    models : ModelListModel[] = [];
    colors : ColorListModel[] = [];
    cities : CityListModel[] = [];
    carStatesEnum : {id: number; name: string}[] = [];
    carDataLoaded = false;
    modelsLoaded = false;
    colorsLoaded = false;
    citiesLoaded = false;    
    displayUpdateDialog = false;
    carToUpdate :CarListModel;
  
    ngOnInit(): void {
      this.getCars();
      this.getList();
      this.getColors();
      this.getCities();

      this.createUpdateCarForm();

      for(var carState in CarState) {
        if (typeof CarState[carState] === 'number') {
          this.carStatesEnum.push({id: <any>CarState[carState], name: carState});
        }
      }
    }

    createUpdateCarForm() {
      this.updateCarForm = this.formBuilder.group({
        modelId: ['', [Validators.required]],
        colorId: ['', [Validators.required]],
        cityId: ['', [Validators.required]],
        plate: ['', [Validators.required, Validators.maxLength(10)]],
        modelYear: ['', [Validators.required]],
        findexScore: ['', [Validators.required]],
        kilometer: ['', [Validators.required]],
        carState: ['', [Validators.required]]
      });
    }

    getCars(){
      this.carService.getAllCars().subscribe({
        next : (response) => {
          this.cars = response.items;
          this.carDataLoaded = true;
        },
        error: (err) => {
          this.toastrService.error("Arabalar getirilirken bir hata oluştu.")
        }
      });
    }

    getList(){
      this.modelService.getList().subscribe({
        next : (response) => {
          this.models = response.items;
          this.modelsLoaded = true;
        },
        error: (err) => {
          this.toastrService.error("Modeller getirilirken bir hata oluştu.")
        }
      });
    }
    
    getCities(){
      this.cityService.getCities().subscribe({
        next : (response) => {
          this.cities = response.items;
          this.citiesLoaded = true;
        },
        error: (err) => {
          this.toastrService.error("Şehirler getirilirken bir hata oluştu.")
        }
      });
    }

    getColors(){
      this.colorService.getList().subscribe({
        next : (response) => {
          this.colors = response.items;
          this.colorsLoaded = true;
        },
        error: (err) => {
          this.toastrService.error("Renkler getirilirken bir hata oluştu.")
        }
      });
    }

    //Güncellenecek arabanın bilgilerini alıp dialog'a ekler ve dialogu ekrana verir.
    showUpdateDialog(car: CarListModel){      
      this.carToUpdate = car;

      this.updateCarForm.setValue({
        carState : car.carState,
        modelId : car.modelId,
        cityId : car.cityId,
        colorId : car.colorId,
        plate : car.plate,
        modelYear : car.modelYear,
        findexScore : car.findexScore,
        kilometer : car.kilometer
      });
      
      this.displayUpdateDialog = true;
    }
  
    updateCar(){
      if(this.updateCarForm.valid){
        this.carUpdateModel = Object.assign({}, this.updateCarForm.value);
        this.carUpdateModel.id = this.carToUpdate.id;

        this.carService.updateCar(this.carUpdateModel).subscribe({
          next : (response) =>{
            console.log(response);
            if(response!= null){
              this.toastrService.success("Araba güncelleme işlemi başarılı oldu.")
            }
            this.displayUpdateDialog = false;
            this.getCars();
          },
          error: (err) => {
            this.toastrService.success("Araba güncelleme işlemi başarısız oldu.")
          }
        });
      }
    }
  
    deleteCar(id: number){
      this.carService.deleteCar(id).subscribe({
        next : (response) =>{
          this.toastrService.success("Araba silme işlemi başarılı oldu.")
          this.getCars();
        },
        error: (err) => {
          this.toastrService.success("Araba silme işlemi başarısız oldu.")
        }
      });
    }

    confirm(id: number) {
      this.confirmationService.confirm({
          target: event.target,
          message: 'Silme işlemi yapmak istediğinizden emin misiniz?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.deleteCar(id);
          },
          reject: () => {
            this.toastrService.error("Silme işlemi reddedildi.")
          }
      });
  }
  

}
