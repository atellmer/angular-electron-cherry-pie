import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

// Components
import { SearchbarComponent }   from './searchbar';
import { AvatarComponent } from './avatar';
import { BadgeComponent } from './badge';


@NgModule({
  imports: [
    MaterialModule.forRoot()
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
