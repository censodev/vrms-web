import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from './profile-detail.component';
import {PatientProfileDetailModule} from "../patient-profile-detail/patient-profile-detail.module";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";
import {VcnProfileStatusPipeModule} from "../../pipes/vcn-profile-status/vcn-profile-status-pipe.module";
import {VcnProfileStatusDirectiveModule} from "../../directives/vcn-profile-status/vcn-profile-status-directive.module";



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
    NzDividerModule,
    NzTableModule,
    VcnProfileStatusPipeModule,
    VcnProfileStatusDirectiveModule
  ]
})
export class ProfileDetailModule { }
