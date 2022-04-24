import {VcnScreeningTmplDataRecord} from "./vcn-rss.payload";

export interface VcnProcessTestReq {
  vcnProfileId: number;
  data: VcnScreeningTmplDataRecord[];
  ok: boolean;
}
