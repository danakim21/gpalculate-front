import { ADD_SEMESTER, ADD_COURSE } from './semesterTypes';

const initialState = {
  semesters: [
    // semester 1
    [
      // first course
      {
        name: 'Data Structures',
        credits: 3,
        letterGrade: 'A+',
        numberGrade: 4.3,
        included: true,
      },
      // second course
      {
        name: 'Design Studio',
        credits: 4,
        letterGrade: 'B',
        numberGrade: 3.0,
        included: true,
      },
      // third course
      {
        name: 'Psychology 101',
        credits: 3,
        letterGrade: 'B-',
        numberGrade: 3.3,
        included: true,
      },
      // fourth course
      {
        name: 'Korean',
        credits: 4,
        letterGrade: 'A',
        numberGrade: 4.0,
        included: true,
      },
    ],
    // semester 2
    [
      // first course
      {
        name: 'aaa Structures',
        credits: 3,
        letterGrade: 'A+',
        numberGrade: 4.3,
        included: true,
      },
      // second course
      {
        name: 'bbb Studio',
        credits: 4,
        letterGrade: 'B',
        numberGrade: 3.0,
        included: true,
      },
      // third course
      {
        name: 'ccc 101',
        credits: 3,
        letterGrade: 'B-',
        numberGrade: 3.3,
        included: true,
      },
      // fourth course
      {
        name: 'ddd',
        credits: 4,
        letterGrade: 'A',
        numberGrade: 4.0,
        included: true,
      },
    ],
  ],
};

const semesterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEMESTER:
      return {};

    default:
      return state;
  }
};

export default semesterReducer;
