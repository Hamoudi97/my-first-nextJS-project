"use client"
import React, { useState } from 'react';

export default function RandomQuote(props) {
  const buttonText = props.buttonText;
  const defaultMessage = props.defaultMessage;

  const [currentQuote, setCurrentQuote] = useState(defaultMessage);

   const handleGenerateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    setCurrentQuote(selectedQuote);
  };

  const quotes = [
    "I've struggled a long time with survivin', but no matter what you have to find something to fight for.",
    "Send me out...with a bang.",
    "What is a man but the sum of his memories? We are the stories we live! The tales we tell ourselves!",
    "War is where the young and stupid are tricked by the old and bitter into killing each other.",
    "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.",
    "The ending isn’t any more important than any of the moments leading to it.",
    "You can’t undo what you’ve already done, but you can face up to it."
  ];



  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px 0', minHeight: '50px' }}>
        <p>{currentQuote}</p>
      </div>
      <button onClick={handleGenerateQuote}>{buttonText}</button>
      {(
        <p><em>Quote generated! Click again for another one.</em></p>
      )}
    </div>
  );
}