import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SearchbarComponent }   from './searchbar';
import { AvatarComponent } from './avatar';
import { BadgeComponent } from './badge';


@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    SearchbarComponent,
    AvatarComponent,
    BadgeComponent
  ],
  declarations: [
    SearchbarComponent,
    AvatarComponent,
    BadgeComponent
  ],
  providers: [],
})
export class UIModule { }
