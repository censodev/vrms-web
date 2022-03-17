import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuestComponent} from "./guest.component";
import {AuthGuard} from "../auth/auth.guard";
import {GuestDashboardComponent} from "./guest-dashboard/guest-dashboard.component";
import {GuestPatientProfileComponent} from "./guest-patient-profile/guest-patient-profile.component";
import {GuestVcnProfileFormComponent} from "./guest-vcn-profile-form/guest-vcn-profile-form.component";
import {GuestPatientProfileFormComponent} from "./guest-patient-profile-form/guest-patient-profile-form.component";

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: GuestDashboardComponent},
      {path: 'register', component: GuestVcnProfileFormComponent},
      {path: 'profile', component: GuestPatientProfileComponent},
      {path: 'profile/create', component: GuestPatientProfileFormComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
