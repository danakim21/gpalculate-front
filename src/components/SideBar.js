import React from 'react';
import Logo from './Logo';
import '../styles/sideBar.css';

function SideBar() {
  return (
    <div id="sideBarDiv">
      <Logo logoid={'gpa-logo'}></Logo>
      <p>Conversion Chart</p>
    </div>
  );
}

export default SideBar;
