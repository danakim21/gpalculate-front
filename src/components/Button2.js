import React from 'react';
import '../styles/button2.css';

function Button2({ text, onclick }) {
  return (
    <button className="button2" onClick={() => onclick()}>
      {text}
    </button>
  );
}

export default Button2;
