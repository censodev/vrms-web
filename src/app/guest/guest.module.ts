import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GuestRoutingModule} from './guest-routing.module';
import {GuestComponent} from './guest.component';
import {GuestDashboardComponent} from './guest-dashboard/guest-dashboard.component';
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {GuestVcnProfileCardComponent} from './guest-vcn-profile-card/guest-vcn-profile-card.component';
import {GuestVcnProfileFormComponent} from './guest-vcn-profile-form/guest-vcn-profile-form.component';
import {GuestVcnProfileDetailComponent} from './guest-vcn-profile-detail/guest-vcn-profile-detail.component';
import {GuestPatientProfileFormComponent} from './guest-patient-profile-form/guest-patient-profile-form.component';
import {GuestNavbarMobileComponent} from './guest-navbar-mobile/guest-navbar-mobile.component';
import {GuestHeaderMobileComponent} from './guest-header-mobile/guest-header-mobile.component';
import {GuestHeaderComponent} from './guest-header/guest-header.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {PatientProfileDetailModule} from "../core/components/patient-profile-detail/patient-profile-detail.module";
import {ProfileDetailModule} from "../core/components/profile-detail/profile-detail.module";
import {VcnProfileStatusPipeModule} from "../core/pipes/vcn-profile-status/vcn-profile-status-pipe.module";
import {VcnProfileStatusDirectiveModule} from "../core/directives/vcn-profile-status/vcn-profile-status-directive.module";


@NgModule({
  declarations: [
    GuestComponent,
    GuestDashboardComponent,
    GuestVcnProfileCardComponent,
    GuestVcnProfileFormComponent,
    GuestVcnProfileDetailComponent,
    GuestPatientProfileFormComponent,
    GuestNavbarMobileComponent,
    GuestHeaderMobileComponent,
    GuestHeaderComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    NzAvatarModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzGridModule,
    NzPageHeaderModule,
    NzDatePickerModule,
    NzInputModule,
    NzCardModule,
    NzTypographyModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzSpinModule,
    PatientProfileDetailModule,
    ProfileDetailModule,
    VcnProfileStatusDirectiveModule,
    VcnProfileStatusPipeModule,
  ]
})
export class GuestModule {
}
