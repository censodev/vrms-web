import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {concatMap, map, tap} from "rxjs/operators";
import {BehaviorSubject, filter} from "rxjs";
import {StatusEnum} from "../../../../core/enums/status.enum";
import {ActivatedRoute, Router} from "@angular/router";
import {VcnRssService} from "../../../../core/services/vcn-rss.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {VcnScreeningTmplDataTypeEnum} from "../../../../core/enums/vcn-screening-tmpl-data-type.enum";
import {VcnScreeningTmplDataRecord} from "../../../../core/payload/vcn-rss.payload";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-vcn-screening-tmpl-form',
  templateUrl: './vcn-screening-tmpl-form.component.html',
  styleUrls: ['./vcn-screening-tmpl-form.component.scss']
})
export class VcnScreeningTmplFormComponent implements OnInit {
  masterForm!: FormGroup;
  method!: 'edit' | 'create';
  statusEnum = StatusEnum;
  vcnScreeningTmplTypeEnum = VcnScreeningTmplDataTypeEnum;
  backupTmplData!: VcnScreeningTmplDataRecord[];
  tmplData$ = new BehaviorSubject<VcnScreeningTmplDataRecord[]>([]);

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private vcnRssService: VcnRssService,
              private router: Router,
              private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      id: [],
      title: [null, [Validators.required]],
      status: [null, [Validators.required]],
      data: [null, [Validators.required]],
    })
    this.route.data
      .pipe(
        map(data => data['method']),
        tap(method => this.method = method),
        filter(method => method === 'edit'),
        concatMap(() => this.route.params),
        map(params => params['id']),
        concatMap(id => this.vcnRssService.getScreeningTmpl(id)),
        map(res => res.data)
      )
      .subscribe(data => {
        this.masterForm.setValue(data)
        this.backupTmplData = data.data
        this.tmplData$.next(data.data)
      })
    this.tmplData$.subscribe(data => {
      this.masterForm.get('data')?.setValue(data)
    })
  }

  submit() {
    const obs$ = this.method === 'create'
      ? this.vcnRssService.createScreeningTmpl(this.masterForm.value)
      : this.vcnRssService.updateScreeningTmpl(this.masterForm.value)
    obs$.subscribe({
      next: res => {
        this.router.navigate(['/admin/vcn/rss/screening-tmpl'])
          .then(() => this.msg.success(res.message))
      },
      error: err => this.msg.error(err.error.message),
    })
  }

  addDataRecord() {
    this.tmplData$.next([
      ...this.tmplData$.getValue(),
      {
        type: VcnScreeningTmplDataTypeEnum.YES_NO,
        title: ''
      },
    ])
  }

  removeRecord(title: string) {
    this.tmplData$.next(this.tmplData$.getValue().filter(rc => rc.title !== title))
  }

  restoreDataRecord() {
    this.tmplData$.next(this.backupTmplData)
  }

  dropTmplDataRecord($event: CdkDragDrop<string[]>) {
    let list = [...this.tmplData$.getValue()]
    moveItemInArray(list, $event.previousIndex, $event.currentIndex);
    this.tmplData$.next(list)
  }
}
