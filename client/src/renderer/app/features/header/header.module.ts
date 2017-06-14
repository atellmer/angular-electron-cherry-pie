import { NgModule } from '@angular/core';

import { SharedModule } from '@/shared';
import { AppbarContainerComponent } from './containers';
import { AppbarComponent } from './components';


const COMPONENTS = [
  AppbarContainerComponent,
  AppbarComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: []
})
export class HeaderModule {}
