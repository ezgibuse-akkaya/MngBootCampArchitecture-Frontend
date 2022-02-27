import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { FuelListModel } from 'src/app/features/rentals/models/fuel/fuelListModel';
import { FuelService } from 'src/app/features/rentals/services/fuel.service';

@Component({
  selector: 'app-fuels-dashboard',
  templateUrl: './fuels-dashboard.component.html',
  styleUrls: ['./fuels-dashboard.component.scss']
})
export class FuelsDashboardComponent implements OnInit {
  fuelListModel: ListResponseModel<FuelListModel> = {
    index: 0,
    size: 10,
    items: [],
    
  };
  dataLoaded: boolean = false;

  constructor(private fuelService: FuelService,private router:Router) {}

  ngOnInit(): void {
    this.getFuelList();
  }
  addRouting(){
    
    this.router.navigate(["/admin/fuels/add"]);
  }
  getFuelList() {
    this.fuelService
      .getList(this.fuelListModel.index, this.fuelListModel.size)
      .subscribe(response => {
        this.fuelListModel = response;
        console.log(response)
        this.dataLoaded = true;
      });
  }
}
