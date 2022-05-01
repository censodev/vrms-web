import {GenderEnum} from "../enums/gender.enum";
import {StatusEnum} from "../enums/status.enum";
import {VcnPackageRes, VcnScreeningTmplDataRecord, VcnSiteRes} from "./vcn-rss.payload";
import {VcnProfileStatusEnum} from "../enums/vcn-profile-status.enum";
import {MstCountry, MstDistrict, MstNation, MstProvince, MstWard} from "./mst.payload";
import {AccountRes} from "./account.payload";

export interface PatientProfileRes {
  id: number;
  idCard: string;
  fullName: string;
  birthday: Date;
  gender: GenderEnum;
  countryId: number;
  country: MstCountry;
  nationId: number;
  nation: MstNation;
  provinceId: number;
  province: MstProvince;
  districtId: number;
  district: MstDistrict;
  wardId: number;
  ward: MstWard;
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
  symptoms: string;
  screeningTestResult: VcnScreeningTmplDataRecord[];
  createdAt: Date;
  updatedAt: Date;
}

export interface VcnProfileHistoryRes {
  id: number;
  status: VcnProfileStatusEnum;
  time: Date;
  createdBy: AccountRes;
}

export interface VcnProfilePaymentRes {
  id: number;
  amount: number;
  createdAt: Date;
}
