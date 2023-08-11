import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { ADD_PERSON } from '../store/actions';

function Form() {
  const dispatch = useDispatch();

  function handleAddPerson(e: any) {
    const input = e.target.previousSibling;
    dispatch({
      type: ADD_PERSON,
      person: {
        id: uuid(),
        dates: [],
        name: input.value
      }
    });
    
    input.value = '';
  }

  return (
    <>
      <input type="text" placeholder="Введите имя" />
      <button onClick={handleAddPerson}>Добавить</button>
    </>
  );

}

export default Form;
