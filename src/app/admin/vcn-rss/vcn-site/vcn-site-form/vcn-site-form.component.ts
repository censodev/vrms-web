import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {concatMap, map, tap} from "rxjs/operators";
import {filter, Observable, of} from "rxjs";
import {RoleEnum} from "../../../../auth/role.enum";
import {StatusEnum} from "../../../../core/enums/status.enum";
import {ActivatedRoute, Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {VcnRssService} from "../../../../core/services/vcn-rss.service";
import {MstResourceService} from "../../../../core/services/mst-resource.service";
import {MstDistrict, MstProvince, MstWard} from "../../../../core/payload/mst.payload";

@Component({
  selector: 'app-vcn-site-form',
  templateUrl: './vcn-site-form.component.html',
  styleUrls: ['./vcn-site-form.component.scss']
})
export class VcnSiteFormComponent implements OnInit {
  masterForm!: FormGroup;
  roleEnum = RoleEnum;
  statusEnum = StatusEnum;
  method!: 'create' | 'edit';

  provinces$!: Observable<MstProvince[]>;
  districts$?: Observable<MstDistrict[]>;
  wards$?: Observable<MstWard[]>;

  constructor(private route: ActivatedRoute,
              private vcnRssService: VcnRssService,
              private fb: FormBuilder,
              private msg: NzMessageService,
              private router: Router,
              private mstRssService: MstResourceService) { }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      id: [],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      provinceId: [null, [Validators.required]],
      districtId: [null, [Validators.required]],
      wardId: [null, [Validators.required]],
      status: [StatusEnum.ACTIVE, [Validators.required]],
    })
    this.route.data
      .pipe(
        map(data => data['method']),
        tap(method => this.method = method),
        filter(method => method === 'edit'),
        concatMap(() => this.route.params),
        map(params => params['id']),
        concatMap(id => this.vcnRssService.getSite(id)),
        map(res => res.data)
      )
      .subscribe(data => {
        let {province, district, ward, ...newData} = data;
        this.masterForm.setValue(newData)
        console.log(this.masterForm.value)
      })
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
    const obs$ = this.method === 'create'
      ? this.vcnRssService.createSite(this.masterForm.value)
      : this.vcnRssService.updateSite(this.masterForm.value)
    obs$.subscribe({
      next: res => {
        this.router.navigate(['/admin/vcn/rss/site'])
          .then(() => this.msg.success(res.message))
      },
      error: err => this.msg.error(err.error?.message || 'Thao tác thất bại, vui lòng kiểm tra lại biểu mẫu'),
    })
  }
}
