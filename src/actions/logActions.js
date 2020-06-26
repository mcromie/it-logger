import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

// export const getLogs = () => {
//     return async dispatch => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = res.json();
//         dispatch({
//             type:GET_LOGS,
//             payload: data
//         });
//     }
// }

//get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//ADD NEW LOG
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};
