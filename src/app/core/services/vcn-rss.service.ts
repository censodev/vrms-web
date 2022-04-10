import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageRes} from "../payload/page.res";
import {
  VcnPackageCreateReq,
  VcnPackageRes, VcnPackageUpdateReq, VcnScreeningTmplRes,
  VcnSiteCreateReq,
  VcnSiteRes,
  VcnSiteUpdateReq
} from "../payload/vcn-rss.payload";
import {environment} from "../../../environments/environment";
import {Res} from "../payload/res";

@Injectable({
  providedIn: 'root'
})
export class VcnRssService {

  constructor(private http: HttpClient) { }

  searchPackages(kw: string): Observable<Res<PageRes<VcnPackageRes>>> {
    return this.http.get<Res<PageRes<VcnPackageRes>>>(`${environment.apiEndpoint}/vcn/resource/package?keyword=${kw}`);
  }

  getPackage(id: number): Observable<Res<VcnPackageRes>> {
    return this.http.get<Res<VcnPackageRes>>(`${environment.apiEndpoint}/vcn/resource/package/${id}`);
  }

  searchSites(kw: string): Observable<Res<PageRes<VcnSiteRes>>> {
    return this.http.get<Res<PageRes<VcnSiteRes>>>(`${environment.apiEndpoint}/vcn/resource/site?keyword=${kw}`);
  }

  getSite(id: number): Observable<Res<VcnSiteRes>> {
    return this.http.get<Res<VcnSiteRes>>(`${environment.apiEndpoint}/vcn/resource/site/${id}`)
  }

  createSite(body: VcnSiteCreateReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/resource/site`, body)
  }

  updateSite(body: VcnSiteUpdateReq): Observable<Res<any>> {
    return this.http.put<Res<any>>(`${environment.apiEndpoint}/vcn/resource/site`, body)
  }

  createPackage(body: VcnPackageCreateReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/resource/package`, body)
  }

  updatePackage(body: VcnPackageUpdateReq): Observable<Res<any>> {
    return this.http.put<Res<any>>(`${environment.apiEndpoint}/vcn/resource/package`, body)
  }

  searchScreeningTmpl(kw: string): Observable<Res<PageRes<VcnScreeningTmplRes>>> {
    return this.http.get<Res<PageRes<VcnScreeningTmplRes>>>(`${environment.apiEndpoint}/vcn/resource/screening-tmpl?keyword=${kw}`);
  }
}
