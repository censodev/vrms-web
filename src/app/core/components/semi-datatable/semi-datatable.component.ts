import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PageRes} from "../../payload/page.res";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Res} from "../../payload/res";
import {concatMap, map, tap} from "rxjs/operators";
import {BehaviorSubject, combineLatest, debounceTime, startWith, Subject} from "rxjs";
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
  @Input() masks?: Record<string, (colValue: any) => any>;
  @Input() actions?: SemiDatatableAction[];
  @Input() page = 0;
  @Input() size = 10;
  @Input() emptyCell = '-';

  data: PageRes<any> = {
    content: [],
    totalElements: 0,
  };
  page$ = new BehaviorSubject(this.page);
  size$ = new BehaviorSubject(this.size);
  reload$ = new Subject();
  searchFrmCtl = new FormControl();
  loading = true;

  constructor(private http: HttpClient) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['api'].currentValue !== null && changes['api'].currentValue !== '') {
      combineLatest([
        this.page$,
        this.size$,
        this.searchFrmCtl.valueChanges.pipe(
          startWith(''),
          debounceTime(500),
          tap(() => this.loading = true)),
        this.reload$.pipe(startWith(1)),
      ])
        .pipe(
          concatMap(params => {
            const httpParams = new HttpParams()
              .append('page', params[0])
              .append('size', params[1])
              .append('keyword', params[2])
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

  findPropChainValue(obj: any, propChain: string): any {
    if (propChain.includes('.')) {
      return propChain.split('.').reduce((acc, cur) => {
        return acc[cur]
      }, obj)
    }
    return obj[propChain]
  }

  reload(): void {
    this.reload$.next(1)
  }
}
