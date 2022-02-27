import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { BrandListModel } from 'src/app/features/rentals/models/brand/brandListModel';
import { BrandService } from 'src/app/features/rentals/services/brand.service';

@Component({
  selector: 'app-brands-dashboard',
  templateUrl: './brands-dashboard.component.html',
  styleUrls: ['./brands-dashboard.component.scss']
})
export class BrandsDashboardComponent implements OnInit {
  brandListModel: BrandListModel[] ;
  dataLoaded: boolean = false;

  constructor(private brandService: BrandService,private router:Router) {}

  ngOnInit(): void {
    this.getBrandList();
  }
  addRouting(){
  
    this.router.navigate(["/admin/brands/add"]);
  }
  getBrandList() {
    this.brandService
      .getList(0, 10)
      .subscribe(response => {
        this.brandListModel = response.items;
        console.log(response)
        this.dataLoaded = true;
      });
  }
}
