import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalAgencyRoutingModule } from './rental-agency-routing.module';
import { RentalAgencyComponent } from './rental-agency.component';


@NgModule({
  declarations: [
    RentalAgencyComponent
  ],
  imports: [
    CommonModule,
    RentalAgencyRoutingModule
  ]
})
export class RentalAgencyModule { }
