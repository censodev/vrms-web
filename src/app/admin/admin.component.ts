import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;
  user: any;

  constructor(public auth: AuthService,
              private router: Router,
              private message: NzMessageService) { }

  ngOnInit(): void {
    this.user = this.auth.getCred();
  }

  logout() {
    this.auth.logout()
      .subscribe(res => {
          if (res) {
            this.router.navigate(['/auth/admin-login'])
              .then(() => this.message.success('Đăng xuất thành công'));
          } else {
            this.message.error('Đăng xuất thất bại');
          }
        }
      )
  }
}
