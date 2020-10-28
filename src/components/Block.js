import React from 'react';
import { connect } from 'react-redux';
import SemesterLine from './SemesterLine';
import { deleteSemester, toggleSemester } from '../redux';
import '../styles/block.css';

function Block(props) {
  let cumulativeSemesterCredits = props.semester
    .filter((course) => course.included)
    .reduce(
      (accumulator, currentCourse) => accumulator + currentCourse.credits,
      0
    );
  let cumulativeSemesterGrades = props.semester
    .filter((course) => course.included)
    .reduce(
      (accumulator, currentCourse) =>
        accumulator + currentCourse.credits * currentCourse.numberGrade,
      0
    )
    .toFixed(1);
  return (
    <div className={'block-div ' + (props.semesterShown ? '' : 'hide-block')}>
      <p className="block-div-title" onClick={() => props.toggleSemester()}>
        Semester {props.semesterId + 1}
      </p>
      <div className="block-div-info">
        <div>
          {props.semester.map((course, i) => (
            <SemesterLine key={i} semesterId={props.semesterId} courseId={i} />
          ))}
          <p>{cumulativeSemesterCredits}</p>
          <p>{cumulativeSemesterGrades}</p>
        </div>
        <div>
          <p>
            Cumulative GPA:{' '}
            {(cumulativeSemesterGrades / cumulativeSemesterCredits).toFixed(2)}{' '}
            / 4.3
          </p>
        </div>
        <button onClick={() => props.deleteSemester()}>Delete Semester</button>
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
    // deleteSemester
    deleteSemester: () => dispatch(deleteSemester(ownProps.semesterId)),
    // toggleSemester
    toggleSemester: () => dispatch(toggleSemester(ownProps.semesterId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);
