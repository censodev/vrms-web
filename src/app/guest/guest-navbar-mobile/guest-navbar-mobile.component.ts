import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-guest-navbar-mobile',
  templateUrl: './guest-navbar-mobile.component.html',
  styleUrls: ['./guest-navbar-mobile.component.scss']
})
export class GuestNavbarMobileComponent implements OnInit {
  @Output() logout = new EventEmitter();

  constructor(private modal: NzModalService) {
  }

  ngOnInit(): void {
  }

  confirmLogout() {
    this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn đăng xuất?',
      nzOkText: 'Có',
      nzCancelText: 'Không',
      nzOnOk: () => this.logout.emit(),
    });
  }
}
