import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VcnSiteComponent} from "./vcn-site/vcn-site.component";
import {VcnPackageComponent} from "./vcn-package/vcn-package.component";
import {VcnSiteFormComponent} from "./vcn-site/vcn-site-form/vcn-site-form.component";
import {VcnPackageFormComponent} from "./vcn-package/vcn-package-form/vcn-package-form.component";

const routes: Routes = [
  {path: 'site', component: VcnSiteComponent},
  {path: 'site/create', component: VcnSiteFormComponent, data: {method: 'create'}},
  {path: 'site/:id', component: VcnSiteFormComponent, data: {method: 'edit'}},
  {path: 'package', component: VcnPackageComponent},
  {path: 'package/create', component: VcnPackageFormComponent, data: {method: 'create'}},
  {path: 'package/:id', component: VcnPackageFormComponent, data: {method: 'edit'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VcnRssRoutingModule {
}
