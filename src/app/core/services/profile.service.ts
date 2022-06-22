import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {combineLatest, Observable} from "rxjs";
import {Res} from "../payload/res";
import {
  PatientProfileCreateReq,
  PatientProfileRes,
  VcnProfileCreateReq, VcnProfileHistoryRes, VcnProfilePaymentRes,
  VcnProfileRes
} from "../payload/profile.payload";
import {environment} from "../../../environments/environment";
import {PageRes} from "../payload/page.res";
import {ProfileDetailComponent} from "../components/profile-detail/profile-detail.component";
import {NzModalService} from "ng-zorro-antd/modal";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,
              private modal: NzModalService) { }

  createPatientProfile(body: PatientProfileCreateReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/profile/patient`, body);
  }

  getMyPatientProfiles(): Observable<Res<PageRes<PatientProfileRes>>> {
    return this.http.get<Res<PageRes<PatientProfileRes>>>(`${environment.apiEndpoint}/profile/patient/me`);
  }

  createVcnProfile(body: VcnProfileCreateReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/profile/vcn`, body);
  }

  getMyVcnProfiles(): Observable<Res<PageRes<VcnProfileRes>>> {
    return this.http.get<Res<PageRes<VcnProfileRes>>>(`${environment.apiEndpoint}/profile/vcn/me?sortedBy=id&sort=DESC&size=100000`);
  }

  getVcnProfile(id: number): Observable<Res<VcnProfileRes>> {
    return this.http.get<Res<VcnProfileRes>>(`${environment.apiEndpoint}/profile/vcn/${id}`);
  }

  getVcnProfileHistories(profileId: number): Observable<Res<VcnProfileHistoryRes[]>> {
    return this.http.get<Res<VcnProfileHistoryRes[]>>(`${environment.apiEndpoint}/profile/vcn/${profileId}/history`);
  }

  getVcnProfilePayments(profileId: number): Observable<Res<VcnProfilePaymentRes[]>> {
    return this.http.get<Res<VcnProfilePaymentRes[]>>(`${environment.apiEndpoint}/profile/vcn/${profileId}/payment`);
  }

  openProfileDetailModal(profile: VcnProfileRes) {
    combineLatest([
      this.getVcnProfileHistories(profile.id),
      this.getVcnProfilePayments(profile.id),
    ]).subscribe(res => {
      this.modal.create({
        nzWidth: '90%',
        nzContent: ProfileDetailComponent,
        nzComponentParams: {
          profile: profile,
          isAdminOrAgent: true,
          profileHistories: res[0].data,
          profilePayments: res[1].data,
        },
        nzFooter: null,
      })
    })
  }
}
