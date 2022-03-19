import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {concatMap, filter, Observable, of, tap} from "rxjs";
import {MstDistrict, MstProvince, MstWard} from "../../core/payload/mst.payload";
import {MstResourceService} from "../../core/services/mst-resource.service";
import {PatientProfileRes} from "../../core/payload/profile.payload";
import {ProfileService} from "../../core/services/profile.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-guest-vcn-profile-form',
  templateUrl: './guest-vcn-profile-form.component.html',
  styleUrls: ['./guest-vcn-profile-form.component.scss']
})
export class GuestVcnProfileFormComponent implements OnInit {
  masterForm!: FormGroup

  provinces$!: Observable<MstProvince[]>;
  districts$?: Observable<MstDistrict[]>;
  wards$?: Observable<MstWard[]>;
  patientProfiles$!: Observable<PatientProfileRes[]>;
  selectedProfile?: PatientProfileRes;

  provinceFrmCtl!: FormControl;
  districtFrmCtl!: FormControl;
  wardFrmCtl!: FormControl;

  constructor(public location: Location,
              private fb: FormBuilder,
              private mstRssService: MstResourceService,
              private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.provinceFrmCtl = new FormControl(null)
    this.districtFrmCtl = new FormControl(null)
    this.wardFrmCtl = new FormControl(null)

    this.masterForm = this.fb.group({
      vcnPatientProfileId: [null, [Validators.required]],
      expectedInjectionTime: [null, [Validators.required]],
      selectedSiteId: [null, [Validators.required]],
    });
    this.provinces$ = this.mstRssService.getProvinces();
    this.districts$ = this.provinceFrmCtl.valueChanges
      .pipe(
        filter(provinceId => provinceId !== null),
        tap(() => this.districtFrmCtl.setValue(null)),
        tap(() => this.wardFrmCtl.setValue(null)),
        concatMap(provinceId => this.mstRssService.getDistricts(provinceId)),
      );
    this.wards$ = this.districtFrmCtl.valueChanges
      .pipe(
        tap(() => this.wardFrmCtl.setValue(null)),
        concatMap(districtId => districtId === null ? of([]) : this.mstRssService.getWards(districtId)),
      );
    this.patientProfiles$ = this.profileService.getMyPatientProfiles()
      .pipe(map(res => res.data.content));
    this.masterForm.get('vcnPatientProfileId')?.valueChanges
      .pipe(filter(id => id !== null))
      .subscribe(id => {
        this.patientProfiles$.subscribe(profiles => {
          this.selectedProfile = profiles.find(prf => prf.id === id)
        })
      })
  }

  submit() {
    console.log(this.masterForm.value)
  }
}
