import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { PanelContainerComponent } from './containers/panel';

import { MessengerContainerComponent } from './containers/messenger';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';
import { DialogItemComponent } from './components/dialog-item';
import { DialogTabsComponent } from './components/dialog-tabs';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    MessengerContainerComponent,
    PanelContainerComponent,
    PanelComponent,
    CanvasComponent,
    DialogItemComponent,
    DialogTabsComponent
  ],
  declarations: [
    MessengerContainerComponent,
    PanelContainerComponent,
    PanelComponent,
    CanvasComponent,
    DialogItemComponent,
    DialogTabsComponent
  ],
  providers: [],
})
export class MessengerModule { }
