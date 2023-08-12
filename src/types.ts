export interface IPerson {
  id: string,
  name: string;
  dates: string[] | Date[];
}

export interface IResultDate {
  date: string;
  names: { id: string; name: string; }[];
}