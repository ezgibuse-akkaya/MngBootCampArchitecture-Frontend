import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsDashboardModelFormComponent } from './colors-dashboard-model-form.component';

describe('ColorsDashboardModelFormComponent', () => {
  let component: ColorsDashboardModelFormComponent;
  let fixture: ComponentFixture<ColorsDashboardModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsDashboardModelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsDashboardModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
