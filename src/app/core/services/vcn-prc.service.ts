import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Res} from "../payload/res";
import {environment} from "../../../environments/environment";
import {VcnProcessPaymentReq, VcnProcessTestReq} from "../payload/vcn-prc.payload";

@Injectable({
  providedIn: 'root'
})
export class VcnPrcService {

  constructor(private http: HttpClient) {
  }

  checkIn(vcnProfileId: number): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/process/check-in`, {vcnProfileId})
  }

  test(body: VcnProcessTestReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/process/test`, body)
  }

  pay(body: VcnProcessPaymentReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/process/pay`, body)
  }

  cancel(vcnProfileId: number): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/process/cancel`, {vcnProfileId})
  }

  inject(vcnProfileId: number): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/process/inject`, {vcnProfileId})
  }

  complete(vcnProfileId: number): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/process/complete`, {vcnProfileId})
  }
}
