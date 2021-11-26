import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizedCardComponent } from './customized-card.component';

const routes: Routes = [{ path: '', component: CustomizedCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizedCardRoutingModule { }
