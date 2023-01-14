import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    WidgetsModule
  ]
})
export class BlogsModule { }
