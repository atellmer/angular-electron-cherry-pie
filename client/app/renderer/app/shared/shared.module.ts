import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface
} from 'angular2-perfect-scrollbar';

import { UIModule } from '../features/ui';


const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    MaterialModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  exports: [
    CommonModule,
    MaterialModule,
    PerfectScrollbarModule,
    UIModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule {}
