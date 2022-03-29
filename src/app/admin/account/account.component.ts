import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {StatusEnum} from "../../core/enums/status.enum";
import {RoleEnum} from "../../auth/role.enum";
import {SemiDatatableAction} from "../../core/components/semi-datatable/semi-datatable.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountApiUrl = environment.apiEndpoint + '/account';
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
    'role': (val: RoleEnum) => {
      switch (val) {
        case RoleEnum.ROLE_ADMIN: return '<span class="text-red-500">Quản trị viên</span>'
        case RoleEnum.ROLE_AGENT: return '<span class="text-blue-500">Nhân viên</span>'
        case RoleEnum.ROLE_GUEST: return '<span>Khách</span>'
      }
    },
  };
  tableActions: SemiDatatableAction[] = [
    {
      icon: 'edit',
      classes: ['text-blue-500'],
      handler: rowValue => this.router.navigate(['/admin/account', rowValue.id]),
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
