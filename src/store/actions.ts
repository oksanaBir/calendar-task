import { IPerson, IResultDate } from '../types';

export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const ADD_DATES = 'ADD_DATES';
export const SORT_RESULT_DATES = 'SORT_RESULT_DATES';

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
  readonly type: typeof SORT_RESULT_DATES;
  dates: Array<IResultDate>;
}

export type TConstructorActions =
  | IAddPersonAction
  | IRemovePersonAction
  | IAddDatesAction
  | ICountResultDatesAction;
