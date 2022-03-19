import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Res} from "../payload/res";
import {PatientProfileCreateReq, PatientProfileRes, VcnProfileCreateReq} from "../payload/profile.payload";
import {environment} from "../../../environments/environment";
import {PageRes} from "../payload/page.res";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  createPatientProfile(body: PatientProfileCreateReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/profile/patient`, body);
  }

  getMyPatientProfiles(): Observable<Res<PageRes<PatientProfileRes>>> {
    return this.http.get<Res<PageRes<PatientProfileRes>>>(`${environment.apiEndpoint}/profile/patient/me`);
  }

  createVcnProfile(body: VcnProfileCreateReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/profile/vcn`, body);
  }
}
