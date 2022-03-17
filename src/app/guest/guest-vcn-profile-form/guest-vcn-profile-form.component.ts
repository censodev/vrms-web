import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {concatMap, filter, Observable, of, tap} from "rxjs";
import {MstDistrict, MstProvince, MstWard} from "../../core/payload/mst.payload";
import {MstResourceService} from "../../core/services/mst-resource.service";

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

  provinceFrmCtl!: FormControl;
  districtFrmCtl!: FormControl;
  wardFrmCtl!: FormControl;

  constructor(public location: Location,
              private fb: FormBuilder,
              private mstRssService: MstResourceService) { }

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
  }

  submit() {
    console.log(this.masterForm.value)
  }
}
