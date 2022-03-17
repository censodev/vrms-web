import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {MstResourceService} from "../../core/services/mst-resource.service";
import {concatMap, filter, Observable, of, tap} from "rxjs";
import {MstCountry, MstDistrict, MstNation, MstProvince, MstWard} from "../../core/payload/mst.payload";
import {GenderEnum} from "../../core/enums/gender.enum";
import {ProfileService} from "../../core/services/profile.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-guest-patient-profile-form',
  templateUrl: './guest-patient-profile-form.component.html',
  styleUrls: ['./guest-patient-profile-form.component.scss']
})
export class GuestPatientProfileFormComponent implements OnInit {
  genderEnum = GenderEnum;

  masterForm!: FormGroup;

  countries$!: Observable<MstCountry[]>;
  nations$!: Observable<MstNation[]>;
  provinces$!: Observable<MstProvince[]>;
  districts$?: Observable<MstDistrict[]>;
  wards$?: Observable<MstWard[]>;

  constructor(public location: Location,
              private fb: FormBuilder,
              private mstRssService: MstResourceService,
              private profileService: ProfileService,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      idCard: [null],
      fullName: [null],
      birthday: [null],
      gender: [null],
      countryId: [null],
      nationId: [null],
      provinceId: [null],
      districtId: [null],
      wardId: [null],
      address: [null],
    });
    this.countries$ = this.mstRssService.getCountries();
    this.nations$ = this.mstRssService.getNations();
    this.provinces$ = this.mstRssService.getProvinces();
    this.districts$ = this.masterForm.get("provinceId")?.valueChanges
      .pipe(
        filter(provinceId => provinceId !== null),
        tap(() => this.masterForm.get("districtId")?.setValue(null)),
        tap(() => this.masterForm.get("wardId")?.setValue(null)),
        concatMap(provinceId => this.mstRssService.getDistricts(provinceId)),
      );
    this.wards$ = this.masterForm.get("districtId")?.valueChanges
      .pipe(
        tap(() => this.masterForm.get("wardId")?.setValue(null)),
        concatMap(districtId => districtId === null ? of([]) : this.mstRssService.getWards(districtId)),
      );
  }

  submit() {
    console.log(this.masterForm.value)
    this.profileService.createPatientProfile(this.masterForm.value)
      .subscribe({
        next: res => this.message.success(res.message),
        error: err => this.message.error(err.error.message),
      });
  }
}
