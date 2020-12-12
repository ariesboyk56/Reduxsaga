import { combineReducers } from "redux";
import taskReducer from "./task";
import uiReducer from "./ui";
const myReducers = combineReducers({
  task: taskReducer,
  ui: uiReducer,
});

export default myReducers;
