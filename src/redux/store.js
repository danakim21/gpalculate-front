import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import semesterReducer from './semester/semesterReducer';

const store = createStore(
  semesterReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
