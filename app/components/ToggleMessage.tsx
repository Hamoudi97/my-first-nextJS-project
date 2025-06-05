"use client"
import { useState } from 'react';

export default function ToggleMessage({ initialText, buttonLabel }) {
  // useState hook to manage message visibility
  const [isVisible, setIsVisible] = useState(true);

  // Event handler for button click
  const handleToggle = () => {
    setIsVisible(!isVisible); // Toggle the boolean state
  };

  return (
    <div>
      {/* Conditional rendering - show message only if isVisible is true */}
      {isVisible && <p>{initialText}</p>}
      
      {/* Button with event handler */}
      <button onClick={handleToggle}>
        {buttonLabel}
      </button>
      
      {/* Show current state for demonstration */}
      <p>Message is currently: {isVisible ? 'Visible' : 'Hidden'}</p>
    </div>
  );
}