import React, { useState } from 'react';
//@ts-ignore
import { useFormatDate } from '../utils/useFormatDate.ts';
import 'react-calendar/dist/Calendar.css';
//@ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_PERSON, COUNT_RESULT_DATES, ADD_DATES } from '../store/actions';
import PersonItem from './PersonItem';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function UsersList() {
  const dispatch = useDispatch();
  const persons = useSelector((store: any) => store.persons);
  const [calendarValue, onCalendarValueChange] = useState<Value>(new Date());

  // Создание нового объекта с днями и именами пользователей
  const result: { date: string | number | Date; names: any[]; }[] = [];
  persons.forEach(({ name, dates } : { name: string, dates: string[]}) => {
    dates.forEach((dateString: string | number | Date) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const formattedDate = useFormatDate(dateString);
      const existingItem = result.find(item => item.date === formattedDate);
      if (existingItem) {
        existingItem.names.push(name);
      } else {
        result.push({ date: formattedDate, names: [name] });
      }
    });
  });

  // Сортировка результатов по возрастанию даты
  result.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const handleRemovePerson = (id: string) => {
    dispatch({
      type: REMOVE_PERSON,
      id: id
    },);
  };

  function handleAddDate({ e, id }: { e: any; id: string }) {
    onCalendarValueChange(e);
    dispatch({
      type: ADD_DATES,
      dates: e,
      id
    });
    dispatch({
      type: COUNT_RESULT_DATES,
      dates: result,
    });
  };

  return (
    <ol>
      {persons.map((person: {id: string; name: string}) => (
        <PersonItem
          key={person.id}
          person={person}
          calendarValue={calendarValue}
          handleAddDate={(e: any) => handleAddDate({ e, id: person.id })}
          handleRemove={() => handleRemovePerson(person.id)}
        />
      ))}
    </ol>
  );

}

export default UsersList;
