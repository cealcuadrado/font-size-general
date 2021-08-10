import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';
import { UiSwitchModule } from 'ngx-ui-switch';


@NgModule({
  declarations: [
    SwitchComponent
  ],
  imports: [
    CommonModule,
    SwitchRoutingModule,
    UiSwitchModule.forRoot({
      size: 'large',
      checkedLabel: 'Si',
      uncheckedLabel: 'No',
      checkedTextColor: '#ffffff',
      uncheckedTextColor: '#454545'
    })
  ]
})
export class SwitchModule { }
