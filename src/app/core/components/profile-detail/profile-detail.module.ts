import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from './profile-detail.component';
import {PatientProfileDetailModule} from "../patient-profile-detail/patient-profile-detail.module";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzDividerModule} from "ng-zorro-antd/divider";



@NgModule({
  declarations: [
    ProfileDetailComponent
  ],
  exports: [
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    PatientProfileDetailModule,
    NzTypographyModule,
    NzGridModule,
    NzDividerModule
  ]
})
export class ProfileDetailModule { }
