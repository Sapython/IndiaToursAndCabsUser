import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRentalComponent } from './bus-rental.component';

describe('BusRentalComponent', () => {
  let component: BusRentalComponent;
  let fixture: ComponentFixture<BusRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
