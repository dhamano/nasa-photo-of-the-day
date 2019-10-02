import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { getNasaPhotoFromDay } from '../utilities/fetchData';

const DateQuery = props => {

  const [ date, setDate ] = useState('');
  const [ todaysDate, setTodaysDate ] = useState('');
  const [ currentDate ] = useState(props.currentDate);
  const [ error, setError ] = useState(false);

  useEffect( () => {
    let d = new Date();
    let today = `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
    setDate(`${today}`);
    setTodaysDate(`${today}`);
  }, [])

  const getNewAPOD = event => {
    setError(false);
    event.preventDefault();
    if (date !== currentDate) {
      getNasaPhotoFromDay(date).then( json => props.setDataFromNasa(json));
    } else {
      setError(true);
    }
  }

  const onChangeHandler = event => {
    event.preventDefault();
    setError(false);
    setDate(event.target.value);
  }

  return(
    <>
      <form onSubmit={getNewAPOD} className="date-query-form">
        <input type="date" max={todaysDate} value={date} onChange={onChangeHandler} />
        <button type="submit">Get Picture for the Day</button>
      </form>
      { error && <p class="error">You're already looking at {date}'s photo</p> }
    </>
  )
}

export default DateQuery;