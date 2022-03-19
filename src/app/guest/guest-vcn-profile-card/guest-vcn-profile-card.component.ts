import {Component, Input, OnInit} from '@angular/core';
import {VcnProfileRes} from "../../core/payload/profile.payload";
import {VcnProfileStatusEnum} from "../../core/enums/vcn-profile-status.enum";

@Component({
  selector: 'app-guest-vcn-profile-card',
  templateUrl: './guest-vcn-profile-card.component.html',
  styleUrls: ['./guest-vcn-profile-card.component.scss']
})
export class GuestVcnProfileCardComponent implements OnInit {
  @Input() profile!: VcnProfileRes;
  vcnProfileStatusEnum = VcnProfileStatusEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
