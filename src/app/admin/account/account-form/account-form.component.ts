import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {concatMap, map, tap} from "rxjs/operators";
import {filter} from "rxjs";
import {AccountService} from "../../../core/services/account.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RoleEnum} from "../../../auth/role.enum";
import {StatusEnum} from "../../../core/enums/status.enum";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  masterForm!: FormGroup;
  roleEnum = RoleEnum;
  statusEnum = StatusEnum;
  method!: 'create' | 'edit';

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private fb: FormBuilder,
              private msg: NzMessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      id: [],
      username: [],
      email: [],
      phone: [],
      role: [null, [Validators.required]],
      status: [],
    })
    this.route.data
      .pipe(
        map(data => data['method']),
        tap(method => this.method = method),
        filter(method => method === 'edit'),
        concatMap(() => this.route.params),
        map(params => params['id']),
        concatMap(id => this.accountService.getOne(id)),
        map(res => res.data)
      )
      .subscribe(data => {
        this.masterForm.get('username')?.disable()
        this.masterForm.get('phone')?.disable()
        this.masterForm.setValue(data)
        console.log(this.masterForm.value)
      })
  }

  submit() {
    const obs$ = this.method === 'create'
      ? this.accountService.create(this.masterForm.value)
      : this.accountService.update(this.masterForm.value)
    obs$.subscribe({
      next: res => {
        this.router.navigate(['/admin/account'])
          .then(() => this.msg.success(res.message))
      },
      error: err => this.msg.error(err.error.message),
    })
  }
}
