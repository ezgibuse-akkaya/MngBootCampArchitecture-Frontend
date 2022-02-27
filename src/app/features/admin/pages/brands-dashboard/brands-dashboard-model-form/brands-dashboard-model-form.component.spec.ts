import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsDashboardModelFormComponent } from './brands-dashboard-model-form.component';

describe('BrandsDashboardModelFormComponent', () => {
  let component: BrandsDashboardModelFormComponent;
  let fixture: ComponentFixture<BrandsDashboardModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsDashboardModelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsDashboardModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
