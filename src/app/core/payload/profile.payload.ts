import {GenderEnum} from "../enums/gender.enum";
import {StatusEnum} from "../enums/status.enum";
import {VcnPackageRes, VcnSiteRes} from "./vcn-rss.payload";
import {VcnProfileStatusEnum} from "../enums/vcn-profile-status.enum";

export interface PatientProfileRes {
  id: number;
  idCard: string;
  fullName: string;
  birthday: Date;
  gender: GenderEnum;
  countryId: number;
  nationId: number;
  provinceId: number;
  districtId: number;
  wardId: number;
  address: string;
  status: StatusEnum;
}

export interface PatientProfileCreateReq {
  idCard: string;
  fullName: string;
  birthday: Date;
  gender: GenderEnum;
  countryId: number;
  nationId: number;
  provinceId: number;
  districtId: number;
  wardId: number;
  address: string;
}

export interface VcnProfileCreateReq {
  expectedInjectionTime: Date;
  patientProfileId: number;
  selectedPackageId: number;
  selectedSiteId: number;
}

export interface VcnProfileRes {
  id: number;
  expectedInjectionTime: Date;
  injectionTime: Date;
  status: VcnProfileStatusEnum;
  patientProfileId: number;
  patientProfile: PatientProfileRes;
  selectedPackageId: number;
  selectedPackage: VcnPackageRes;
  selectedSiteId: number;
  selectedSite: VcnSiteRes;
}
