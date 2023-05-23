import React from 'react';
import './Text.css';

function Text(props) {
  return <p id="text" style={{color: props.color}}>"{props.text}"</p>;
}

export default Text;
