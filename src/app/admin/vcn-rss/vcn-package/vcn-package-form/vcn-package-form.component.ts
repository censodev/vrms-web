import {Component, OnInit} from '@angular/core';
import {concatMap, map, tap} from "rxjs/operators";
import {filter, Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VcnRssService} from "../../../../core/services/vcn-rss.service";
import {StatusEnum} from "../../../../core/enums/status.enum";
import {NzMessageService} from "ng-zorro-antd/message";
import {VcnScreeningTmplRes} from "../../../../core/payload/vcn-rss.payload";

@Component({
  selector: 'app-vcn-package-form',
  templateUrl: './vcn-package-form.component.html',
  styleUrls: ['./vcn-package-form.component.scss']
})
export class VcnPackageFormComponent implements OnInit {
  masterForm!: FormGroup;
  method!: 'edit' | 'create';
  statusEnum = StatusEnum;

  screeningTmpl$!: Observable<VcnScreeningTmplRes[]>;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private vcnRssService: VcnRssService,
              private router: Router,
              private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      id: [],
      name: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      price: [null, [Validators.required]],
      status: [StatusEnum.ACTIVE, [Validators.required]],
      diseasesCode: [null, [Validators.required]],
      screeningTemplateId: [null, [Validators.required]],
    })
    this.route.data
      .pipe(
        map(data => data['method']),
        tap(method => this.method = method),
        filter(method => method === 'edit'),
        concatMap(() => this.route.params),
        map(params => params['id']),
        concatMap(id => this.vcnRssService.getPackage(id)),
        map(res => res.data)
      )
      .subscribe(data => {
        this.masterForm.setValue(data)
        console.log(this.masterForm.value)
      })
    this.screeningTmpl$ = this.vcnRssService.searchScreeningTmpl('')
      .pipe(map(res => res.data.content.filter(i => i.status == StatusEnum.ACTIVE)))
  }

  submit() {
    const obs$ = this.method === 'create'
      ? this.vcnRssService.createPackage(this.masterForm.value)
      : this.vcnRssService.updatePackage(this.masterForm.value)
    obs$.subscribe({
      next: res => {
        this.router.navigate(['/admin/vcn/rss/package'])
          .then(() => this.msg.success(res.message))
      },
      error: err => this.msg.error(err.error?.message || 'Thao tác thất bại, vui lòng kiểm tra lại biểu mẫu'),
    })
  }
}
