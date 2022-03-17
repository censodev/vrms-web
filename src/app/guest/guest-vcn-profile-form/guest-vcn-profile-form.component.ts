import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-guest-vcn-profile-form',
  templateUrl: './guest-vcn-profile-form.component.html',
  styleUrls: ['./guest-vcn-profile-form.component.scss']
})
export class GuestVcnProfileFormComponent implements OnInit {
  masterForm!: FormGroup
  constructor(public location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      vcnPatientProfileId: [null, [Validators.required]],
      expectedInjectionTime: [null, [Validators.required]],
      selectedSiteId: [null, [Validators.required]],
    });
  }

  submit() {
    console.log(this.masterForm.value)
  }
}
