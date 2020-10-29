import React from 'react';
import { connect } from 'react-redux';
import Block from './Block';
import NavBar from './NavBar';
import Button3 from './Button3';
import { addSemester } from '../redux';
import '../styles/blockList.css';

function BlockList(props) {
  return (
    <div id="block-list-div">
      <NavBar></NavBar>
      {props.semesters.map((semester, i) => (
        <Block key={i} semesterId={i} />
      ))}
      <div id="add-semester-btn">
        <Button3 text={'Add Semester'} onclick={props.addSemester}></Button3>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    semesters: state.semesters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addSemester
    addSemester: () => dispatch(addSemester()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockList);
