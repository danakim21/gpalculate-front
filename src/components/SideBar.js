import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import '../styles/sideBar.css';

function SideBar(props) {
  let calculateSemesterGpa = (semester) => {
    semester = semester.filter((course) => course.included);
    let cumulativeSemesterCredits = semester.reduce(
      (accumulator, currentCourse) => accumulator + currentCourse.credits,
      0
    );
    let cumulativeSemesterGrades = semester
      .reduce(
        (accumulator, currentCourse) =>
          accumulator + currentCourse.credits * currentCourse.numberGrade,
        0
      )
      .toFixed(1);
    return (cumulativeSemesterGrades / cumulativeSemesterCredits).toFixed(2);
  };

  let calculateTotalGpa = (semesters) => {
    let cumulativeCredits = 0;
    let cumulativeGrades = 0;
    for (let semester of semesters) {
      semester = semester.filter((course) => course.included);
      semester.map(
        (course) => (
          (cumulativeCredits += course.credits),
          (cumulativeGrades += course.credits * course.numberGrade)
        )
      );
    }
    return (cumulativeGrades / cumulativeCredits).toFixed(2);
  };

  return (
    <div id="sidebar-div">
      <Logo logoid={'gpa-logo'}></Logo>
      <div id="sidebar-content">
        {/* Conversion Chart */}
        <p className="sidebar-title">Conversion Chart</p>
        <div id="conversion-chart">
          <div className="conversion-column">
            <div>
              <p>4.3</p>
              <p>4.0</p>
              <p>3.7</p>
              <p>3.3</p>
            </div>
            <div>
              <p className="gradient-color">A+</p>
              <p className="gradient-color">A</p>
              <p className="gradient-color">A-</p>
              <p className="gradient-color">B+</p>
            </div>
          </div>
          <div className="conversion-column">
            <div>
              <p>3.0</p>
              <p>2.7</p>
              <p>2.3</p>
              <p>2.0</p>
            </div>
            <div>
              <p className="gradient-color">B</p>
              <p className="gradient-color">B-</p>
              <p className="gradient-color">C+</p>
              <p className="gradient-color">C</p>
            </div>
          </div>
          <div className="conversion-column">
            <div>
              <p>1.7</p>
              <p>1.3</p>
              <p>1.0</p>
              <p>0.7</p>
            </div>
            <div>
              <p className="gradient-color">C-</p>
              <p className="gradient-color">D+</p>
              <p className="gradient-color">D</p>
              <p className="gradient-color">D-</p>
            </div>
          </div>
        </div>
        {/* Summary */}
        <p className="sidebar-title">Summary</p>
        <div id="summary-div">
          {props.semesters.map((semester, semesterId) => (
            <div key={semesterId}>
              <p>
                <span className="gradient-color sidebar-summary-title">
                  Semester {semesterId + 1}:
                </span>
                {calculateSemesterGpa(semester)}{' '}
                <span className="light-grey">/ 4.3</span>
              </p>
            </div>
          ))}
          <p>
            <span className="gradient-color sidebar-summary-title">
              Cumulative GPA:
            </span>
            {calculateTotalGpa(props.semesters)}{' '}
            <span className="light-grey">/ 4.3</span>
          </p>
        </div>
        <button>Download PDF</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    semesters: state.semesters,
  };
};

export default connect(mapStateToProps)(SideBar);
