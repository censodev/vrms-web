import {Component, Input, OnInit} from '@angular/core';
import {VcnProfileHistoryRes, VcnProfilePaymentRes, VcnProfileRes} from "../../payload/profile.payload";
import {VcnProfileStatusEnum} from "../../enums/vcn-profile-status.enum";

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
  @Input() profile!: VcnProfileRes;
  @Input() profileHistories!: VcnProfileHistoryRes[];
  @Input() profilePayments: VcnProfilePaymentRes[] = [];
  @Input() isAdminOrAgent = false;

  vcnProfileStatusEnum = VcnProfileStatusEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
