import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PatientProfileRes} from "../../core/payload/profile.payload";
import {GenderEnum} from "../../core/enums/gender.enum";
import {MstResourceService} from "../../core/services/mst-resource.service";
import {Observable} from "rxjs";
import {MstCountry, MstDistrict, MstNation, MstProvince, MstWard} from "../../core/payload/mst.payload";

@Component({
  selector: 'app-guest-patient-profile-detail',
  templateUrl: './guest-patient-profile-detail.component.html',
  styleUrls: ['./guest-patient-profile-detail.component.scss']
})
export class GuestPatientProfileDetailComponent implements OnInit, OnChanges {
  @Input() profile!: PatientProfileRes;
  genderEnum = GenderEnum;

  country$!: Observable<MstCountry>
  nation$!: Observable<MstNation>
  province$!: Observable<MstProvince>
  district$!: Observable<MstDistrict>
  ward$!: Observable<MstWard>

  constructor(private mstService: MstResourceService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['profile'].currentValue !== null) {
      this.country$ = this.mstService.getCountry(this.profile.countryId)
      this.nation$ = this.mstService.getNation(this.profile.nationId)
      this.province$ = this.mstService.getProvince(this.profile.provinceId)
      this.district$ = this.mstService.getDistrict(this.profile.districtId)
      this.ward$ = this.mstService.getWard(this.profile.wardId)
    }
  }

  ngOnInit(): void {
  }

}
