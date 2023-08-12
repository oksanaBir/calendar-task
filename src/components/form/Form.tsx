import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { ADD_PERSON } from '../../store/actions';
import styles from './Form.module.scss';

function Form() {
  const dispatch = useDispatch();

  const handleAddPerson = (e: any) => {
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
    <div className={styles.formWraper}>
      <input type="text" placeholder="Введите имя" />
      <button style={{ marginLeft: '10px' }} onClick={handleAddPerson}>Добавить</button>
    </div>
  );
}

export default Form;
