import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VcnRssRoutingModule } from './vcn-rss-routing.module';
import { VcnSiteComponent } from './vcn-site/vcn-site.component';
import { VcnPackageComponent } from './vcn-package/vcn-package.component';
import {SemiDatatableModule} from "../../core/components/semi-datatable/semi-datatable.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import { VcnSiteFormComponent } from './vcn-site/vcn-site-form/vcn-site-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import { VcnPackageFormComponent } from './vcn-package/vcn-package-form/vcn-package-form.component';


@NgModule({
  declarations: [
    VcnSiteComponent,
    VcnPackageComponent,
    VcnSiteFormComponent,
    VcnPackageFormComponent
  ],
  imports: [
    CommonModule,
    VcnRssRoutingModule,
    SemiDatatableModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule
  ]
})
export class VcnRssModule { }
