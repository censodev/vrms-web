import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {
  SemiDatatableAction,
  SemiDatatableComponent
} from "../../../core/components/semi-datatable/semi-datatable.component";
import {DatePipe} from "@angular/common";
import {GenderEnum} from "../../../core/enums/gender.enum";
import {VcnPrcService} from "../../../core/services/vcn-prc.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {VcnProfileRes} from "../../../core/payload/profile.payload";
import {VcnProfileStatusEnum} from "../../../core/enums/vcn-profile-status.enum";
import {ProfileDetailComponent} from "../../../core/components/profile-detail/profile-detail.component";
import {ProfileService} from "../../../core/services/profile.service";

@Component({
  selector: 'app-vcn-prc-check-in',
  templateUrl: './vcn-prc-check-in.component.html',
  styleUrls: ['./vcn-prc-check-in.component.scss']
})
export class VcnPrcCheckInComponent implements OnInit {
  @ViewChild('dataTable') dataTable!: SemiDatatableComponent;

  apiUrl = `${environment.apiEndpoint}/profile/vcn?status=${VcnProfileStatusEnum.CREATED}`;
  tableMasks = {
    'patientProfile.birthday': (val: Date) => {
      return this.datePipe.transform(val, 'dd/MM/yyyy')
    },
    'patientProfile.gender': (val: GenderEnum) => {
      switch (val) {
        case GenderEnum.MALE:
          return 'Nam'
        case GenderEnum.FEMALE:
          return 'Nữ'
        case GenderEnum.OTHER:
          return 'Khác'
      }
    },
  };
  tableActions: SemiDatatableAction[] = [
    {
      icon: 'check-circle',
      classes: ['text-green-500', 'text-2xl'],
      handler: (rowValue: VcnProfileRes) => {
        this.modal.success({
          nzTitle: `Tiếp đón bệnh nhân <b>${rowValue.patientProfile.fullName}</b>?`,
          nzContent: 'Tác vụ không thể hoàn tác',
          nzOkText: 'Đồng ý',
          nzCancelText: 'Hủy',
          nzOnOk: () => this.vcnPrcService.checkIn(rowValue.id)
            .subscribe({
              next: res => {
                this.msg.success(res.message)
                this.dataTable.reload()
              },
              error: () => this.msg.error('Tiếp đón thất bại'),
            })
        });
      },
    },
    {
      icon: 'close-circle',
      classes: ['text-red-500', 'text-2xl'],
      handler: (rowValue: VcnProfileRes) => {
        this.modal.error({
          nzTitle: `Từ chối tiếp đón bệnh nhân <b>${rowValue.patientProfile.fullName}</b>?`,
          nzContent: 'Tác vụ không thể hoàn tác',
          nzOkText: 'Đồng ý',
          nzOkDanger: true,
          nzCancelText: 'Hủy',
          nzOnOk: () => this.vcnPrcService.cancel(rowValue.id)
            .subscribe({
              next: res => {
                this.msg.success(res.message)
                this.dataTable.reload()
              },
              error: () => this.msg.error('Thao tác thất bại'),
            })
        });
      },
    },
  ];

  constructor(private datePipe: DatePipe,
              private vcnPrcService: VcnPrcService,
              private msg: NzMessageService,
              private modal: NzModalService,
              public profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

}
