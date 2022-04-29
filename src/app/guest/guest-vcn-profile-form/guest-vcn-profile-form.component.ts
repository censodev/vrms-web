import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {concatMap, debounceTime, filter, Observable, startWith} from "rxjs";
import {MstResourceService} from "../../core/services/mst-resource.service";
import {PatientProfileRes} from "../../core/payload/profile.payload";
import {ProfileService} from "../../core/services/profile.service";
import {map} from "rxjs/operators";
import {VcnRssService} from "../../core/services/vcn-rss.service";
import {VcnPackageRes, VcnSiteRes} from "../../core/payload/vcn-rss.payload";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";
import {StatusEnum} from "../../core/enums/status.enum";

@Component({
  selector: 'app-guest-vcn-profile-form',
  templateUrl: './guest-vcn-profile-form.component.html',
  styleUrls: ['./guest-vcn-profile-form.component.scss']
})
export class GuestVcnProfileFormComponent implements OnInit {
  masterForm!: FormGroup

  patientProfiles$!: Observable<PatientProfileRes[]>;
  vcnPackages$?: Observable<VcnPackageRes[]>;
  vcnSites$!: Observable<VcnSiteRes[]>

  selectedProfile?: PatientProfileRes;
  selectedPkg?: VcnPackageRes;

  vcnPkgFrmCtl = new FormControl('');

  constructor(public location: Location,
              private fb: FormBuilder,
              private mstRssService: MstResourceService,
              private profileService: ProfileService,
              private vcnRssService: VcnRssService,
              private msg: NzMessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      patientProfileId: [null, [Validators.required]],
      expectedInjectionTime: [null, [Validators.required]],
      selectedSiteId: [null, [Validators.required]],
      selectedPackageId: [null, [Validators.required]],
    });

    this.patientProfiles$ = this.profileService.getMyPatientProfiles()
      .pipe(map(res => res.data.content));
    this.masterForm.get('patientProfileId')?.valueChanges
      .pipe(filter(id => id !== null))
      .subscribe(id => {
        this.patientProfiles$.subscribe(profiles => {
          this.selectedProfile = profiles.find(prf => prf.id === id)
        })
      })
    this.vcnPackages$ = this.vcnPkgFrmCtl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(1000),
        concatMap(kw => this.vcnRssService.searchPackages(kw)),
        map(res => res.data.content.filter(i => i.status == StatusEnum.ACTIVE))
      );
    this.vcnSites$ = this.vcnRssService.searchSites('')
      .pipe(map(res => res.data.content.filter(i => i.status == StatusEnum.ACTIVE)));
  }

  submit() {
    console.log(this.masterForm.value)
    this.profileService.createVcnProfile(this.masterForm.value)
      .subscribe({
        next: res => this.router.navigate(['/guest']).then(() => this.msg.success(res.message)),
        error: err => this.msg.error(err.error.message)
      })
  }

  selectPkg(pkg: VcnPackageRes) {
    this.masterForm.controls['selectedPackageId'].setValue(pkg.id);
    this.selectedPkg = pkg;
  }
}
