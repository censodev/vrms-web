import {Component, Input, OnInit} from '@angular/core';
import {VcnProfileRes} from "../../core/payload/profile.payload";
import {VcnProfileStatusEnum} from "../../core/enums/vcn-profile-status.enum";
import {NzModalService} from "ng-zorro-antd/modal";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-guest-vcn-profile-card',
  templateUrl: './guest-vcn-profile-card.component.html',
  styleUrls: ['./guest-vcn-profile-card.component.scss']
})
export class GuestVcnProfileCardComponent implements OnInit {
  @Input() profile!: VcnProfileRes;
  vcnProfileStatusEnum = VcnProfileStatusEnum;

  constructor(private modal: NzModalService,
              private msg: NzMessageService) {
  }

  ngOnInit(): void {
  }

  canBeCanceled(status: VcnProfileStatusEnum): boolean {
    return status === VcnProfileStatusEnum.CREATED
      || status === VcnProfileStatusEnum.CHECKED_IN;
  }

  openDeleteModal(profile: VcnProfileRes) {
    this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn hủy tiêm?',
      nzOkText: 'Có',
      nzCancelText: 'Không',
      nzOnOk: () => this.cancelVcn(profile),
    })
  }

  cancelVcn(profile: VcnProfileRes) {
    this.msg.success('Hủy tiêm thành công')
  }
}
