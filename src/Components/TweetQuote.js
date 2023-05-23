// TweetQuote.js
import React from 'react';
import './TweetQuote.css';

function TweetQuote({ text, author, color }) {
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${text} - ${author}`
  )}`;

  return (
    <a
      id="tweet-quote"
      href={tweetURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{backgroundColor: color}}
    >
      Tweet Quote
    </a>
  );
}

export default TweetQuote;
