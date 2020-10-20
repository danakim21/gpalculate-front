import React from 'react';
import '../styles/button.css';
import Fade from 'react-reveal/Fade';

function Button1({ buttonid, text }) {
  return (
    <Fade bottom distance="0.5em" delay={2000}>
      <button className="button1" id={buttonid}>
        {text}
      </button>
    </Fade>
  );
}

export default Button1;
