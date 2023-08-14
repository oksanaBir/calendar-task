import {
  ADD_PERSON,
  REMOVE_PERSON,
  ADD_DATE,
  ADD_RESULT_NAMES,
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
        resultDates: state.resultDates.filter(resultValue => {
          resultValue.names = resultValue.names.filter(nameValue => nameValue.id !== action.id);
          // Остаются только объекты, у которых есть элементы в names,
          // нужно чтобы скрыть дату выставленную по умолчанию
          return resultValue.names.length > 0;
        }),
      };
    }
    case ADD_DATE: {
      return {
        ...state,
        persons: state.persons.map((person: IPerson) =>
          person.id === action.id ? { ...person, dates: [ ...person.dates, action.date ] } : person
        ),
      };
    }
    case ADD_RESULT_NAMES: {
      return {
        ...state,
        resultDates: [
          ...state.resultDates,
          {
            date: action.date,
            names: action.names
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
};