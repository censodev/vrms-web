import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuestComponent} from "./guest.component";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    canActivate: [AuthGuard],
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
