import React from 'react';
import { useSelector } from 'react-redux';
import { IResultDate } from '../../types';

function Result() {
  const resultDates = useSelector((store: { resultDates: IResultDate[] }) => store.resultDates);

  // Фильтрация чтобы не повторялись даты в списке
  const filteredResultDates = Object.values(resultDates.reduce((result: { [x: string]: any; }, element: IResultDate) => {
    result[element.date] = element;
    return result;
  }, {})).filter(element => element && element.names.length > 0);

  return (
    <>
      <h5>Результаты:</h5>
      {filteredResultDates
        .sort((a: IResultDate, b: IResultDate) => b.names.length - a.names.length)
        .map((result: IResultDate, key: number) => (
          <div key={key}>
            <p>{`${result.date} - ${result.names
              .map((item: { id: string; name: string }) => item.name)
              .join(', ')}`}</p>
          </div>
        ))}
    </>
  );
}

export default Result;
