import { call, fork, put, take } from "redux-saga/effects";
import { fitchListTaskFailed, fitchListTaskSuccess } from "../actions/task";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants";
import * as taskTypes from "../constants/task";

/**
 * B1: Dispatch action fitch task
 * B2: Call api
 * B2.1: Hiển thị thanh tiến trình (loading)
 * B3: Check status code
 * Nếu thành công...
 * Nếu thất bại...
 * B4: Tắt loading
 * B5: Thực thi các công việc tiếp theo
 */

function* watchFitchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fitchListTaskSuccess(data));
    } else {
      yield put(fitchListTaskFailed(data));
    }
  }
}

function* watchCreateTaskAction() {
  console.log("watchCreateTaskAction");
}

function* rootSaga() {
  yield fork(watchFitchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
