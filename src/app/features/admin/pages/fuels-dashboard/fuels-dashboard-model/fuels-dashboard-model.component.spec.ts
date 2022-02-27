import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelsDashboardModelComponent } from './fuels-dashboard-model.component';

describe('FuelsDashboardModelComponent', () => {
  let component: FuelsDashboardModelComponent;
  let fixture: ComponentFixture<FuelsDashboardModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelsDashboardModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelsDashboardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
