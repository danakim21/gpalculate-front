import React from 'react';
import '../styles/button3.css';

function Button3({ text, onclick }) {
  return (
    <button className="button3" onClick={() => onclick()}>
      {text}
    </button>
  );
}

export default Button3;
