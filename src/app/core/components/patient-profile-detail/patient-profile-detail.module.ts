import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileDetailComponent } from './patient-profile-detail.component';
import {NzGridModule} from "ng-zorro-antd/grid";



@NgModule({
    declarations: [
        PatientProfileDetailComponent
    ],
    exports: [
        PatientProfileDetailComponent
    ],
  imports: [
    CommonModule,
    NzGridModule
  ]
})
export class PatientProfileDetailModule { }
