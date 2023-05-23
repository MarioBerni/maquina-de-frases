import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './TweetQuote.css';

function TweetQuote({ text, author, backgroundColor }) {
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${text} - ${author}`
  )}`;

  const tweetStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <a
      id="tweet-quote"
      href={tweetURL}
      target="_blank"
      rel="noopener noreferrer"
      style={tweetStyle}
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  );
}

export default TweetQuote;
