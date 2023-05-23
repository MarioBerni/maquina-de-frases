import React from 'react';
import './TweetQuote.css';

function TweetQuote({ text, author }) {
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${text} - ${author}`
  )}`;

  return (
    <a
      id="tweet-quote"
      href={tweetURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Tweet Quote
    </a>
  );
}

export default TweetQuote;
