import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

// Components
import { SearchbarComponent }   from './searchbar/searchbar.component';
import { AvatarComponent } from './avatar/avatar.component';


@NgModule({
  imports: [
    MaterialModule.forRoot()
  ],
  exports: [
    SearchbarComponent,
    AvatarComponent
  ],
  declarations: [
    SearchbarComponent,
    AvatarComponent
  ],
  providers: [],
})
export class UIModule { }
