import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'paragraph',
    loadChildren: () =>
      import('./paragraph/paragraph.module').then((m) => m.ParagraphModule),
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('./buttons/buttons.module').then((m) => m.ButtonsModule),
  },
  {
    path: 'switch',
    loadChildren: () =>
      import('./switch/switch.module').then((m) => m.SwitchModule),
  },
  {
    path: 'accordion',
    loadChildren: () =>
      import('./accordion/accordion.module').then((m) => m.AccordionModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
