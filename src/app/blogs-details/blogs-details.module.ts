import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsDetailsRoutingModule } from './blogs-details-routing.module';
import { BlogsDetailsComponent } from './blogs-details.component';


@NgModule({
  declarations: [
    BlogsDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogsDetailsRoutingModule
  ]
})
export class BlogsDetailsModule { }
