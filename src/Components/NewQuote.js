import React from 'react';
import './NewQuote.css';

function NewQuote({ onClick }) {
  return (
    <button id="new-quote" onClick={onClick}>
      New Quote
    </button>
  );
}

export default NewQuote;
