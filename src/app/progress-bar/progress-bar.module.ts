import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';


@NgModule({
  declarations: [
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    NgbModule
  ]
})
export class ProgressBarModule { }
