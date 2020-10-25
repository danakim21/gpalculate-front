import React from 'react';
import { connect } from 'react-redux';
import Block from './Block';

function BlockList({ semesters }) {
  return (
    <div>
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
