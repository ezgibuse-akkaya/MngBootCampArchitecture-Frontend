import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDashboardComponent } from './customers-dashboard.component';

describe('CustomersDashboardComponent', () => {
  let component: CustomersDashboardComponent;
  let fixture: ComponentFixture<CustomersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
