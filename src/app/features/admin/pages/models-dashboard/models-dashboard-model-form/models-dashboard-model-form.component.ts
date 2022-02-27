import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Brand } from 'src/app/features/rentals/models/brand/brand';
import { BrandService } from 'src/app/features/rentals/services/brand.service';
import { Fuel } from 'src/app/features/rentals/models/fuel';
import { FuelService } from 'src/app/features/rentals/services/fuel.service';
import { Model } from 'src/app/features/rentals/models/model/model';
import { ModelService } from './../../../../rentals/services/model.service';
import { ToastrService } from 'ngx-toastr';
import { Transmission } from '../../../../rentals/models/transmission/transmission';
import { TransmissionService } from 'src/app/features/rentals/services/transmission.service';
import { ColorService } from 'src/app/features/rentals/services/color.service';

@Component({
  templateUrl: './models-dashboard-model-form.component.html',
  styleUrls: ['./models-dashboard-model-form.component.scss']
})
export class ModelsDashboardModelFormComponent implements OnInit {
  dataLoaded: boolean = false;

  modelToEdit!: Model;
  brands: Brand[] = [];
  fuels: Fuel[] = [];
  transmissions: Transmission[] = [];

  modelForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private modelService: ModelService,
    private brandService: BrandService,
    private transmissionService: TransmissionService,
    private colorService : ColorService,
    private fuelService: FuelService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getModelById(params['id']);
      else this.createModelForm();
    });
    this.getBrandList();
    this.getFuelList();
    this.getTransmissionList();
  }


  getModelById(id: number) {
    this.modelService.getById(id).subscribe(response => {
      this.modelToEdit = response;
      this.dataLoaded = true;
      this.createModelForm();
    });
  }

  createModelForm() {
    this.modelForm = this.formBuilder.group({
      name: [this.modelToEdit?.name || '', Validators.required],
      brandId: [this.modelToEdit?.brandId || 0, Validators.required],
      fuelId: [this.modelToEdit?.fuelId || 0, Validators.required],
      transmissionId: [this.modelToEdit?.transmissionId || 0, Validators.required],
      dailyPrice: [this.modelToEdit?.dailyPrice || '', Validators.required],
      imageUrl: [this.modelToEdit?.imageUrl || '', Validators.required],
      brandFilterText: [''],
      fuelFilterText: [''],
      transmissionFilterText: ['']
    });
  }

  getBrandList() {
    this.brandService.getList(0, 999).subscribe(response => (this.brands = response.items));
  }

  getFuelList() {
    this.fuelService.getList(0, 999).subscribe(response => (this.fuels = response.items));
  }

  getTransmissionList() {
    this.transmissionService
      .getList(0, 999)
      .subscribe(response => (this.transmissions = response.items));
  }
  getColorList() {
    this.colorService
      .getList(0, 999)
      .subscribe(response => (this.transmissions = response.items));
  }


  add() {
    if (!this.modelForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let modelToAdd: Model = { ...this.modelForm.value };
    modelToAdd.brandId=1;
    modelToAdd.fuelId=1;
    modelToAdd.transmissionId=1;
    console.log(modelToAdd)
    this.modelService.add(modelToAdd).subscribe(() => {
      this.toastrService.success('Model has been added.');
      this.router.navigate(['admin', 'models']);
    });
  }

  update() {
    if (!this.modelForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let modelToUpdate: Model = { id: this.modelToEdit.id, ...this.modelForm.value };
    this.modelService.update(modelToUpdate).subscribe(() => {
      this.toastrService.success('Model has been updated.');
      this.router.navigate(['admin', 'models']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;
    let modelToDelete: Model = { id: this.modelToEdit.id, ...this.modelForm.value };
    this.modelService.delete(modelToDelete).subscribe(() => {
      this.toastrService.success('Model has been deleted.');
      this.router.navigate(['admin', 'models']);
    });
  }
}
