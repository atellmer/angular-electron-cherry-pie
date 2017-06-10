var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
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
var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            StoreModule.provideStore(rootReducer),
            StoreDevtoolsModule.instrumentOnlyWithExtension(),
            MaterialModule.forRoot(),
            PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map