import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/auth.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  appName = environment.appName;

  constructor(private auth: AuthService,
              private message: NzMessageService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
      .subscribe(res => {
          if (res) {
            this.router.navigate(['/auth/login'])
              .then(() => this.message.success('Đăng xuất thành công'));
          } else {
            this.message.error('Đăng xuất thất bại');
          }
        }
      )
  }
}
