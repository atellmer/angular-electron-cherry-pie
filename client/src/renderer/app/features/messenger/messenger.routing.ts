import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessengerLayoutComponent } from './layouts';

const routes: Routes = [
  {
    path: 'messenger',
    component: MessengerLayoutComponent
  },
  {
    path: '**',
    redirectTo: 'messenger'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessengerRoutingModule { }
