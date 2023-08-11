import React from 'react';

//@ts-ignore
import styles from './styled.module.scss';
import Form from './components/Form';
import UsersList from './components/UsersList';
import ResultItems from './components/ResultItems';

function App() {
  return (
    <div className={styles.calculatorWrapper}>
      <Form />
      <UsersList />
      <ResultItems />
    </div>
  );

}

export default App;
