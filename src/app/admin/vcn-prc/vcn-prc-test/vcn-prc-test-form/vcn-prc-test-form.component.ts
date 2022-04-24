import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../../../core/services/profile.service";
import {concatMap, filter, tap} from "rxjs";
import {map} from "rxjs/operators";
import {VcnProfileRes} from "../../../../core/payload/profile.payload";
import {VcnRssService} from "../../../../core/services/vcn-rss.service";
import {VcnScreeningTmplRes} from "../../../../core/payload/vcn-rss.payload";
import {StatusEnum} from "../../../../core/enums/status.enum";
import {NzModalService} from "ng-zorro-antd/modal";
import {VcnPrcService} from "../../../../core/services/vcn-prc.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-vcn-prc-test-form',
  templateUrl: './vcn-prc-test-form.component.html',
  styleUrls: ['./vcn-prc-test-form.component.scss']
})
export class VcnPrcTestFormComponent implements OnInit {
  vcnProfile!: VcnProfileRes;
  screeningTmpl: VcnScreeningTmplRes = {
    data: [],
    title: '',
    id: 0,
    status: StatusEnum.ACTIVE,
  };
  screeningTmplLoading = true;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private vcnRssService: VcnRssService,
              private modal: NzModalService,
              private vcnPrcService: VcnPrcService,
              private msg: NzMessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        filter(params => params['id']),
        map(params => params['id']),
        concatMap(id => this.profileService.getVcnProfile(id)),
        tap(res => this.vcnProfile = res.data),
        concatMap(res => this.vcnRssService.getPackage(res.data.selectedPackageId)),
        concatMap(res => this.vcnRssService.getScreeningTmpl(res.data.screeningTemplateId)),
        tap(res => {
          this.screeningTmpl = res.data
          this.screeningTmplLoading = false
        }),
      )
      .subscribe()
  }

  submit(ok = true) {
    if (this.screeningTmpl.data.some(rc => !rc.hasOwnProperty('value') || rc.value === '')) {
      this.modal.warning({
        nzTitle: `Biểu mẫu chưa hoàn thiện`,
        nzContent: 'Vui lòng điền đầy đủ thông tin vào biểu mẫu khám sàng lọc',
        nzOkText: 'Xác nhận',
      });
      return
    }
    this.vcnPrcService.test({
      ok: ok,
      vcnProfileId: this.vcnProfile.id,
      data: this.screeningTmpl.data,
    }).subscribe({
      next: () => {
        this.msg.success('Gửi biểu mẫu thành công')
        this.router.navigate(['/admin/vcn/prc/test'])
      },
      error: () => this.msg.error('Gửi biểu mẫu thất bại')
    })
  }
}
