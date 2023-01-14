import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusRentalComponent } from './bus-rental.component';

const routes: Routes = [{ path: '', component: BusRentalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRentalRoutingModule { }
