import { IPerson } from '../types';

export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const ADD_DATE = 'ADD_DATE';
export const ADD_RESULT_NAMES = 'ADD_RESULT_NAMES';
export const SORT_RESULT_DATES = 'SORT_RESULT_DATES';

export interface IAddPersonAction {
  readonly type: typeof ADD_PERSON;
  person: IPerson;
}

export interface IRemovePersonAction {
  readonly type: typeof REMOVE_PERSON;
  id: string;
}

export interface IAddResultNamesAction {
  readonly type: typeof ADD_RESULT_NAMES;
  date: string;
  names: { id: string; name: string; }[];
}

export interface IAddDateAction {
  readonly type: typeof ADD_DATE;
  id: string;
  date: string;
}

export type TConstructorActions =
  | IAddPersonAction
  | IRemovePersonAction
  | IAddDateAction
  | IAddResultNamesAction;
