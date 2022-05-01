import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VcnProfileStatusPipe } from './vcn-profile-status.pipe';



@NgModule({
  declarations: [
    VcnProfileStatusPipe
  ],
  exports: [
    VcnProfileStatusPipe
  ],
  imports: [
    CommonModule
  ]
})
export class VcnProfileStatusPipeModule { }
