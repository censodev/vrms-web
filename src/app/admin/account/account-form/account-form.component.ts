import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {concatMap, map} from "rxjs/operators";
import {filter} from "rxjs";
import {AccountService} from "../../../core/services/account.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleEnum} from "../../../auth/role.enum";
import {StatusEnum} from "../../../core/enums/status.enum";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  masterForm!: FormGroup;
  roleEnum = RoleEnum;
  statusEnum = StatusEnum;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      id: [],
      username: [],
      email: [],
      phone: [],
      role: [],
      status: [],
    })
    this.route.data
      .pipe(
        map(data => data['method']),
        filter(method => method === 'edit'),
        concatMap(() => this.route.params),
        map(params => params['id']),
        concatMap(id => this.accountService.getOne(id)),
        map(res => res.data)
      )
      .subscribe(data => {
        this.masterForm.setValue(data)
        console.log(this.masterForm.value)
      })
  }

  submit() {

  }
}
