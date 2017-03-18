import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootReducer } from '../reducers';
import { FakeUserService } from '../shared/services/fake-user.service';
import { UserActions } from '../actions/user';


@NgModule({
  imports: [
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule,
    StoreDevtoolsModule
  ],
  declarations: [],
  providers: [
    FakeUserService,
    UserActions
  ],
})
export class CoreModule { }
