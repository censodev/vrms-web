import {StatusEnum} from "../enums/status.enum";
import {MstDistrict, MstProvince, MstWard} from "./mst.payload";

export interface VcnPackageRes {
  id: number;
  name: string;
  desc: string;
  price: number;
  status: StatusEnum;
  diseasesCode: string;
  screeningTemplateId: number;
}

export interface VcnPackageCreateReq {
  name: string;
  desc: string;
  price: number;
  diseasesCode: string;
  screeningTemplateId: number;
}

export interface VcnPackageUpdateReq {
  id: number;
  name: string;
  desc: string;
  price: number;
  status: StatusEnum;
  diseasesCode: string;
  screeningTemplateId: number;
}

export interface VcnSiteRes {
  id: number;
  name: string;
  address: string;
  status: StatusEnum;
  province: MstProvince;
  provinceId: number;
  district: MstDistrict;
  districtId: number;
  ward: MstWard;
  wardId: number;
}

export interface VcnSiteCreateReq {
  name: string;
  address: string;
  provinceId: number;
  districtId: number;
  wardId: number;
}

export interface VcnSiteUpdateReq {
  id: number
  name: string;
  address: string;
  provinceId: number;
  districtId: number;
  wardId: number;
  status: StatusEnum;
}

export interface VcnScreeningTmplRes {
  id: number;
  title: string;
  data: any;
  status: StatusEnum;
}
