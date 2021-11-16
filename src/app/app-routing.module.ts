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
  { path: 'progress-bar', loadChildren: () => import('./progress-bar/progress-bar.module').then(m => m.ProgressBarModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
