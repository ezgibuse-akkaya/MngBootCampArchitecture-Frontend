import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { ModelListModel } from '../../models/model/modelListModel';


@Component({
  selector: 'app-rental-component',
  templateUrl: './rental-component.component.html',
  styleUrls: ['./rental-component.component.scss'],
  providers: [MessageService]
})
export class RentalComponentComponent implements OnInit {
  @Input() modelListModel!: ModelListModel;
  toastrService:ToastrService;

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addRouting(){
  
    this.router.navigate([""]);
    
  
    
  }
 
}






