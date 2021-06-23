import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Date = () => {
  const { updateDate, months } = useContext(GlobalContext);

  // let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const [month, setMonth] = useState('December');
  const [year, setYear] = useState(2020);

  
  const onClickPlus = event => {
    event.preventDefault();

    let currentIndex = months.indexOf(month);
    
    if(currentIndex === 11){
      setMonth(months[0]);
      setYear(year + 1);

      let date = {
        month: months[0],
        year: year + 1
      }

      updateDate(date)
    } else {
      setMonth(months[currentIndex + 1]);

      let date = {
        month: months[currentIndex + 1],
        year
      }

      updateDate(date)
    }   
  }

  const onClickMinus = event => {
    event.preventDefault();

    let currentIndex = months.indexOf(month);
    
    if(currentIndex === 0){
      setMonth(months[11]);
      setYear(year - 1);

      let date = {
        month: months[11],
        year: year - 1
      }

      updateDate(date)
    } else {
      setMonth(months[currentIndex - 1]);

      let date = {
        month: months[currentIndex - 1],
        year
      }

      updateDate(date)
    }   
  }


  return(
    <div className = "date-selector">
      <img src="https://img.icons8.com/dusk/64/000000/sort-left.png" onClick={onClickMinus}/><div className='month-year'>{month} {year}</div><img src="https://img.icons8.com/dusk/64/000000/sort-right.png" onClick={onClickPlus}/>

    </div>
  );
};

