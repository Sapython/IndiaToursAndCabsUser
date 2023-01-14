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
  { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'blogsDetails', loadChildren: () => import('./blogs-details/blogs-details.module').then(m => m.BlogsDetailsModule) },
  { path: 'contactUs', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'aboutUs', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
