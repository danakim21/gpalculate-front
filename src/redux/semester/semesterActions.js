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

export const updateCourseName = (semesterId, courseId, courseName) => {
  return {
    type: UPDATE_COURSE_NAME,
    payload: {
      semesterId,
      courseId,
      courseName,
    },
  };
};

export const updateCourseCredits = (semesterId, courseId, courseCredits) => {
  return {
    type: UPDATE_COURSE_CREDITS,
    payload: {
      semesterId,
      courseId,
      courseCredits,
    },
  };
};

export const updateCourseLetterGrade = (
  semesterId,
  courseId,
  courseLetterGrade
) => {
  return {
    type: UPDATE_COURSE_LETTER_GRADE,
    payload: {
      semesterId,
      courseId,
      courseLetterGrade,
    },
  };
};

export const updateCourseNumberGrade = (
  semesterId,
  courseId,
  courseNumberGrade
) => {
  return {
    type: UPDATE_COURSE_NUMBER_GRADE,
    payload: {
      semesterId,
      courseId,
      courseNumberGrade,
    },
  };
};

export const updateCourseIncluded = (semesterId, courseId, courseIncluded) => {
  return {
    type: UPDATE_COURSE_INCLUDED,
    payload: {
      semesterId,
      courseId,
      courseIncluded,
    },
  };
};

export const deleteCourse = (semesterId, courseId) => {
  return {
    type: DELETE_COURSE,
    payload: {
      semesterId,
      courseId,
    },
  };
};

export const deleteSemester = (semesterId) => {
  return {
    type: DELETE_SEMESTER,
    payload: {
      semesterId,
    },
  };
};

export const toggleSemester = (semesterId) => {
  return {
    type: TOGGLE_SEMESTER,
    payload: {
      semesterId,
    },
  };
};
