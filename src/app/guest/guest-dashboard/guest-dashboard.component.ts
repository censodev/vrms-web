import {Component, OnInit} from '@angular/core';
import {VcnProfileRes} from "../../core/payload/profile.payload";
import {ProfileService} from "../../core/services/profile.service";
import {map} from "rxjs/operators";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.scss']
})
export class GuestDashboardComponent implements OnInit {
  vcnProfiles!: VcnProfileRes[];
  loading = true;

  constructor(private profileService: ProfileService,
              private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.profileService.getMyVcnProfiles()
      .pipe(map(res => res.data.content))
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
