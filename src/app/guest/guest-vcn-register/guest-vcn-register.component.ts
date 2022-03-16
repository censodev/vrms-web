import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-guest-vcn-register',
  templateUrl: './guest-vcn-register.component.html',
  styleUrls: ['./guest-vcn-register.component.scss']
})
export class GuestVcnRegisterComponent implements OnInit {
  registerForm!: FormGroup
  constructor(public location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      vcnPatientProfileId: [null, [Validators.required]],
      expectedInjectionTime: [null, [Validators.required]],
      selectedSiteId: [null, [Validators.required]],
    });
  }

  submit() {
    console.log(this.registerForm.value)
  }
}
