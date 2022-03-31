import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VcnRssRoutingModule } from './vcn-rss-routing.module';
import { VcnSiteComponent } from './vcn-site/vcn-site.component';
import { VcnPackageComponent } from './vcn-package/vcn-package.component';
import {SemiDatatableModule} from "../../core/components/semi-datatable/semi-datatable.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import { VcnSiteFormComponent } from './vcn-site/vcn-site-form/vcn-site-form.component';


@NgModule({
  declarations: [
    VcnSiteComponent,
    VcnPackageComponent,
    VcnSiteFormComponent
  ],
  imports: [
    CommonModule,
    VcnRssRoutingModule,
    SemiDatatableModule,
    NzButtonModule
  ]
})
export class VcnRssModule { }
