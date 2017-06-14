import { NgModule } from '@angular/core';

import { SharedModule } from '@/shared';
import { MessengerRoutingModule } from './messenger.routing';
import { MessengerLayoutComponent } from './layouts';
import { PanelContainerComponent } from './containers';
import {
  PanelComponent,
  CanvasComponent,
  DialogItemComponent,
  DialogTabsComponent
} from './components';


const COMPONENTS = [
  MessengerLayoutComponent,
  PanelContainerComponent,
  PanelComponent,
  CanvasComponent,
  DialogItemComponent,
  DialogTabsComponent
];

@NgModule({
  imports: [
    SharedModule,
    MessengerRoutingModule
  ],
  exports: [
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [],
})
export class MessengerModule { }
