import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VcnProfileStatusDirective } from './vcn-profile-status.directive';



@NgModule({
    declarations: [
        VcnProfileStatusDirective
    ],
    exports: [
        VcnProfileStatusDirective
    ],
    imports: [
        CommonModule
    ]
})
export class VcnProfileStatusDirectiveModule { }
