import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDashboardModelComponent } from './customers-dashboard-model.component';

describe('CustomersDashboardModelComponent', () => {
  let component: CustomersDashboardModelComponent;
  let fixture: ComponentFixture<CustomersDashboardModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersDashboardModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersDashboardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
