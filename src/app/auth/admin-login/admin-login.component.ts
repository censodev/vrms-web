import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  validateForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private msg: NzMessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loading = true;
      this.authService.loginForAdmin(this.validateForm.value)
        .subscribe({
          next: res => {
            this.msg.success(res.message);
            this.router.navigate(['/admin']);
          },
          error: err => {
            this.msg.error(err.error.message);
            this.loading = false;
          },
        });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

}
