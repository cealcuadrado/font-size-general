import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphRoutingModule } from './paragraph-routing.module';
import { ParagraphComponent } from './paragraph.component';


@NgModule({
  declarations: [
    ParagraphComponent
  ],
  imports: [
    CommonModule,
    ParagraphRoutingModule
  ]
})
export class ParagraphModule { }
