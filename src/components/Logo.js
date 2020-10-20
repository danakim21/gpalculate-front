import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/logo.css';

function Logo({ logoid }) {
  return (
    // <div className="logo-div">
    <Link to="/">
      <img
        src={require('../styles/logo-v2.png')}
        className="logo-img"
        id={logoid}
        alt="Logo"
      />
    </Link>
    // </div>
  );
}

export default Logo;
