import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAgencyComponent } from './rental-agency.component';

describe('RentalAgencyComponent', () => {
  let component: RentalAgencyComponent;
  let fixture: ComponentFixture<RentalAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
