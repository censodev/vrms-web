import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AuthAdminGuard} from "../auth/auth-admin.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthAdminGuard],
    children: [
      {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'vcn/rss', loadChildren: () => import('./vcn-rss/vcn-rss.module').then(m => m.VcnRssModule)},
      {path: 'vcn/prc', loadChildren: () => import('./vcn-prc/vcn-prc.module').then(m => m.VcnPrcModule)},
      {path: '', redirectTo: 'dashboard'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
