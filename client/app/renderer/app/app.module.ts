import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { SharedModule } from './shared/shared.module';
import { MessengerModule } from './features/messenger';
import { RoutingModule } from './routing';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    RoutingModule,
    MessengerModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
