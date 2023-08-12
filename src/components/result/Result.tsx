import React from 'react';
import { useSelector } from 'react-redux';

function Result() {
  const resultDates = useSelector((store: any) => store.resultDates);

  return (
    <>
      <h5>Результаты:</h5>
      {resultDates.map((result: any, key: number) => (
        <div key={key}>
          <p>{`${result.date} - ${result.names.map((item: any) => item.name).join(', ')}`}</p>
        </div>
        )
      )}
    </>
  );
}

export default Result;
