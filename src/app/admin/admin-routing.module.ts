import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AuthAdminGuard} from "../auth/auth-admin.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthAdminGuard],
    children: [
      {path: 'agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
