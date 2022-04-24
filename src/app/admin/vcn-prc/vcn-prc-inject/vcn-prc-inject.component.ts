import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {VcnProfileStatusEnum} from "../../../core/enums/vcn-profile-status.enum";
import {GenderEnum} from "../../../core/enums/gender.enum";
import {
  SemiDatatableAction,
  SemiDatatableComponent
} from "../../../core/components/semi-datatable/semi-datatable.component";
import {VcnProfileRes} from "../../../core/payload/profile.payload";
import {DatePipe} from "@angular/common";
import {VcnPrcService} from "../../../core/services/vcn-prc.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-vcn-prc-inject',
  templateUrl: './vcn-prc-inject.component.html',
  styleUrls: ['./vcn-prc-inject.component.scss']
})
export class VcnPrcInjectComponent implements OnInit {
  @ViewChild('dataTable') dataTable!: SemiDatatableComponent;

  apiUrl = `${environment.apiEndpoint}/profile/vcn?status=${VcnProfileStatusEnum.PAID}`;
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
      icon: 'select',
      classes: ['text-blue-500'],
      handler: (rowValue: VcnProfileRes) => {
        this.modal.success({
          nzTitle: `Xác nhận đã tiêm cho bệnh nhân <b>${rowValue.patientProfile.fullName}</b>?`,
          nzContent: 'Tác vụ không thể hoàn tác',
          nzOkText: 'Đồng ý',
          nzCancelText: 'Hủy',
          nzOnOk: () => this.vcnPrcService.inject(rowValue.id)
            .subscribe({
              next: res => {
                this.msg.success(res.message)
                this.dataTable.reload()
              },
              error: () => this.msg.error('Thủ tục thất bại'),
            })
        });
      },
    },
  ];
  constructor(private datePipe: DatePipe,
              private vcnPrcService: VcnPrcService,
              private msg: NzMessageService,
              private modal: NzModalService) { }

  ngOnInit(): void {
  }

}
