import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AppbarContainerComponent } from './containers/appbar';
import { AppbarComponent } from './components/appbar';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    AppbarContainerComponent,
    AppbarComponent
  ],
  declarations: [
    AppbarContainerComponent,
    AppbarComponent
  ],
  providers: []
})
export class HeaderModule {}
