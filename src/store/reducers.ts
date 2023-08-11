import {
  ADD_PERSON,
  REMOVE_PERSON,
  ADD_DATES,
  COUNT_RESULT_DATES,
  TConstructorActions,
  IPerson,
  IResultDate
} from './actions';

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
      return { ...state, persons: [...state.persons].filter((person : any) => person?.id !== action.id) };
    }
    case ADD_DATES: {
      return {
        ...state,
        persons: [...state.persons].map((person : any) =>
          person.id === action.id ? { ...(person as object), dates: [...person.dates, action.dates ] } : person
        )
      };
    }
    case COUNT_RESULT_DATES: {
      return {
        ...state,
        resultDates: [action.dates],
      };
    }
    default: {
      return state;
    }
  }
};