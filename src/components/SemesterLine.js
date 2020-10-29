import React from 'react';
import { connect } from 'react-redux';
import {
  updateCourseName,
  updateCourseCredits,
  updateCourseLetterGrade,
  // updateCourseNumberGrade,
  updateCourseIncluded,
  deleteCourse,
} from '../redux';

function SemesterLine(props) {
  function convertLetterGrade(letterGrade) {
    const conversion = {
      'A+': 4.3,
      A: 4.0,
      'A-': 3.7,
      'B+': 3.3,
      B: 3.0,
      'B-': 2.7,
      'C+': 2.3,
      C: 2.0,
      'C-': 1.7,
      'D+': 1.3,
      D: 1.0,
      'D-': 0.7,
    };
    let converted = conversion[letterGrade];
    return converted;
  }

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
        placeholder="Course Name"
        onChange={(e) => {
          props.updateCourseName(e.target.value);
        }}
      />
      <input
        type="number"
        value={props.courseCredits}
        placeholder="Number of Credits"
        onChange={(e) => props.updateCourseCredits(e.target.value)}
      />
      <input
        type="text"
        value={props.courseLetterGrade}
        placeholder="Letter Grade"
        onChange={(e) => props.updateCourseLetterGrade(e.target.value)}
      />
      <input
        type="number"
        // value={props.courseNumberGrade}
        // value={conversion[props.courseLetterGrade]}
        value={convertLetterGrade(props.courseLetterGrade)}
        // onChange={(e) => props.updateCourseNumberGrade(e.target.value)}
        placeholder="Number Grade"
        readOnly
      />
      <input
        type="number"
        // value={(props.courseCredits * props.courseNumberGrade).toFixed(1)}
        value={(
          props.courseCredits * convertLetterGrade(props.courseLetterGrade)
        ).toFixed(1)}
        placeholder="Total Weight"
        readOnly
      />
      <button onClick={() => props.deleteCourse()}>x</button>
      <hr className="semester-line-hr" />
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
    // courseNumberGrade: courseDetails.numberGrade,
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
    // updateCourseNumberGrade: (courseNumberGrade) =>
    //   dispatch(
    //     updateCourseNumberGrade(
    //       ownProps.semesterId,
    //       ownProps.courseId,
    //       courseNumberGrade
    //     )
    //   ),

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
