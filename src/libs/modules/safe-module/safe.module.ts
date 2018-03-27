import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SAFE_PIPES } from './pipes/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SAFE_PIPES],
  exports: [SAFE_PIPES]
})
export class SafeModule { }
