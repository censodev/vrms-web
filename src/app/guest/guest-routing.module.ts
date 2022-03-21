import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuestComponent} from "./guest.component";
import {AuthGuard} from "../auth/auth.guard";
import {GuestDashboardComponent} from "./guest-dashboard/guest-dashboard.component";
import {GuestVcnProfileFormComponent} from "./guest-vcn-profile-form/guest-vcn-profile-form.component";
import {GuestPatientProfileFormComponent} from "./guest-patient-profile-form/guest-patient-profile-form.component";
import {GuestVcnProfileDetailComponent} from "./guest-vcn-profile-detail/guest-vcn-profile-detail.component";

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: GuestDashboardComponent},
      {path: 'dashboard/:id', component: GuestVcnProfileDetailComponent},
      {path: 'register', component: GuestVcnProfileFormComponent},
      {path: 'register/profile', component: GuestPatientProfileFormComponent},
      {path: '', redirectTo: 'dashboard'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
