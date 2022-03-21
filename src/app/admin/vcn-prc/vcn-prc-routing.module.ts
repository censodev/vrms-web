import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VcnPrcCheckInComponent} from "./vcn-prc-check-in/vcn-prc-check-in.component";
import {VcnPrcTestComponent} from "./vcn-prc-test/vcn-prc-test.component";
import {VcnPrcPaymentComponent} from "./vcn-prc-payment/vcn-prc-payment.component";
import {VcnPrcMonitorComponent} from "./vcn-prc-monitor/vcn-prc-monitor.component";

const routes: Routes = [
  {path: 'check-in', component: VcnPrcCheckInComponent},
  {path: 'test', component: VcnPrcTestComponent},
  {path: 'pay', component: VcnPrcPaymentComponent},
  {path: 'monitor', component: VcnPrcMonitorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VcnPrcRoutingModule {
}
