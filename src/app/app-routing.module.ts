import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'example',
    pathMatch: 'full',
  },
  {
    path: 'example',
    loadChildren: () =>
      import('./examples/examples.module').then((m) => m.ExamplesModule),
  },
  { path: 'rental-agency', loadChildren: () => import('./rental-agency/rental-agency.module').then(m => m.RentalAgencyModule) },
  { path: 'bus-rental', loadChildren: () => import('./bus-rental/bus-rental.module').then(m => m.BusRentalModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
