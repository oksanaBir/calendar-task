export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';

export const ADD_DATES = 'ADD_DATES';

export const COUNT_RESULT_DATES = 'COUNT_RESULT_DATES';

export interface IPerson {
  id?: string,
  name?: string;
  dates?: any[];
}

export interface IResultDate {
  date: string;
  names: string[];
}

export interface IAddPersonAction {
  readonly type: typeof ADD_PERSON;
  person: IPerson;
}

export interface IRemovePersonAction {
  readonly type: typeof REMOVE_PERSON;
  id: string;
}

export interface IAddDatesAction {
  readonly type: typeof ADD_DATES;
  id: string;
  dates: string[];
}

export interface ICountResultDatesAction {
  readonly type: typeof COUNT_RESULT_DATES;
  dates: IResultDate;
}

export type TConstructorActions =
  | IAddPersonAction
  | IRemovePersonAction
  | IAddDatesAction
  | ICountResultDatesAction;
