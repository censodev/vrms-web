import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuestComponent} from "./guest.component";
import {AuthGuard} from "../auth/auth.guard";
import {GuestDashboardComponent} from "./guest-dashboard/guest-dashboard.component";
import {GuestVcnRegisterComponent} from "./guest-vcn-register/guest-vcn-register.component";
import {GuestPatientProfileComponent} from "./guest-patient-profile/guest-patient-profile.component";
import {
  GuestPatientProfileCreateComponent
} from "./guest-patient-profile-create/guest-patient-profile-create.component";

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: GuestDashboardComponent},
      {path: 'register', component: GuestVcnRegisterComponent},
      {path: 'profile', component: GuestPatientProfileComponent},
      {path: 'profile/create', component: GuestPatientProfileCreateComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
