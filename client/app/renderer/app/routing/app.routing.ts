import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {  MessengerContainerComponent, } from '../features/messenger/containers/messenger';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'messenger'
  },
  {
    path: 'messenger',
    component: MessengerContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
