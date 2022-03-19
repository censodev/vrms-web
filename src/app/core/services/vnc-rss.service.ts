import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageRes} from "../payload/page.res";
import {VcnPackageRes, VcnSiteRes} from "../payload/vcn-rss.payload";
import {environment} from "../../../environments/environment";
import {Res} from "../payload/res";

@Injectable({
  providedIn: 'root'
})
export class VncRssService {

  constructor(private http: HttpClient) { }

  searchPackages(kw: string): Observable<Res<PageRes<VcnPackageRes>>> {
    return this.http.get<Res<PageRes<VcnPackageRes>>>(`${environment.apiEndpoint}/vcn/resource/package?keyword=${kw}`);
  }

  searchSites(kw: string): Observable<Res<PageRes<VcnSiteRes>>> {
    return this.http.get<Res<PageRes<VcnSiteRes>>>(`${environment.apiEndpoint}/vcn/resource/site?keyword=${kw}`);
  }
}
