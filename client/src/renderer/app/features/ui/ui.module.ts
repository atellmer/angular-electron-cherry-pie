import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { LogoComponent } from './logo';
import { SearchbarComponent }   from './searchbar';
import { AvatarComponent } from './avatar';
import { BadgeComponent } from './badge';


@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    LogoComponent,
    SearchbarComponent,
    AvatarComponent,
    BadgeComponent
  ],
  declarations: [
    LogoComponent,
    SearchbarComponent,
    AvatarComponent,
    BadgeComponent
  ],
  providers: [],
})
export class UIModule { }
