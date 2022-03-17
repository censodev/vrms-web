import {GenderEnum} from "../enums/gender.enum";
import {StatusEnum} from "../enums/status.enum";

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
