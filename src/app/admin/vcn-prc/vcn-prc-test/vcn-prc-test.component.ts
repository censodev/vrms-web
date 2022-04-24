import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {GenderEnum} from "../../../core/enums/gender.enum";
import {SemiDatatableAction} from "../../../core/components/semi-datatable/semi-datatable.component";
import {VcnProfileRes} from "../../../core/payload/profile.payload";
import {DatePipe} from "@angular/common";
import {VcnProfileStatusEnum} from "../../../core/enums/vcn-profile-status.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vcn-prc-test',
  templateUrl: './vcn-prc-test.component.html',
  styleUrls: ['./vcn-prc-test.component.scss']
})
export class VcnPrcTestComponent implements OnInit {
  apiUrl = `${environment.apiEndpoint}/profile/vcn?status=${VcnProfileStatusEnum.CHECKED_IN}`;
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
      handler: (rowValue: VcnProfileRes) => this.router.navigate(['/admin/vcn/prc/test', rowValue.id]),
    },
  ];

  constructor(private datePipe: DatePipe,
              private router: Router) { }

  ngOnInit(): void {
  }

}
