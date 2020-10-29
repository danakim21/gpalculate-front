import React from 'react';
import { connect } from 'react-redux';
import SemesterLine from './SemesterLine';
import Button2 from './Button2';
import { addCourse, deleteSemester, toggleSemester } from '../redux';
import '../styles/block.css';

function Block(props) {
  // Convert Letter Grade
  const convertLetterGrade = (letterGrade) => {
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
    // if (!converted) {

    // }
    return converted;
  };

  // Cumulative Semester Credits
  let cumulativeSemesterCredits = props.semester
    .filter((course) => course.included)
    .reduce(
      (accumulator, currentCourse) => accumulator + currentCourse.credits,
      0
    );

  // Cumulative Semester Grades
  let cumulativeSemesterGrades = props.semester
    .filter((course) => course.included)
    .reduce(
      (accumulator, currentCourse) =>
        accumulator +
        currentCourse.credits * convertLetterGrade(currentCourse.letterGrade),

      0
    )
    .toFixed(1);

  // Semester GPA
  let semesterGpa = (
    cumulativeSemesterGrades / cumulativeSemesterCredits
  ).toFixed(2);

  return (
    <div className={'block-div ' + (props.semesterShown ? '' : 'hide-block')}>
      {/* <p className="block-div-title" onClick={() => props.toggleSemester()}>
        Semester {props.semesterId + 1}
      </p> */}
      <div className="block-div-title" onClick={() => props.toggleSemester()}>
        <p>Semester {props.semesterId + 1}</p>
        <p className={!props.semesterShown ? '' : 'hide'}>
          <span className="gradient-color">Semester GPA:</span> {semesterGpa}{' '}
          <span className="light-grey">/ 4.3</span>
        </p>
      </div>
      <div className="block-div-info">
        <div>
          {props.semester.map((course, i) => (
            <SemesterLine key={i} semesterId={props.semesterId} courseId={i} />
          ))}
          <p>{cumulativeSemesterCredits}</p>
          <p>{cumulativeSemesterGrades}</p>
        </div>
        <div className="block-div-bottom">
          <p>
            <span className="gradient-color">Cumulative GPA:</span>{' '}
            {semesterGpa} <span className="light-grey">/ 4.3</span>
          </p>
          <div>
            <Button2 text={'Add Course'} onclick={props.addCourse}></Button2>
            <Button2
              text={'Delete Semester'}
              onclick={props.deleteSemester}
            ></Button2>
            {/* <button onClick={() => props.addCourse()}>Add Course</button> */}
            {/* <button onClick={() => props.deleteSemester()}>
              Delete Semester
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    semester: state.semesters[ownProps.semesterId],
    semesterShown: state.semestersShown[ownProps.semesterId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // addCourse
    addCourse: () => dispatch(addCourse(ownProps.semesterId)),
    // deleteSemester
    deleteSemester: () => dispatch(deleteSemester(ownProps.semesterId)),
    // toggleSemester
    toggleSemester: () => dispatch(toggleSemester(ownProps.semesterId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);
