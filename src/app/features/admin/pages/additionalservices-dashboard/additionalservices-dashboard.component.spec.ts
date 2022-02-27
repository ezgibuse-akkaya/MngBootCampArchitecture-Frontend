import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalservicesDashboardComponent } from './additionalservices-dashboard.component';

describe('AdditionalservicesDashboardComponent', () => {
  let component: AdditionalservicesDashboardComponent;
  let fixture: ComponentFixture<AdditionalservicesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalservicesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalservicesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
