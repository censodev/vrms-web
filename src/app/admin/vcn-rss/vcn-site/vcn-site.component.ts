import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {StatusEnum} from "../../../core/enums/status.enum";
import {SemiDatatableAction} from "../../../core/components/semi-datatable/semi-datatable.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vcn-site',
  templateUrl: './vcn-site.component.html',
  styleUrls: ['./vcn-site.component.scss']
})
export class VcnSiteComponent implements OnInit {
  siteApiUrl = environment.apiEndpoint + '/vcn/resource/site';
  tableMasks = {
    'status': (val: StatusEnum) => {
      switch (val) {
        case StatusEnum.ACTIVE:
          return `<span class="text-green-500">Hoạt động</span>`
        case StatusEnum.IN_ACTIVE:
        default:
          return `<span class="text-red-500">Không hoạt động</span>`
      }
    },
    'province': (val: any) => val.name,
    'district': (val: any) => val.name,
    'ward': (val: any) => val.name,
  };
  tableActions: SemiDatatableAction[] = [
    {
      icon: 'edit',
      classes: ['text-blue-500'],
      handler: rowValue => this.router.navigate(['/admin/vcn/rss/site', rowValue.id]),
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
