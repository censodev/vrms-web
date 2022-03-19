export interface VcnPackageRes {
  id: number;
  name: string;
  desc: string;
  price: number;
  status: string;
  diseasesCode: string;
  screeningTemplateId: number;
}

export interface VcnSiteRes {
  id: number;
  name: string;
  address: string;
  status: string;
}
