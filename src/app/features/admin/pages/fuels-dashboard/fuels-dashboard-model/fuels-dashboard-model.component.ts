import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fuel } from 'src/app/features/rentals/models/fuel/fuel';
import { Model } from 'src/app/features/rentals/models/model/model';
import { FuelService } from 'src/app/features/rentals/services/fuel.service';
import { ModelService } from 'src/app/features/rentals/services/model.service';

@Component({
  selector: 'app-fuels-dashboard-model',
  templateUrl: './fuels-dashboard-model.component.html',
  styleUrls: ['./fuels-dashboard-model.component.scss']
})
export class FuelsDashboardModelComponent implements OnInit {
  dataLoaded: boolean = false;

  fuelToEdit!: Fuel;
  models: Model[] = [];
 
 fuelForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private modelService: ModelService,
    private fuelService: FuelService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getFuelById(params['id']);
      else this.createFuelForm();
    });
    
    
  }


  getFuelById(id: number) {
    this.fuelService.getById(id).subscribe(response => {
      this.fuelToEdit = response;
      this.dataLoaded = true;
      this.createFuelForm();
    });
  }

  createFuelForm() {
    this.fuelForm = this.formBuilder.group({
      name: [this.fuelToEdit?.name || '', Validators.required],
      fuelFilterText: [''],
    
    });
  }

 

 
  add() {
    if (!this.fuelForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let fuelToAdd: Model = { ...this.fuelForm.value };
    this.fuelService.add(fuelToAdd).subscribe(() => {
      this.toastrService.success('Fuel has been added.');
      this.router.navigate(['admin', 'fuels']);
    });
  }

//   update() {
//     if (!this.fuelForm.valid) {
//       this.toastrService.warning('There are missing fields.');
//       return;
//     }
//     let fuelToUpdate: Fuel = { id: this.fuelToEdit.id, ...this.fuelForm.value };
//     this.fuelService.update(fuelToUpdate).subscribe(() => {
//       this.toastrService.success('Fuel has been updated.');
//       this.router.navigate(['admin', 'fuels']);
//     });
//   }

//   delete() {
//     if (!window.confirm('Are you sure to delete?')) return;
//     let fuelToDelete: Fuel = { id: this.fuelToEdit.id, ...this.fuelForm.value };
//     this.fuelService.delete(fuelToDelete).subscribe(() => {
//       this.toastrService.success('Fuel has been deleted.');
//       this.router.navigate(['admin', 'fuels']);
//     });
 }


