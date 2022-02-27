import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { ColorListModel } from 'src/app/features/rentals/models/colorModels/colorListModel';
import { UpdateColorModel } from 'src/app/features/rentals/models/colorModels/updateColorModel';
import { ColorService } from 'src/app/features/rentals/services/color.service';


@Component({
  selector: 'app-color-dashboard',
  templateUrl: './color-dashboard.component.html',
  styleUrls: ['./color-dashboard.component.scss']
})
export class ColorDashboardComponent implements OnInit {
 
  colorListModel: ListResponseModel<ColorListModel> = {
    index: 0,
    size: 10,
    items: [],
    
  };
  dataLoaded: boolean = false;

  constructor(private colorService: ColorService,private router:Router) {}

  ngOnInit(): void {
    this.getColorList();
  }
  addRouting(){
    
    this.router.navigate(["/admin/colors/add"]);
  }
  getColorList() {
    this.colorService
      .getList(this.colorListModel.index, this.colorListModel.size)
      .subscribe(response => {
        this.colorListModel = response;
        console.log(response)
        this.dataLoaded = true;
      });
  }
}

//   colorListModel: ListResponseModel<ColorListModel> = {
//     index: 0,
//     size: 10,
//     items: [],
    
//   };
//   dataLoaded: boolean = false;

//   constructor(
//     private colorService : ColorService,
//     private toastrService : ToastrService,
//     private confirmationService: ConfirmationService,
//     private formBuilder: FormBuilder,
//     private router:Router
//     ) { }

//     //for showing color details
//     colors : ColorListModel[] = [];

//     //for updating selected cars
//     updateColorForm : FormGroup;
//     colorUpdateModel : UpdateColorModel;

//     colorsLoaded = false;

//     displayUpdateDialog = false;
//     colorToUpdate : ColorListModel;
  
//     ngOnInit(): void {
//       this.getColors();

//       this.createUpdateColorForm();

//     }

//     createUpdateColorForm() {
//       this.updateColorForm = this.formBuilder.group({
//         name: ['', [Validators.required]]
//       });
//     }

//     getColors(){
//       this.colorService.getColors().subscribe({
//         next : (response) => {
//           this.colors = response.items;
//           this.colorsLoaded = true;
//         },
//         error: (err) => {
//           this.toastrService.error("Renkler getirilirken bir hata oluştu.")
//         }
//       });
//     }
//     addRouting(){
    
//       this.router.navigate(["/admin/colors/add"]);
//     }

//     //Güncellenecek arabanın bilgilerini alıp dialog'a ekler ve dialogu ekrana verir.
//     showUpdateDialog(color: ColorListModel){      
//       this.colorToUpdate = color;

//       this.updateColorForm.setValue({
//         name : color.name,
//       });
      
//       this.displayUpdateDialog = true;
//     }
  
//     updateColor(){
//       if(this.updateColorForm.valid){
//         this.colorUpdateModel = Object.assign({}, this.updateColorForm.value);
//         this.colorUpdateModel.id = this.colorToUpdate.id;

//         this.colorService.updateColor(this.colorUpdateModel).subscribe({
//           next : (response) =>{
//             if(response!= null){
//               this.toastrService.success("Renk güncelleme işlemi başarılı oldu.")
//             }
//             this.displayUpdateDialog = false;
//             this.getColors();
//           },
//           error: (err) => {
//             this.toastrService.success("Renk güncelleme işlemi başarısız oldu.")
//           }
//         });
//       }
//     }
  
//     deleteColor(id: number){
//       this.colorService.deleteColor(id).subscribe({
//         next : (response) =>{
//           this.toastrService.success("Renk silme işlemi başarılı oldu.");
//           this.getColors();
//         },
//         error: (err) => {
//           this.toastrService.success("Renk silme işlemi başarısız oldu.");
//         }
//       });
//     }

//     confirm(id: number) {
//       this.confirmationService.confirm({
//           target: event.target,
//           message: 'Silme işlemi yapmak istediğinizden emin misiniz?',
//           icon: 'pi pi-exclamation-triangle',
//           accept: () => {
//               this.deleteColor(id);
//           },
//           reject: () => {
//             this.toastrService.error("Silme işlemi reddedildi.")
//           }
//       });
//   }

// }
