import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import { GuestNavbarComponent } from './guest-navbar/guest-navbar.component';
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import { GuestVcnRegisterComponent } from './guest-vcn-register/guest-vcn-register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import { GuestPatientProfileComponent } from './guest-patient-profile/guest-patient-profile.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzInputModule} from "ng-zorro-antd/input";
import { GuestPatientProfileCreateComponent } from './guest-patient-profile-create/guest-patient-profile-create.component';
import {NzCardModule} from "ng-zorro-antd/card";


@NgModule({
  declarations: [
    GuestComponent,
    GuestDashboardComponent,
    GuestNavbarComponent,
    GuestVcnRegisterComponent,
    GuestPatientProfileComponent,
    GuestPatientProfileCreateComponent
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
    ]
})
export class GuestModule { }
