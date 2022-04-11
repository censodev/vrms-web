import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VcnRssRoutingModule} from './vcn-rss-routing.module';
import {VcnSiteComponent} from './vcn-site/vcn-site.component';
import {VcnPackageComponent} from './vcn-package/vcn-package.component';
import {SemiDatatableModule} from "../../core/components/semi-datatable/semi-datatable.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {VcnSiteFormComponent} from './vcn-site/vcn-site-form/vcn-site-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {VcnPackageFormComponent} from './vcn-package/vcn-package-form/vcn-package-form.component';
import {VcnScreeningTmplComponent} from './vcn-screening-tmpl/vcn-screening-tmpl.component';
import {
  VcnScreeningTmplFormComponent
} from './vcn-screening-tmpl/vcn-screening-tmpl-form/vcn-screening-tmpl-form.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    VcnSiteComponent,
    VcnPackageComponent,
    VcnSiteFormComponent,
    VcnPackageFormComponent,
    VcnScreeningTmplComponent,
    VcnScreeningTmplFormComponent,
  ],
  imports: [
    CommonModule,
    VcnRssRoutingModule,
    SemiDatatableModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    NzTableModule,
    NzIconModule,
    DragDropModule
  ]
})
export class VcnRssModule {
}
