import React from 'react';

const DisplayInfo = props => {
  return (
    <div className="description">
    <h1>{props.title}</h1>
    <p><span className="date"><em>{props.date}</em></span> &#8212; {props.explanation}</p>
  </div>
  )
}

export default DisplayInfo;