import { combineReducers } from 'redux';
import taskReducer from './task';
const myReducers = combineReducers ({
  task: taskReducer,
});

export default myReducers;