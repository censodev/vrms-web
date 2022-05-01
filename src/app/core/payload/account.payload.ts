import {StatusEnum} from "../enums/status.enum";
import {SearchReq} from "./search.req";

export interface AccountCreateReq {
  username: string;
  email: string;
  role: string;
}

export interface AccountUpdateReq {
  id: number;
  email: string;
  role: string;
  status: StatusEnum;
}

export interface AccountSearchReq extends SearchReq {

}

export interface AccountRes {
  id: number;
  username: string;
  email: string;
  role: string;
  status: StatusEnum;
  phone: number;
}
