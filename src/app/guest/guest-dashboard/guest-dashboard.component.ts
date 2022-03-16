import { Component, OnInit } from '@angular/core';
import {VcnProfileStatusEnum} from "../../core/enums/vcn-profile-status.enum";

@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.scss']
})
export class GuestDashboardComponent implements OnInit {
  vcnProfileStatusEnum = VcnProfileStatusEnum
  vcnProfiles = [
    {
      id: 0,
      expectedInjectionTime: new Date(),
      status: VcnProfileStatusEnum.CREATED,
      patientProfileId: 0,
      selectedPackageId: 0,
      selectedSiteId: 0
    },
    {
      id: 0,
      expectedInjectionTime: new Date(),
      status: VcnProfileStatusEnum.CREATED,
      patientProfileId: 0,
      selectedPackageId: 0,
      selectedSiteId: 0
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
