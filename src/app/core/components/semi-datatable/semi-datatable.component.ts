import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PageRes} from "../../payload/page.res";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Res} from "../../payload/res";
import {concatMap, map} from "rxjs/operators";
import {BehaviorSubject, combineLatest, debounceTime, startWith} from "rxjs";
import {FormControl} from "@angular/forms";

export interface SemiDatatableAction {
  title?: string;
  icon?: string;
  classes?: string[];
  handler?: (rowValue: any) => any;
}

@Component({
  selector: 'app-semi-datatable',
  templateUrl: './semi-datatable.component.html',
  styleUrls: ['./semi-datatable.component.scss']
})
export class SemiDatatableComponent implements OnInit, OnChanges {
  @Input() api!: string;
  @Input() titles!: string[];
  @Input() columns!: string[];
  @Input() masks?: Record<string, (colValue: any) => string>;
  @Input() actions?: SemiDatatableAction[];

  data: PageRes<any> = {content: []};
  page$ = new BehaviorSubject(0);
  searchFrmCtl = new FormControl();
  loading = true;

  constructor(private http: HttpClient) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['api'].currentValue !== null && changes['api'].currentValue !== '') {
      combineLatest([
        this.page$,
        this.searchFrmCtl.valueChanges.pipe(startWith(''), debounceTime(1000)),
      ])
        .pipe(
          concatMap(params => {
            const httpParams = new HttpParams()
              .append('page', params[0])
              .append('keyword', params[1]);
            return this.http.get<Res<PageRes<any>>>(changes['api'].currentValue, {params: httpParams})
          }),
          map(res => res.data))
        .subscribe(data => {
          this.data = data;
          this.loading = false;
        });
    }
  }

  ngOnInit(): void {
  }

  handleActionClick(act: SemiDatatableAction, rowValue: any) {
    if (act.handler) {
      act.handler(rowValue)
    }
  }
}
