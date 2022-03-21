import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VcnRssRoutingModule } from './vcn-rss-routing.module';
import { VcnSiteComponent } from './vcn-site/vcn-site.component';
import { VcnPackageComponent } from './vcn-package/vcn-package.component';


@NgModule({
  declarations: [
    VcnSiteComponent,
    VcnPackageComponent
  ],
  imports: [
    CommonModule,
    VcnRssRoutingModule
  ]
})
export class VcnRssModule { }
