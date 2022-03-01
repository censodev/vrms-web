export interface MstCountry {
  id: number;
  code: string;
  name: string;
}

export interface MstNation {
  id: number;
  name: string;
}

export interface MstProvince {
  id: number;
  name: string;
  code: string;
  originId: number;
  regions: string;
  shortName: string;
  signlessName: string;
  rank: string;
}

export interface MstDistrict {
  id: number;
  name: string;
  code: string;
  originId: number;
  shortName: string;
  signlessName: string;
  rank: string;
  provinceId: number;
}

export interface MstWard {
  id: number;
  districtId: number;
  name: string;
  rank: string;
  code: string;
  originId: number;
  shortName: string;
  signlessName: string;
  provinceId: number;
}
