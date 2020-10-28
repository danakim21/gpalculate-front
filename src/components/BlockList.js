import React from 'react';
import { connect } from 'react-redux';
import Block from './Block';
import NavBar from './NavBar';
import '../styles/blockList.css';

function BlockList({ semesters }) {
  return (
    <div id="block-list-div">
      <NavBar></NavBar>
      {semesters.map((semester, i) => (
        <Block key={i} semesterId={i} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    semesters: state.semesters,
  };
};

export default connect(mapStateToProps)(BlockList);
