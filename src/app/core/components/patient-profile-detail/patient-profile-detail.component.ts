import {Component, Input, OnInit} from '@angular/core';
import {PatientProfileRes} from "../../payload/profile.payload";
import {GenderEnum} from "../../enums/gender.enum";

@Component({
  selector: 'app-patient-profile-detail',
  templateUrl: './patient-profile-detail.component.html',
  styleUrls: ['./patient-profile-detail.component.scss']
})
export class PatientProfileDetailComponent implements OnInit {
  @Input() profile!: PatientProfileRes;
  genderEnum = GenderEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
