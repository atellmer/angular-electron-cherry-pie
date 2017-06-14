import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing';
import { HeaderModule } from './features/header';
import { MessengerModule } from './features/messenger';
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
