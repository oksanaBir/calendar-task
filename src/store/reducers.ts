import {
  ADD_PERSON,
  REMOVE_PERSON,
  ADD_DATES,
  SORT_RESULT_DATES,
  TConstructorActions,
} from './actions';
import { IPerson, IResultDate } from '../types';

type TConstructorState = {
  persons: Array<IPerson>,
  resultDates: Array<IResultDate>,
} 

const initialState: TConstructorState = {
  persons: [],
  resultDates: [],
};

export const datesReducer = (
  state: TConstructorState = initialState,
  action: TConstructorActions
):TConstructorState => {

  switch (action.type) {
    case ADD_PERSON: {
      return {
        ...state,
        persons: [...state.persons, action.person]
      };
    }
    case REMOVE_PERSON: {
      return {
         ...state,
         persons: state.persons.filter((person: IPerson) => person?.id !== action.id),
        resultDates: state.resultDates.filter((item?: { names?: { id?: string; name?: string; }[] }) => {
          if (item?.names && item.names.length > 0) {
            return item.names[0].id !== action.id;
          }
          return true;
        })
      };
    }
    case ADD_DATES: {
      return {
        ...state,
        persons: state.persons.map((person: any) =>
          person.id === action.id ? { ...person, dates: [...person.dates, action.dates ] } : person
        )
      };
    }
    case SORT_RESULT_DATES: {
      return {
        ...state,
        resultDates: action.dates.sort((a: { date: string }, b: { date: string }) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        })
      };
    }
    default: {
      return state;
    }
  }
};