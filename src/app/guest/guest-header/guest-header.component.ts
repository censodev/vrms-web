import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrls: ['./guest-header.component.scss']
})
export class GuestHeaderComponent implements OnInit {
  @Input() appName!: string;

  constructor(private auth: AuthService,
              private router: Router,
              private message: NzMessageService) { }

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
