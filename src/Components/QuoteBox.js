// QuoteBox.js
import React, { useState, useEffect } from 'react';
import Text from './Text';
import Author from './Author';
import NewQuote from './NewQuote';
import TweetQuote from './TweetQuote';
import './QuoteBox.css';

function QuoteBox() {
  const [quote, setQuote] = useState({
    text: 'This is a sample quote.',
    author: 'Anonymous',
  });
  const [backgroundColor, setBackgroundColor] = useState('#3498db'); // Cambia el valor a azul

  const generateRandomColor = () => {
    let randomColor;
    do {
      randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    } while (randomColor === '#FFFFFF');
    return randomColor;
  };

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (response.ok) {
        const data = await response.json();
        setQuote({
          text: data.content,
          author: data.author,
        });
      } else {
        throw new Error('Failed to fetch quote');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuote();
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const handleNewQuote = () => {
    fetchQuote();
    setBackgroundColor(generateRandomColor());
  };

  return (
    <div id="quote-box">
      <Text text={quote.text} color={backgroundColor} />
      <Author author={quote.author} color={backgroundColor} />
      <div className="quote-buttons">
        <NewQuote onClick={handleNewQuote} color={backgroundColor} />
        <TweetQuote text={quote.text} author={quote.author} backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}

export default QuoteBox;
