import {
  UPDATE_COURSE_NAME,
  UPDATE_COURSE_CREDITS,
  UPDATE_COURSE_LETTER_GRADE,
  UPDATE_COURSE_NUMBER_GRADE,
  UPDATE_COURSE_INCLUDED,
  DELETE_COURSE,
  DELETE_SEMESTER,
  TOGGLE_SEMESTER,
} from './semesterTypes';

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
        included: false,
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
        included: false,
      },
      // third course
      {
        name: 'ccc 101',
        credits: 3,
        letterGrade: 'B-',
        numberGrade: 3.3,
        included: false,
      },
      // fourth course
      {
        name: 'ddd',
        credits: 3,
        letterGrade: 'A',
        numberGrade: 4.0,
        included: true,
      },
    ],
  ],
  semestersShown: [true, false],
};

const semesterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Update Course Name
    case UPDATE_COURSE_NAME:
      return {
        ...state,
        semesters: state.semesters.map((semester, semesterId) => {
          if (semesterId === action.payload.semesterId) {
            return semester.map((course, courseId) => {
              if (courseId === action.payload.courseId) {
                return { ...course, name: action.payload.courseName };
              } else {
                return course;
              }
            });
          } else {
            return semester;
          }
        }),
      };

    // Update Course Credits
    case UPDATE_COURSE_CREDITS:
      return {
        ...state,
        semesters: state.semesters.map((semester, semesterId) => {
          if (semesterId === action.payload.semesterId) {
            return semester.map((course, courseId) => {
              if (courseId === action.payload.courseId) {
                return {
                  ...course,
                  credits: parseInt(action.payload.courseCredits),
                };
              } else {
                return course;
              }
            });
          } else {
            return semester;
          }
        }),
      };

    // Update Course Letter Grade
    case UPDATE_COURSE_LETTER_GRADE:
      return {
        ...state,
        semesters: state.semesters.map((semester, semesterId) => {
          if (semesterId === action.payload.semesterId) {
            return semester.map((course, courseId) => {
              if (courseId === action.payload.courseId) {
                return {
                  ...course,
                  letterGrade: action.payload.courseLetterGrade,
                };
              } else {
                return course;
              }
            });
          } else {
            return semester;
          }
        }),
      };

    // Update Course Number Grade
    case UPDATE_COURSE_NUMBER_GRADE:
      return {
        ...state,
        semesters: state.semesters.map((semester, semesterId) => {
          if (semesterId === action.payload.semesterId) {
            return semester.map((course, courseId) => {
              if (courseId === action.payload.courseId) {
                return {
                  ...course,
                  numberGrade: Number(action.payload.courseNumberGrade),
                };
              } else {
                return course;
              }
            });
          } else {
            return semester;
          }
        }),
      };

    // Update Course Included
    case UPDATE_COURSE_INCLUDED:
      return {
        ...state,
        semesters: state.semesters.map((semester, semesterId) => {
          if (semesterId === action.payload.semesterId) {
            return semester.map((course, courseId) => {
              if (courseId === action.payload.courseId) {
                return {
                  ...course,
                  included: action.payload.courseIncluded,
                };
              } else {
                return course;
              }
            });
          } else {
            return semester;
          }
        }),
      };

    // Delete Course
    case DELETE_COURSE:
      return {
        ...state,
        semesters: state.semesters.map((semester, semesterId) => {
          if (semesterId === action.payload.semesterId) {
            return semester.filter((course, courseId) => {
              return courseId !== action.payload.courseId;
            });
          } else {
            return semester;
          }
        }),
      };

    // Delete Semester
    case DELETE_SEMESTER:
      return {
        ...state,
        semesters: state.semesters.filter(
          (semester, semesterId) => semesterId !== action.payload.semesterId
        ),
        semestersShown: state.semestersShown.filter(
          (semester, semesterId) => semesterId !== action.payload.semesterId
        ),
      };

    // Toggle Semester
    case TOGGLE_SEMESTER:
      return {
        ...state,
        semestersShown: state.semestersShown.map((semester, semesterId) => {
          if (action.payload.semesterId === semesterId) {
            return !semester;
          }
          return semester;
        }),
      };

    // Default
    default:
      return state;
  }
};

export default semesterReducer;
