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

@Component({
  selector: 'app-vcn-prc-check-in',
  templateUrl: './vcn-prc-check-in.component.html',
  styleUrls: ['./vcn-prc-check-in.component.scss']
})
export class VcnPrcCheckInComponent implements OnInit {
  @ViewChild('dataTable') dataTable!: SemiDatatableComponent;

  apiUrl = environment.apiEndpoint + '/profile/vcn?status=CREATED';
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
        this.modal.confirm({
          nzTitle: `Tiếp đón <b>${rowValue.patientProfile.fullName}</b>`,
          nzContent: 'Tác vụ không thể hoàn tác',
          nzOkText: 'Đồng ý',
          nzCancelText: 'Hủy',
          nzOnOk: () => this.vcnPrcService.checkIn(rowValue.id)
            .subscribe({
              next: () => {
                this.msg.success('Tiếp đón thành công')
                this.dataTable.reload()
              },
              error: () => this.msg.error('Tiếp đón thất bại'),
            })
        });
      },
    },
  ];

  constructor(private datePipe: DatePipe,
              private vcnPrcService: VcnPrcService,
              private msg: NzMessageService,
              private modal: NzModalService) {
  }

  ngOnInit(): void {
  }

}
