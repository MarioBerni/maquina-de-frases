// Author.js
import React from 'react';
import './Author.css';

function Author(props) {
  return <p id="author" style={{color: props.color}}>{props.author}</p>;
}

export default Author;
