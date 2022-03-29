import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from "./account.component";
import {AccountFormComponent} from "./account-form/account-form.component";

const routes: Routes = [
  {path:'', component: AccountComponent},
  {path:'create', component: AccountFormComponent, data: {method: 'create'}},
  {path:':id', component: AccountFormComponent, data: {method: 'edit'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
