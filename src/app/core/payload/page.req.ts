export interface PageReq {
  page: number;
  size: number;
  sortedBy: string;
  sort: SortType;
}

export enum SortType {
  ASC,
  DESC,
}
