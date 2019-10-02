import React, { useState, useEffect } from "react";
import Loader from 'react-loader-spinner';

import { getNasaPhoto } from './utilities/fetchData';
import DisplayMedia from './components/DisplayMedia';
import DisplayInfo from './components/DisplayInfo';

function App() {
  const [ dataFromNasa, setDataFromNasa ] = useState('');

  useEffect( () => {
    getNasaPhoto()
      .then( json => setTimeout( () => {setDataFromNasa(json)}, 3000));
  }, []);

  if (!dataFromNasa) {
    return (
      <div className="loader-spinner">
        <Loader type="Ball-Triangle" color="#7cc6ff" height="90" width="60" />
      </div>
    )
  }

  return (
    <div className="App">
      <DisplayMedia media_type={dataFromNasa.media_type} url={dataFromNasa.url} title={dataFromNasa.title} />
      <DisplayInfo title={dataFromNasa.title} date={dataFromNasa.date} explanation={dataFromNasa.explanation} />
    </div>
  );
}

export default App;
