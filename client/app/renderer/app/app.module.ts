import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Modules
import { UIModule } from './components/ui-module/ui.module';

// Components
import { AppComponent } from './app.component';
import { RootLayoutComponent } from './components//root-layout/root-layout.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { LogoComponent } from './components//logo/logo.component';
import { PanelComponent } from './components/panel/panel.component';
import { CanvasComponent } from './components/canvas/canvas.component';

// Services
import { FakeUserService } from './shared/services//fake-user.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    UIModule
  ],
  declarations: [
    AppComponent,
    RootLayoutComponent,
    AppbarComponent,
    LogoComponent,
    PanelComponent,
    CanvasComponent
  ],
  providers: [FakeUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
