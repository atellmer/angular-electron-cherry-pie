import { NgModule } from '@angular/core';

import { SharedModule } from '@/shared';
import { MessengerRoutingModule } from './messenger.routing';
import { MessengerLayoutComponent } from './layouts';
import { PanelContainerComponent } from './containers/panel';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';
import { DialogItemComponent } from './components/dialog-item';
import { DialogTabsComponent } from './components/dialog-tabs';


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
