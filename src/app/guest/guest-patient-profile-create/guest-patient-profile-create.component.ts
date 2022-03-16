import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-guest-patient-profile-create',
  templateUrl: './guest-patient-profile-create.component.html',
  styleUrls: ['./guest-patient-profile-create.component.scss']
})
export class GuestPatientProfileCreateComponent implements OnInit {
  createForm!: FormGroup;

  constructor(public location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      idCard: [null],
      fullName: [null],
      birthday: [null],
      gender: [null],
      countryId: [null],
      nationId: [null],
      provinceId: [null],
      districtId: [null],
      wardId: [null],
      address: [null],
    });
  }

  submit() {
    console.log(this.createForm.value)
  }
}
