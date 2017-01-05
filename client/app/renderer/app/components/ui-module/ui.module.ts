import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

// Components
import { SearchbarComponent }   from './searchbar/searchbar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';


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
