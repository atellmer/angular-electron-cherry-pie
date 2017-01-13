import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { MaterialModule } from '@angular/material';

// Modules
import { UIModule } from './components/ui-module/ui.module';

// Components
import { AppComponent } from './containers/app.component';
import { RootLayoutComponent } from './components//root-layout/root-layout.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { LogoComponent } from './components//logo/logo.component';
import { PanelComponent } from './components/panel/panel.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { DialogItemComponent } from './components/dialog-item/dialog-item.component';

// Services
import { FakeUserService } from './shared/services//fake-user.service';
import { UserActions } from './actions/user';

import { rootReducer } from './reducers';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    MaterialModule.forRoot(),
    UIModule
  ],
  declarations: [
    AppComponent,
    RootLayoutComponent,
    AppbarComponent,
    LogoComponent,
    PanelComponent,
    CanvasComponent,
    DialogItemComponent
  ],
  providers: [
    FakeUserService,
    UserActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
