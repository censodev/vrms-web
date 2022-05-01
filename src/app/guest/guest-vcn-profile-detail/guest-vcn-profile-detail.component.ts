import {Component, OnInit} from '@angular/core';
import {VcnProfileHistoryRes, VcnProfilePaymentRes, VcnProfileRes} from "../../core/payload/profile.payload";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../core/services/profile.service";
import {combineLatest, concatMap} from "rxjs";
import {NzMessageService} from "ng-zorro-antd/message";
import {Location} from "@angular/common";

@Component({
  selector: 'app-guest-vcn-profile-detail',
  templateUrl: './guest-vcn-profile-detail.component.html',
  styleUrls: ['./guest-vcn-profile-detail.component.scss']
})
export class GuestVcnProfileDetailComponent implements OnInit {
  profile!: VcnProfileRes;
  loading = true;
  profileHistories!: VcnProfileHistoryRes[];
  profilePayments!: VcnProfilePaymentRes[];

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private msg: NzMessageService,
              public location: Location) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      concatMap(params => combineLatest([
        this.profileService.getVcnProfile(params['id']),
        this.profileService.getVcnProfileHistories(params['id']),
        this.profileService.getVcnProfilePayments(params['id']),
      ]))
    ).subscribe({
      next: res => {
        this.profile = res[0].data
        this.profileHistories = res[1].data
        this.profilePayments = res[2].data
        this.loading = false
      },
      error: () => {
        this.msg.error('Có lỗi xảy ra từ máy chủ')
        this.loading = false
      }
    })
  }

}
