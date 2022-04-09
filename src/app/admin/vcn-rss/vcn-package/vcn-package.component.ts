import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {StatusEnum} from "../../../core/enums/status.enum";
import {SemiDatatableAction} from "../../../core/components/semi-datatable/semi-datatable.component";
import {Router} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-vcn-package',
  templateUrl: './vcn-package.component.html',
  styleUrls: ['./vcn-package.component.scss']
})
export class VcnPackageComponent implements OnInit {
  apiUrl = environment.apiEndpoint + '/vcn/resource/package';
  tableMasks = {
    'status': (val: StatusEnum) => {
      switch (val) {
        case StatusEnum.ACTIVE:
          return `<span class="text-green-500">Khả dụng</span>`
        case StatusEnum.IN_ACTIVE:
        default:
          return `<span class="text-red-500">Không khả dụng</span>`
      }
    },
    'price': (val: number) => {
      return this.currencyPipe.transform(val, 'VND')
    }
  };
  tableActions: SemiDatatableAction[] = [
    {
      icon: 'edit',
      classes: ['text-blue-500'],
      handler: rowValue => this.router.navigate(['/admin/vcn/rss/package', rowValue.id]),
    },
  ];

  constructor(private router: Router,
              private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {
  }

}
