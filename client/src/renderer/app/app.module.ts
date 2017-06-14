import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { RoutingModule } from './routing';
import {
  HeaderModule,
  MessengerModule
} from './features';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    RoutingModule,
    HeaderModule,
    MessengerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
