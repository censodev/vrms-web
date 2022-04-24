import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VcnPrcRoutingModule } from './vcn-prc-routing.module';
import { VcnPrcCheckInComponent } from './vcn-prc-check-in/vcn-prc-check-in.component';
import { VcnPrcPaymentComponent } from './vcn-prc-payment/vcn-prc-payment.component';
import { VcnPrcTestComponent } from './vcn-prc-test/vcn-prc-test.component';
import { VcnPrcMonitorComponent } from './vcn-prc-monitor/vcn-prc-monitor.component';
import {SemiDatatableModule} from "../../core/components/semi-datatable/semi-datatable.module";
import {NzModalModule} from "ng-zorro-antd/modal";
import { VcnPrcTestFormComponent } from './vcn-prc-test/vcn-prc-test-form/vcn-prc-test-form.component';
import {GuestModule} from "../../guest/guest.module";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    VcnPrcCheckInComponent,
    VcnPrcPaymentComponent,
    VcnPrcTestComponent,
    VcnPrcMonitorComponent,
    VcnPrcTestFormComponent
  ],
    imports: [
        CommonModule,
        VcnPrcRoutingModule,
        SemiDatatableModule,
        NzModalModule,
        GuestModule,
        NzSelectModule,
        NzTableModule,
        NzInputModule,
        NzButtonModule,
        FormsModule,
    ]
})
export class VcnPrcModule { }
