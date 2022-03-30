import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Res} from "../payload/res";
import {AccountCreateReq, AccountRes, AccountUpdateReq} from "../payload/account.payload";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getOne(id: number): Observable<Res<AccountRes>> {
    return this.http.get<Res<AccountRes>>(`${environment.apiEndpoint}/account/${id}`)
  }

  create(body: AccountCreateReq): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/account`, body);
  }

  update(body: AccountUpdateReq): Observable<Res<any>> {
    return this.http.put<Res<any>>(`${environment.apiEndpoint}/account`, body);
  }
}
