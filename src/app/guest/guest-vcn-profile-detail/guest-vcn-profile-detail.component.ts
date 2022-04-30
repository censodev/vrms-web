import {Component, OnInit} from '@angular/core';
import {VcnProfileRes} from "../../core/payload/profile.payload";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../core/services/profile.service";
import {concatMap} from "rxjs";
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

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private msg: NzMessageService,
              public location: Location) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      concatMap(params => this.profileService.getVcnProfile(params['id']))
    ).subscribe({
      next: res => {
        this.profile = res.data
        this.loading = false
      },
      error: () => {
        this.msg.error('Có lỗi xảy ra từ máy chủ')
        this.loading = false
      }
    })
  }

}
