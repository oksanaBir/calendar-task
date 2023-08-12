import React, { useState } from 'react';
import { setFormatDate } from '../../utils/useFormatDate';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_PERSON, SORT_RESULT_DATES, ADD_DATES } from '../../store/actions';
import PersonItem from './PersonItem';
import { IPerson, IResultDate } from '../../types';

function PersonsList() {
  const dispatch = useDispatch();
  const persons = useSelector((store: { persons: IPerson[]; resultDates: IResultDate[]; }) => store.persons);
  const [dateValue, setDateValue] = useState<any>(new Date());
  const result: { date: string; names:{ id: string; name: string; }[]; }[] = [];

  // Создание нового объекта с днями и именами пользователей
  persons.forEach(({ id, name, dates } : IPerson) => {
    dates.forEach((dateString: string | Date) => {
      const formattedDate = setFormatDate(dateString);
      const existingItem = result.find(item => item.date === formattedDate);
      if (existingItem) {
        existingItem.names.push({ id, name });
      } else {
        result.push({ date: formattedDate, names: [{ id, name }] });
      }
    });
  });

  const handleRemovePerson = (id: string) => {
    dispatch({
      type: REMOVE_PERSON,
      id
    },);
  };

  const handleAddDate = ({ e, id }: { e: any; id: string }) => {
    setDateValue(e);
    dispatch({
      id,
      type: ADD_DATES,
      dates: e,
    });
    dispatch({
      type: SORT_RESULT_DATES,
      dates: result,
    });
  };

  return (
    <div style={{ marginTop: '10px' }}>
      {persons.map((person: {id: string; name: string}) => (
        <PersonItem
          key={person.id}
          person={person}
          dateValue={dateValue}
          handleAddDate={(e: any) => handleAddDate({ e, id: person.id })}
          handleRemove={() => handleRemovePerson(person.id)}
        />
      ))}
    </div>
  );

}

export default PersonsList;
