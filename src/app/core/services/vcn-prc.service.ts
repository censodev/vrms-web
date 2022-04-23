import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Res} from "../payload/res";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VcnPrcService {

  constructor(private http: HttpClient) {
  }

  checkIn(vcnProfileId: number): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/vcn/process/check-in`, {vcnProfileId})
  }
}
