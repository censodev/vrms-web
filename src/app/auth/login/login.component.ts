import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  getOTPLoading = false;
  loading = false;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private msg: NzMessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      phone: [null, [Validators.required]],
      otp: [null, [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loading = true;
      this.auth.loginForGuest(this.validateForm.value)
        .subscribe({
          next: res => {
            this.msg.success(res.message);
            this.router.navigate(['/']);
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

  getOTP() {
    this.getOTPLoading = true;
    this.auth.getOTP(this.validateForm.value.phone)
      .subscribe(() => {
        this.getOTPLoading = false;
        this.msg.success('Mã OTP đã được gửi tới điện thoại của bạn.');
      })
  }

}
