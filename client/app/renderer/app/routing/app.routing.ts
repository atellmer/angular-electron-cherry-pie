import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MessengerComponent } from '../features/messenger/layout';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'messenger'
  },
  {
    path: 'messenger',
    component: MessengerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
