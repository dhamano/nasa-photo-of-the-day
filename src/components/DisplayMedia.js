import React from 'react';

const DisplayMedia = props => {
  return (
    props.media_type === "video" ?
      <iframe src={props.url} title={props.title}></iframe>
    :
      <img src={props.url} alt={props.title} />
  )
}

export default DisplayMedia;