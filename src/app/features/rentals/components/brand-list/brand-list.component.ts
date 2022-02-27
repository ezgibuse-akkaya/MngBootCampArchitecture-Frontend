import { Component, Input, OnInit } from '@angular/core';

import { BrandService } from './../../services/brand.service';
import { BrandListModel } from '../../models/brand/brandListModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  brandList: BrandListModel[] = [];
  dataLoaded: boolean = false;

  @Input() brandFilterText: string = '';
  @Input() class: string = '';

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
   

    this.getBrandList();
  }

  getBrandList() {
    this.brandService.getList(0, 6).subscribe(response => {
      this.brandList = response.items;
      this.dataLoaded = true;
    });
  }
}

