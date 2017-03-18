import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { AppbarContainerComponent } from './containers/appbar';
import { PanelContainerComponent } from './containers/panel';

import { MessengerComponent } from './layout';
import { AppbarComponent } from './components/appbar';
import { LogoComponent } from './components/logo';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';
import { DialogItemComponent } from './components/dialog-item';
import { DialogTabsComponent } from './components/dialog-tabs';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    AppbarContainerComponent,
    PanelContainerComponent,
    MessengerComponent,
    AppbarComponent,
    LogoComponent,
    PanelComponent,
    CanvasComponent,
    DialogItemComponent,
    DialogTabsComponent
  ],
  declarations: [
    AppbarContainerComponent,
    PanelContainerComponent,
    MessengerComponent,
    AppbarComponent,
    LogoComponent,
    PanelComponent,
    CanvasComponent,
    DialogItemComponent,
    DialogTabsComponent
  ],
  providers: [],
})
export class MessengerModule { }
