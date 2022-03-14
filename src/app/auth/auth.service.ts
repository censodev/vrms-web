import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Res} from "../core/payload/res";
import jwt_decode from "jwt-decode";
import {RoleEnum} from "./role.enum";

const TOKEN_KEY = '_token_030496';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookie: CookieService,
              private http: HttpClient) {
  }

  loginForAdmin(body: { username: string, password: string, remember: boolean }): Observable<Res<{ token: string, expires: number }>> {
    return this.login(`${environment.apiEndpoint}/auth/admin/login`, body);
  }

  loginForGuest(body: { phone: string, otp: string }): Observable<Res<{ token: string, expires: number }>> {
    return this.login(`${environment.apiEndpoint}/auth/login`, body);
  }

  private login(endpoint: string, body: any): Observable<Res<{ token: string, expires: number }>> {
    return this.http.post<Res<{ token: string, expires: number }>>(endpoint, body)
      .pipe(
        tap(res => {
          this.cookie.put(TOKEN_KEY, res.data?.token);
        }, err => {
          console.error(err);
        }),
      );
  }

  getOTP(phone: string): Observable<Res<any>> {
    return this.http.post<Res<any>>(`${environment.apiEndpoint}/auth/otp`, {phone: phone})
  }

  logout(): Observable<boolean> {
    this.cookie.remove(TOKEN_KEY);
    return this.isAuthorized().pipe(map(v => !v));
  }

  isAuthorized(): Observable<boolean> {
    return of((this.cookie.get(TOKEN_KEY) || null) != null);
  }

  getToken(): string {
    return this.cookie.get(TOKEN_KEY);
  }

  getPayload(): { credentials: any, exp: number, sub: string } {
    return jwt_decode(this.getToken());
  }

  getCred(): any {
    return JSON.parse(this.getPayload().credentials);
  }

  isGuest(): boolean {
    return this.getCred().role === RoleEnum.ROLE_GUEST;
  }

  isAgent(): boolean {
    return this.getCred().role === RoleEnum.ROLE_AGENT;
  }

  isAdmin(): boolean {
    return this.getCred().role === RoleEnum.ROLE_ADMIN;
  }
}
