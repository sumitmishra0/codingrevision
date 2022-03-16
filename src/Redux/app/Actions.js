import axios from "axios";
import {
  ADD_TODO,
  ADD_TODO_FAILURE,
  ADD_TODO_REQ,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQ,
  GET_TODO_SUCCESS,
} from "./ActionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const addTodoReq = () => {
  return {
    type: ADD_TODO_REQ,
  };
};
export const addTodoSuccess = () => {
  return {
    type: ADD_TODO_SUCCESS,
  };
};
export const addTodoFailure = () => {
  return {
    type: ADD_TODO_FAILURE,
  };
};

export const getTodoReq = () => {
  return {
    type: GET_TODO_REQ,
  };
};
export const getTodoSuccess = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
};
export const getTodoFailure = () => {
  return {
    type: GET_TODO_FAILURE,
  };
};

export const postTodo = (todo) => {
  return (dispatch) => {
    dispatch(addTodoReq());
    axios({
      method: "post",
      url: "https://json-server-mocker-masai.herokuapp.com/tasks",
      data: {
        title: todo,
        status: false,
      },
    })
      .then(() => {
        dispatch(addTodoSuccess());
      })
      .catch((err) => {
        console.log(err);
        dispatch(addTodoFailure());
      });
  };
};

export const getLatest = () => {
  return (dispatch) => {
    dispatch(getTodoReq());
    axios
      .get("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((res) => {
        dispatch(getTodoSuccess(res.data));
      })
      .catch(() => {
        dispatch(getTodoFailure());
      });
  };
};
