import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VcnSiteComponent} from "./vcn-site/vcn-site.component";
import {VcnPackageComponent} from "./vcn-package/vcn-package.component";

const routes: Routes = [
  {path: 'site', component: VcnSiteComponent},
  {path: 'package', component: VcnPackageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VcnRssRoutingModule {
}
