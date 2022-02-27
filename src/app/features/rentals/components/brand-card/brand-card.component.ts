import { Component, Input, OnInit } from '@angular/core';

import { BrandListModel } from '../../models/brand/brandListModel';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent implements OnInit {
  @Input() brandListModel!: BrandListModel;
  constructor() { }

  ngOnInit(): void {
  }
}
