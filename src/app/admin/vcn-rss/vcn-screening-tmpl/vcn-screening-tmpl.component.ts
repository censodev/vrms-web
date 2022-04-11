import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {StatusEnum} from "../../../core/enums/status.enum";
import {SemiDatatableAction} from "../../../core/components/semi-datatable/semi-datatable.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vcn-screening-tmpl',
  templateUrl: './vcn-screening-tmpl.component.html',
  styleUrls: ['./vcn-screening-tmpl.component.scss']
})
export class VcnScreeningTmplComponent implements OnInit {
  apiUrl = environment.apiEndpoint + '/vcn/resource/screening-tmpl';
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
  };
  tableActions: SemiDatatableAction[] = [
    {
      icon: 'edit',
      classes: ['text-blue-500'],
      handler: rowValue => this.router.navigate(['/admin/vcn/rss/screening-tmpl', rowValue.id]),
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
