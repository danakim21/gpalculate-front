import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar() {
  return (
    <nav>
      <Link to="/gpa-calculator">GPA Calculator</Link>
      <Link to="/grade-calculator">Grade Calculator</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default NavBar;
