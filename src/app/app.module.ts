import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { AdminDashboardMenuComponent } from './features/admin/pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu.component';
import { AdminDashboardMenuItemComponent } from './features/admin/pages/admin-dashboard/admin-dashboard-menu/admin-dashboard-menu-item/admin-dashboard-menu-item.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandFilterBarComponent } from './features/rentals/components/brand-filter-bar/brand-filter-bar.component';
import { BrandListComponent } from './features/rentals/components/brand-list/brand-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { CoreReducers } from './core/store/core.reducer';
import { FilterBrandsPipe } from './features/rentals/pipes/filter-brands.pipe';
import { FilterFuelsPipe } from './features/rentals/pipes/filter-fuels.pipe';
import { FilterModelListPipe } from './features/rentals/pipes/filter-models-list.pipe';
import { FilterTransmissionsPipe } from './features/rentals/pipes/filter-transmissions.pipe';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomepageComponent } from './features/rentals/pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ListboxModule } from 'primeng/listbox';
import { LoadingSpinnerComponent } from './features/rentals/components/loading-spinner/loading-spinner.component';
import { LoginComponent } from './core/pages/login/login.component';
import { ModelCardComponent } from './features/rentals/components/model-card/model-card.component';
import { ModelListComponent } from './features/rentals/components/models-list/models-list.component';
import { ModelsDashboardComponent } from './features/admin/pages/models-dashboard/models-dashboard.component';
import { ModelsDashboardModelFormComponent } from './features/admin/pages/models-dashboard/models-dashboard-model-form/models-dashboard-model-form.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayComponent } from './features/rentals/pages/homepage/overlay/overlay.component';
import { PasswordInputComponent } from './core/components/password-input/password-input.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { BrandsDashboardModelFormComponent } from './features/admin/pages/brands-dashboard/brands-dashboard-model-form/brands-dashboard-model-form.component';
import { BrandCardComponent } from './features/rentals/components/brand-card/brand-card.component';
import { AdditionalservicesDashboardComponent } from './features/admin/pages/additionalservices-dashboard/additionalservices-dashboard.component';
import { CarsDashboardComponent } from './features/admin/pages/cars-dashboard/cars-dashboard.component';
import { FuelsDashboardComponent } from './features/admin/pages/fuels-dashboard/fuels-dashboard.component';
import { CustomersDashboardComponent } from './features/admin/pages/customers-dashboard/customers-dashboard.component';
import { AdditionalservicesDashboardModelComponent } from './features/admin/pages/additionalservices-dashboard/additionalservices-dashboard-model/additionalservices-dashboard-model.component';
import { CarsDashboardModelComponent } from './features/admin/pages/cars-dashboard/cars-dashboard-model/cars-dashboard-model.component';
import { CustomersDashboardModelComponent } from './features/admin/pages/customers-dashboard/customers-dashboard-model/customers-dashboard-model.component';
import { FuelsDashboardModelComponent } from './features/admin/pages/fuels-dashboard/fuels-dashboard-model/fuels-dashboard-model.component';
import { FilterBrandsListPipe } from './features/rentals/pipes/filter-brands-list.pipe';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ColorDashboardComponent } from './features/admin/pages/color-dashboard/color-dashboard.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { ColorsDashboardModelFormComponent } from './features/admin/pages/color-dashboard/colors-dashboard-model-form/colors-dashboard-model-form.component';
import { BrandsDashboardComponent } from './features/admin/pages/brands-dashboard/brands-dashboard.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { RentalComponentComponent } from './features/rentals/components/rental-component/rental-component.component';
import {BadgeModule} from 'primeng/badge';
import {InplaceModule} from 'primeng/inplace';
import {FieldsetModule} from 'primeng/fieldset';
import {AccordionModule} from 'primeng/accordion';
@NgModule({
  declarations: [
    BrandsDashboardComponent,
    AppComponent,
    BrandListComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    OverlayComponent,
    BrandFilterBarComponent,
    LoadingSpinnerComponent,
    ModelListComponent,
    ModelCardComponent,
    LoginComponent,
    FilterModelListPipe,
    PasswordInputComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminDashboardMenuComponent,
    AdminDashboardMenuItemComponent,
    ModelsDashboardComponent,
    ModelsDashboardModelFormComponent,
    FilterBrandsPipe,
    FilterFuelsPipe,
    FilterTransmissionsPipe,
    BrandsDashboardModelFormComponent,
    BrandCardComponent,
    AdditionalservicesDashboardComponent,
    CarsDashboardComponent,
    FuelsDashboardComponent,
    CustomersDashboardComponent,
    AdditionalservicesDashboardModelComponent,
    CarsDashboardModelComponent,
    CustomersDashboardModelComponent,
    FuelsDashboardModelComponent,
    FilterBrandsListPipe,
    ColorDashboardComponent,
    ColorsDashboardModelFormComponent,
    BrandCardComponent,
    BrandListComponent,
    BrandFilterBarComponent,
    RentalComponentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ListboxModule,
    RadioButtonModule,
    ButtonModule,
    ConfirmPopupModule,
    DataViewModule,
    RatingModule,
    DialogModule,
    RippleModule,
    FormsModule,
    CardModule,
    TagModule,
    PanelModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    ListboxModule,
    RadioButtonModule,
    MultiSelectModule,
    BadgeModule,
    InplaceModule,
    FieldsetModule,
    AccordionModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: [],
        disallowedRoutes: []
      }
    }),
    StoreModule.forRoot(CoreReducers)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
