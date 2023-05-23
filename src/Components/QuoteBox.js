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
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div id="quote-box">
      <Text text={quote.text} />
      <Author author={quote.author} />
      <NewQuote onClick={handleNewQuote} />
      <TweetQuote text={quote.text} author={quote.author} />
    </div>
  );
}

export default QuoteBox;
