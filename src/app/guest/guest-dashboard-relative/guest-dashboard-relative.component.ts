import { Component, OnInit } from '@angular/core';
import {VcnProfileRes} from "../../core/payload/profile.payload";
import {ProfileService} from "../../core/services/profile.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {map} from "rxjs/operators";
import {Location} from "@angular/common";

@Component({
  selector: 'app-guest-dashboard-relative',
  templateUrl: './guest-dashboard-relative.component.html',
  styleUrls: ['./guest-dashboard-relative.component.scss']
})
export class GuestDashboardRelativeComponent implements OnInit {

  vcnProfiles!: VcnProfileRes[];
  loading = true;

  constructor(private profileService: ProfileService,
              private msg: NzMessageService,
              public location: Location) {
  }

  ngOnInit(): void {
    this.profileService.getMyVcnProfiles()
      .pipe(map(res => res.data.content.filter(p => !p.patientProfile.primary)))
      .subscribe({
        next: data => {
          this.vcnProfiles = data
          this.loading = false
        },
        error: () => {
          this.msg.error('Đã có lỗi xảy ra trong quá trình tải dữ liệu hồ sơ')
          this.loading = false
        }
      })
  }

}
