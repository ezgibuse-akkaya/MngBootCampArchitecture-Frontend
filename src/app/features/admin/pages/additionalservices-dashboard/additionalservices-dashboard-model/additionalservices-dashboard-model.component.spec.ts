import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalservicesDashboardModelComponent } from './additionalservices-dashboard-model.component';

describe('AdditionalservicesDashboardModelComponent', () => {
  let component: AdditionalservicesDashboardModelComponent;
  let fixture: ComponentFixture<AdditionalservicesDashboardModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalservicesDashboardModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalservicesDashboardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
