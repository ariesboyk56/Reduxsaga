import * as taskApis from "../apis/task";
import * as taskConstants from "../constants/task";

export const fitchListTask = () => {
  return{
    type: taskConstants.FETCH_TASK
  };
};

export const fitchListTaskSuccess = data => {
  return{
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const fitchListTaskFailed = error => {
  return{
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error
    }
  };
};

/**
 * B1: fitchListTaskRequest();
 * B2: Reset: state tasks => [];
 * B3: fitchListTaskSuccess (data response)
 */
// export const fitchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fitchListTask());
//     taskApis
//       .getList()
//       .then((resp) => {
//         const {data} = resp;
//         dispatch(fitchListTaskSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fitchListTaskFailed(error));
//       });
//   };
// };
