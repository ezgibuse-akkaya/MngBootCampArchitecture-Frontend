import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from './features/rentals/pages/homepage/homepage.component';
import { LoginComponent } from './core/pages/login/login.component';
import { ModelsDashboardComponent } from './features/admin/pages/models-dashboard/models-dashboard.component';
import { ModelsDashboardModelFormComponent } from './features/admin/pages/models-dashboard/models-dashboard-model-form/models-dashboard-model-form.component';
import { NgModule } from '@angular/core';
import { AdminGuard } from './core/guards/admin.guard';
import { BrandsDashboardComponent } from './features/admin/pages/brands-dashboard/brands-dashboard.component';
import { BrandsDashboardModelFormComponent } from './features/admin/pages/brands-dashboard/brands-dashboard-model-form/brands-dashboard-model-form.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { FuelsDashboardComponent } from './features/admin/pages/fuels-dashboard/fuels-dashboard.component';
import { FuelsDashboardModelComponent } from './features/admin/pages/fuels-dashboard/fuels-dashboard-model/fuels-dashboard-model.component';
import { BrandFilterBarComponent } from './features/rentals/components/brand-filter-bar/brand-filter-bar.component';
import { BrandListComponent } from './features/rentals/components/brand-list/brand-list.component';
import { BrandCardComponent } from './features/rentals/components/brand-card/brand-card.component';
import { ModelListComponent } from './features/rentals/components/models-list/models-list.component';
import { ModelCardComponent } from './features/rentals/components/model-card/model-card.component';
import { AdminDashboardMenuItemComponent } from './features/admin/pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu-item/admin-dashboard-menu-item.component';
import { CarsDashboardComponent } from './features/admin/pages/cars-dashboard/cars-dashboard.component';
import { CarsDashboardModelComponent } from './features/admin/pages/cars-dashboard/cars-dashboard-model/cars-dashboard-model.component';
import { ColorDashboardComponent } from './features/admin/pages/color-dashboard/color-dashboard.component';
import { ColorsDashboardModelFormComponent } from './features/admin/pages/color-dashboard/colors-dashboard-model-form/colors-dashboard-model-form.component';
import { RentalComponentComponent } from './features/rentals/components/rental-component/rental-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'brands/filter' , component : BrandFilterBarComponent},
  { path: 'brands/list' , component : BrandListComponent},
  { path: 'brand/card' , component : BrandCardComponent},
  { path: 'models/list' , component : ModelListComponent},
  { path: 'models/card' , component : ModelCardComponent},
  { path: 'rentals/:id' , component : RentalComponentComponent},
  { path: "signup" , component : RegisterComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'brands/add',
    component: BrandsDashboardModelFormComponent
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'admins',
        component: AdminDashboardMenuItemComponent
      },
      {
        path: 'models',
        component: ModelsDashboardComponent
      },
      {
        path: 'models/add',
        component: ModelsDashboardModelFormComponent
      },
      {
        path: 'models/edit/:id',
        component: ModelsDashboardModelFormComponent
      },
      {
        path: 'brands',
        component: BrandsDashboardComponent
      },
      {
        path: 'brands/add',
        component: BrandsDashboardModelFormComponent
      },
      {
        path: 'brands/edit/:id',
        component: BrandsDashboardModelFormComponent
      },
      {
        path: 'fuels',
        component: FuelsDashboardComponent
      },
      {
        path: 'fuels/add',
        component: FuelsDashboardModelComponent
      },
      {
        path: 'fuels/edit/:id',
        component: FuelsDashboardModelComponent
      },
     
      {
        path: 'cars',
        component: CarsDashboardComponent
      },
      {
        path: 'cars/add',
        component: CarsDashboardModelComponent
      },
      {
        path: 'cars/edit/:id',
        component: CarsDashboardModelComponent
      }, 
      {
        path: 'colors',
        component: ColorDashboardComponent
      },
      {
        path: 'colors/add',
        component: ColorsDashboardModelFormComponent
      },
      {
        path: 'colors/edit/:id',
        component: ColorsDashboardModelFormComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
