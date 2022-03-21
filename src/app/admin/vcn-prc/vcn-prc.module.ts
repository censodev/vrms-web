import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VcnPrcRoutingModule } from './vcn-prc-routing.module';
import { VcnPrcCheckInComponent } from './vcn-prc-check-in/vcn-prc-check-in.component';
import { VcnPrcPaymentComponent } from './vcn-prc-payment/vcn-prc-payment.component';
import { VcnPrcTestComponent } from './vcn-prc-test/vcn-prc-test.component';
import { VcnPrcMonitorComponent } from './vcn-prc-monitor/vcn-prc-monitor.component';


@NgModule({
  declarations: [
    VcnPrcCheckInComponent,
    VcnPrcPaymentComponent,
    VcnPrcTestComponent,
    VcnPrcMonitorComponent
  ],
  imports: [
    CommonModule,
    VcnPrcRoutingModule
  ]
})
export class VcnPrcModule { }
