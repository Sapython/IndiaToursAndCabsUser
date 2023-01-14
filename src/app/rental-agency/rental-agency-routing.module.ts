import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalAgencyComponent } from './rental-agency.component';

const routes: Routes = [{ path: '', component: RentalAgencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalAgencyRoutingModule { }
