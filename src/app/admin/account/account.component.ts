import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {StatusEnum} from "../../core/enums/status.enum";
import {RoleEnum} from "../../auth/role.enum";
import {SemiDatatableAction} from "../../core/components/semi-datatable/semi-datatable.component";

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
          return `<div class="text-green-500">Hoạt động</div>`
        case StatusEnum.IN_ACTIVE:
        default:
          return `<div class="text-red-500">Không hoạt động</div>`
      }
    },
    'role': (val: RoleEnum) => {
      switch (val) {
        case RoleEnum.ROLE_ADMIN: return 'Quản trị viên'
        case RoleEnum.ROLE_AGENT: return 'Nhân viên'
        case RoleEnum.ROLE_GUEST: return 'Khách'
      }
    },
  };
  tableActions: SemiDatatableAction[] = [
    {icon: 'edit', classes: ['text-blue-500'], handler: rowValue => console.log(rowValue)},
    {icon: 'delete', classes: ['text-red-500']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
