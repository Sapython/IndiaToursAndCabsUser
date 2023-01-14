import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRentalRoutingModule } from './bus-rental-routing.module';
import { BusRentalComponent } from './bus-rental.component';


@NgModule({
  declarations: [
    BusRentalComponent
  ],
  imports: [
    CommonModule,
    BusRentalRoutingModule
  ]
})
export class BusRentalModule { }
