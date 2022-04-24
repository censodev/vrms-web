import { Component, OnInit } from '@angular/core';
import {concatMap, filter, tap} from "rxjs";
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../../../core/services/profile.service";
import {VcnProfileRes} from "../../../../core/payload/profile.payload";
import {VcnPrcService} from "../../../../core/services/vcn-prc.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-vcn-prc-payment-form',
  templateUrl: './vcn-prc-payment-form.component.html',
  styleUrls: ['./vcn-prc-payment-form.component.scss']
})
export class VcnPrcPaymentFormComponent implements OnInit {
  vcnProfile!: VcnProfileRes;
  loading = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private profileService: ProfileService,
              private vcnPrcService: VcnPrcService,
              private msg: NzMessageService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        filter(params => params['id']),
        map(params => params['id']),
        concatMap(id => this.profileService.getVcnProfile(id)),
        tap(res => this.vcnProfile = res.data),
      )
      .subscribe(() => this.loading = false)
  }

  pay() {
    this.vcnPrcService.pay({
      vcnProfileId: this.vcnProfile.id,
      amount: this.vcnProfile.selectedPackage.price,
    }).subscribe({
      next: res => {
        this.msg.success(res.message)
        this.router.navigate(['/admin/vcn/prc/pay'])
      },
      error: () => this.msg.error('Thanh toán thất bại')
    })
  }

  cancel() {

  }
}
