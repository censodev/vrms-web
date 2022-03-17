import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-guest-patient-profile-form',
  templateUrl: './guest-patient-profile-form.component.html',
  styleUrls: ['./guest-patient-profile-form.component.scss']
})
export class GuestPatientProfileFormComponent implements OnInit {
  masterForm!: FormGroup;

  constructor(public location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.masterForm = this.fb.group({
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
    console.log(this.masterForm.value)
  }
}
