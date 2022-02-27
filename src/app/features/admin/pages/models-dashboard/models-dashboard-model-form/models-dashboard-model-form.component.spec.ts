import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsDashboardModelFormComponent } from './models-dashboard-model-form.component';

describe('ModelsDashboardModelFormComponent', () => {
  let component: ModelsDashboardModelFormComponent;
  let fixture: ComponentFixture<ModelsDashboardModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsDashboardModelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsDashboardModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
