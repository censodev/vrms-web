import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Res} from "../payload/res";
import {AccountRes} from "../payload/account.payload";
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
}
