import React from 'react';
import styles from './styles.module.scss';

import Form from './components/form/Form';
import PersonsList from './components/personsList/PersonsList';
import Result from './components/result/Result';

function App() {
  return (
    <div className={styles.calendarWrapper}>
      <Form />
      <PersonsList />
      <Result />
    </div>
  );

}

export default App;
