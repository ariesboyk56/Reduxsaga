import { fork, take } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';

function* watchFitchListTaskAction(){
  yield take(taskTypes.FETCH_TASK);
}

function* watchCreateTaskAction(){

}

function* rootSaga() {
  yield fork(watchFitchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
