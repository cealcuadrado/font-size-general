import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizedCardRoutingModule } from './customized-card-routing.module';
import { CustomizedCardComponent } from './customized-card.component';


@NgModule({
  declarations: [
    CustomizedCardComponent
  ],
  imports: [
    CommonModule,
    CustomizedCardRoutingModule
  ]
})
export class CustomizedCardModule { }
