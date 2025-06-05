"use client"
import React, { useState } from 'react';

export default function ColorBox(props) {
  const initialColor = props.initialColor;
  const buttonText = props.buttonText;

  const [backgroundColor, setBackgroundColor] = useState(initialColor);

  const colors = ['blue', 'green', 'coral', 'yellow', 'pink'];

  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div>
      <div 
        style={{ 
          backgroundColor: backgroundColor, 
          width: '250px', 
          height: '100px', 
          border: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Current Color: {backgroundColor}
      </div>
      <button onClick={handleColorChange}>{buttonText}</button>
    </div>
  );
}
