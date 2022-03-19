import {Component, OnInit} from '@angular/core';
import {VcnProfileStatusEnum} from "../../core/enums/vcn-profile-status.enum";
import {Observable} from "rxjs";
import {VcnProfileRes} from "../../core/payload/profile.payload";
import {ProfileService} from "../../core/services/profile.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.scss']
})
export class GuestDashboardComponent implements OnInit {
  vcnProfiles!: VcnProfileRes[];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.profileService.getMyVcnProfiles()
      .pipe(map(res => res.data.content))
      .subscribe(data => this.vcnProfiles = data)
  }

}
