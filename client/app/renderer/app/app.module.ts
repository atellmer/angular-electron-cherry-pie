import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LogoComponent } from './components//logo/logo.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { PanelComponent } from './components/panel/panel.component';

// Services
import { FakeUserService } from './services//fake-user.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AppbarComponent,
    AvatarComponent,
    LogoComponent,
    CanvasComponent,
    PanelComponent
  ],
  providers: [FakeUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
