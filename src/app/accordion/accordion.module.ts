import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';


@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    NgbModule
  ]
})
export class AccordionModule { }
