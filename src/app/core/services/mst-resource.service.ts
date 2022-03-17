import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Res} from "../payload/res";
import {environment} from "../../../environments/environment";
import {MstCountry, MstDistrict, MstNation, MstProvince, MstWard} from "../payload/mst.payload";

@Injectable({
  providedIn: 'root'
})
export class MstResourceService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<MstCountry[]> {
    return this.http.get<MstCountry[]>(`${environment.apiEndpoint}/mst/country`)
  }

  getNations(): Observable<MstNation[]> {
    return this.http.get<MstNation[]>(`${environment.apiEndpoint}/mst/nation`)
  }

  getProvinces(): Observable<MstProvince[]> {
    return this.http.get<MstProvince[]>(`${environment.apiEndpoint}/mst/province`)
  }

  getDistricts(provinceId: number): Observable<MstDistrict[]> {
    return this.http.get<MstDistrict[]>(`${environment.apiEndpoint}/mst/district?province=${provinceId}`)
  }

  getWards(districtId: number): Observable<MstWard[]> {
    return this.http.get<MstWard[]>(`${environment.apiEndpoint}/mst/ward?district=${districtId}`)
  }
}
