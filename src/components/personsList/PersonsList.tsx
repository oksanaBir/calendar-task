import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import 'react-calendar/dist/Calendar.css';
import { REMOVE_PERSON, ADD_DATE, ADD_RESULT_NAMES } from '../../store/actions';
import { setFormatDate } from '../../utils/useFormatDate';
import { IPerson, IResultDate } from '../../types';
import PersonItem from './PersonItem';

function PersonsList() {
  const dispatch = useDispatch();
  const persons = useSelector((store: { persons: IPerson[]; resultDates: IResultDate[]; }) => store.persons);
  const resultDates = useSelector((store: { resultDates: IResultDate[] }) => store.resultDates);  
  const [dateValue, setDateValue] = useState<any>({ id: uuid(), date: new Date()});

  const [resultNames, setResultNames] = useState<{ id: string; name: string; }[]>([]);

  // объект в формате {date: '17 августа', names: Array(0)}
  // для проверки первый участник на выбранную дату или нет
  const dateForNamesCheck = resultDates.find((element: IResultDate) => element.date === setFormatDate(dateValue.date));

  useEffect(() => {
    handleAddDate({ id: dateValue.id, eventDate: dateValue.date });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateForNamesCheck, dateValue.date, dateValue.id]);

  const handleRemovePerson = (id: string) => {
    dispatch({
      type: REMOVE_PERSON,
      id
    },);
  };

  const handleAddDate = useCallback((
    { eventDate, id, dateForNamesCheck }:
    { eventDate: string | Date; id: string; dateForNamesCheck?: IResultDate}
  ) => {
    // для добавления имен в массив resultNames
    persons.map(person => {
      const activeDate = person.dates.find(
        (dateValue: string | Date) =>
          setFormatDate(dateValue) === setFormatDate(eventDate),
      );
      if (
        (activeDate !== undefined ||
          (dateForNamesCheck?.names && dateForNamesCheck.names.length === 0)) &&
        !resultNames.some(nameValue => nameValue.name === person.name)
      ) {
        resultNames.push({ id: person.id, name: person.name });
      }

      return null;
    });

    setResultNames(resultNames);
    setResultNames([]);
    setDateValue({ id, date: eventDate });

    dispatch({
      id,
      type: ADD_DATE,
      date: eventDate,
    });
    dispatch({
      type: ADD_RESULT_NAMES,
      date: setFormatDate(eventDate),
      names: resultNames
    });
  }, [dispatch, persons, resultNames]);

  return (
    <div style={{ marginTop: '10px' }}>
      {persons.map((person: {id: string; name: string}) => (
        <PersonItem
          key={person.id}
          person={person}
          dateValue={dateValue.date}
          handleAddDate={(eventDate: string | Date) => handleAddDate({ eventDate, id: person.id, dateForNamesCheck })}
          handleRemove={() => handleRemovePerson(person.id)}
        />
      ))}
    </div>
  );

}

export default PersonsList;
