import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import '../styles/sideBar.css';

function SideBar(props) {
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

  let calculateSemesterGpa = (semester) => {
    semester = semester.filter((course) => course.included);
    let cumulativeSemesterCredits = semester.reduce(
      (accumulator, currentCourse) => accumulator + currentCourse.credits,
      0
    );
    let cumulativeSemesterGrades = semester
      .reduce(
        (accumulator, currentCourse) =>
          accumulator +
          currentCourse.credits * convertLetterGrade(currentCourse.letterGrade),
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
          (cumulativeGrades +=
            course.credits * convertLetterGrade(course.letterGrade))
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
          <hr />
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
