import React from 'react';
import { connect } from 'react-redux';
import SemesterLine from './SemesterLine';

function Block(props) {
  return (
    <div style={{ backgroundColor: 'green' }}>
      <h1>Semester {props.semesterId + 1}</h1>
      <div>
        {props.semesters[props.semesterId].map((course, i) => (
          <SemesterLine key={i} semesterId={props.semesterId} courseId={i} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    semesters: state.semesters,
  };
};

export default connect(mapStateToProps)(Block);
