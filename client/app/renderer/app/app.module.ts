import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';

// Modules
import { UIModule } from './components/ui-module';

// Containers
import { AppbarContainerComponent } from './containers/appbar';
import { PanelContainerComponent } from './containers/panel';

// Components
import { AppComponent } from './app.component';
import { RootLayoutComponent } from './layouts/root';
import { AppbarComponent } from './components/appbar';
import { LogoComponent } from './components/logo';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';
import { DialogItemComponent } from './components/dialog-item';
import { DialogTabsComponent } from './components/dialog-tabs';

// Services
import { FakeUserService } from './shared/services/fake-user.service';
import { UserActions } from './actions/user';

import { rootReducer } from './reducers';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    MaterialModule.forRoot(),
    UIModule
  ],
  declarations: [
    AppComponent,
    RootLayoutComponent,
    AppbarContainerComponent,
    PanelContainerComponent,
    AppbarComponent,
    LogoComponent,
    PanelComponent,
    CanvasComponent,
    DialogItemComponent,
    DialogTabsComponent
  ],
  providers: [
    FakeUserService,
    UserActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
