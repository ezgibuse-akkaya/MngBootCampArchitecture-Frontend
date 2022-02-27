import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/features/rentals/models/colorModels/color';
import { ColorListModel } from 'src/app/features/rentals/models/colorModels/colorListModel';
import { Model } from 'src/app/features/rentals/models/model/model';
import { ColorService } from 'src/app/features/rentals/services/color.service';

@Component({
  selector: 'app-colors-dashboard-model-form',
  templateUrl: './colors-dashboard-model-form.component.html',
  styleUrls: ['./colors-dashboard-model-form.component.scss']
})
export class ColorsDashboardModelFormComponent implements OnInit {

  dataLoaded: boolean = false;

  colorToEdit!: Color;
 
 
 colorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getColorById(params['id']);
      else this.createColorForm();
    });
    
    
  }

  getColorById(id: number) {
    this.colorService.getById(id).subscribe(response => {
      this.colorToEdit = response;
      this.dataLoaded = true;
      this.createColorForm();
    });
  }

  createColorForm() {
    this.colorForm = this.formBuilder.group({
      name: [this.colorToEdit?.name || '', Validators.required],
      fuelFilterText: [''],
    
    });
  }

 

 
  add() {
    if (!this.colorForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let colorToAdd: ColorListModel = { ...this.colorForm.value };
    this.colorService.add(colorToAdd).subscribe(() => {
      this.toastrService.success('Color has been added.');
      this.router.navigate(['admin', 'colors']);
    });
  }
}