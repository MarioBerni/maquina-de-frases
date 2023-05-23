// NewQuote.js
import React from 'react';
import './NewQuote.css';

function NewQuote({ onClick, color }) {
  return (
    <button id="new-quote" onClick={onClick} style={{backgroundColor: color}}>
      New Quote
    </button>
  );
}

export default NewQuote;
