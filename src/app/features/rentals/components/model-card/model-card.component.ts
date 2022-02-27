import { Component, Input, OnInit } from '@angular/core';

import { ModelListModel } from '../../models/model/modelListModel';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent implements OnInit {
  @Input() modelListModel!: ModelListModel;

  constructor() {}

  ngOnInit(): void {}
}
