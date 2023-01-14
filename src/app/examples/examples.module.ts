import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    ExamplesComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    WidgetsModule
  ]
})
export class ExamplesModule { }
