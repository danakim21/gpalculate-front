import React from 'react';
import { connect } from 'react-redux';
import {
  updateCourseName,
  updateCourseCredits,
  updateCourseLetterGrade,
  updateCourseNumberGrade,
  updateCourseIncluded,
  deleteCourse,
} from '../redux';

function SemesterLine(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.courseIncluded}
        onChange={() => {
          props.updateCourseIncluded(!props.courseIncluded);
        }}
      />
      <input
        type="text"
        value={props.courseName}
        onChange={(e) => {
          props.updateCourseName(e.target.value);
        }}
      />
      <input
        type="number"
        value={props.courseCredits}
        onChange={(e) => props.updateCourseCredits(e.target.value)}
      />
      <input
        type="text"
        value={props.courseLetterGrade}
        onChange={(e) => props.updateCourseLetterGrade(e.target.value)}
      />
      <input
        type="number"
        value={props.courseNumberGrade}
        onChange={(e) => props.updateCourseNumberGrade(e.target.value)}
      />
      <input
        type="number"
        value={(props.courseCredits * props.courseNumberGrade).toFixed(1)}
        readOnly
      />
      <button onClick={() => props.deleteCourse()}>x</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let semesterId = ownProps.semesterId;
  let courseId = ownProps.courseId;
  let courseDetails = state.semesters[semesterId][courseId];
  return {
    courseName: courseDetails.name,
    courseCredits: courseDetails.credits,
    courseLetterGrade: courseDetails.letterGrade,
    courseNumberGrade: courseDetails.numberGrade,
    courseIncluded: courseDetails.included,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // updateCourseName
    updateCourseName: (courseName) =>
      dispatch(
        updateCourseName(ownProps.semesterId, ownProps.courseId, courseName)
      ),

    // updateCourseCredits
    updateCourseCredits: (courseCredits) =>
      dispatch(
        updateCourseCredits(
          ownProps.semesterId,
          ownProps.courseId,
          courseCredits
        )
      ),

    // updateCourseLetterGrade
    updateCourseLetterGrade: (courseLetterGrade) =>
      dispatch(
        updateCourseLetterGrade(
          ownProps.semesterId,
          ownProps.courseId,
          courseLetterGrade
        )
      ),

    // updateCourseNumberGrade
    updateCourseNumberGrade: (courseNumberGrade) =>
      dispatch(
        updateCourseNumberGrade(
          ownProps.semesterId,
          ownProps.courseId,
          courseNumberGrade
        )
      ),

    // updateCourseIncluded
    updateCourseIncluded: (courseIncluded) =>
      dispatch(
        updateCourseIncluded(
          ownProps.semesterId,
          ownProps.courseId,
          courseIncluded
        )
      ),

    // deleteCourse
    deleteCourse: () =>
      dispatch(deleteCourse(ownProps.semesterId, ownProps.courseId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SemesterLine);
