import React from 'react';
import { connect } from 'react-redux';

function SemesterLine({ semesters, semesterId, courseId }) {
  let courseDetails = semesters[semesterId][courseId];
  return (
    <div>
      <p>{courseDetails.name}</p>
      <p>{courseDetails.credits}</p>
      <p>{courseDetails.letterGrade}</p>
      <p>{courseDetails.numberGrade}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    semesters: state.semesters,
  };
};

export default connect(mapStateToProps)(SemesterLine);
