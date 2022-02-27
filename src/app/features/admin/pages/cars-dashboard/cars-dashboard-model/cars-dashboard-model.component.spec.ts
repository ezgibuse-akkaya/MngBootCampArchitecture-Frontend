import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDashboardModelComponent } from './cars-dashboard-model.component';

describe('CarsDashboardModelComponent', () => {
  let component: CarsDashboardModelComponent;
  let fixture: ComponentFixture<CarsDashboardModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsDashboardModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDashboardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
