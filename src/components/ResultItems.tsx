import React from 'react';
import { useSelector } from 'react-redux';

function ResultItems() {
  const resultDates = useSelector((store: any) => store.resultDates);
  return (
    <>
    <h4>Результаты:</h4>
    {resultDates.map((result: any) => (
      <>
      {/* <h5>{result.date}</h5>
      <p>{result.names.join(', ')}</p> */}
      </>
    )
    )}
    </>
  );
}

export default ResultItems;
