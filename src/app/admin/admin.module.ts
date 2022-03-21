import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {IconsProviderModule} from "../icons-provider.module";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzDividerModule} from "ng-zorro-antd/divider";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        NzLayoutModule,
        NzMenuModule,
        IconsProviderModule,
        NzAvatarModule,
        NzDropDownModule,
        NzDividerModule,
    ]
})
export class AdminModule {
}
