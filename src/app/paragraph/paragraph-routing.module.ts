import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphComponent } from './paragraph.component';

const routes: Routes = [{ path: '', component: ParagraphComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParagraphRoutingModule { }
