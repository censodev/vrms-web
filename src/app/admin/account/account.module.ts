import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountFormComponent } from './account-form/account-form.component';
import {SemiDatatableModule} from "../../core/components/semi-datatable/semi-datatable.module";


@NgModule({
  declarations: [
    AccountComponent,
    AccountFormComponent
  ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        SemiDatatableModule
    ]
})
export class AccountModule { }
