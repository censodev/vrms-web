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
import {
  GuestPatientProfileDetailComponent
} from './guest-patient-profile-detail/guest-patient-profile-detail.component';
import {GuestNavbarMobileComponent} from './guest-navbar-mobile/guest-navbar-mobile.component';
import {GuestHeaderMobileComponent} from './guest-header-mobile/guest-header-mobile.component';
import {GuestHeaderComponent} from './guest-header/guest-header.component';
import {NzModalModule} from "ng-zorro-antd/modal";


@NgModule({
  declarations: [
    GuestComponent,
    GuestDashboardComponent,
    GuestVcnProfileCardComponent,
    GuestVcnProfileFormComponent,
    GuestVcnProfileDetailComponent,
    GuestPatientProfileFormComponent,
    GuestPatientProfileDetailComponent,
    GuestNavbarMobileComponent,
    GuestHeaderMobileComponent,
    GuestHeaderComponent
  ],
  exports: [
    GuestPatientProfileDetailComponent
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
  ]
})
export class GuestModule {
}
