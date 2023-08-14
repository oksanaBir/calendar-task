export interface IPerson {
  id: string,
  name: string;
  dates: string[] | Date[] | any;
}

export interface IResultDate {
  date: string;
  names: { id: string; name: string; }[];
}