import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalComponentComponent } from './rental-component.component';

describe('RentalComponentComponent', () => {
  let component: RentalComponentComponent;
  let fixture: ComponentFixture<RentalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
