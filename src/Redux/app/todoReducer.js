import {
  ADD_TODO,
  ADD_TODO_FAILURE,
  ADD_TODO_REQ,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQ,
  GET_TODO_SUCCESS,
} from "./ActionTypes";

const initState = {
  todos: [],
  isErr: false,
  isLoading: false,
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isErr: false,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isErr: true,
      };

    case GET_TODO_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isErr: false,
        todos: payload.map((el) => el.title).filter(el=>el!=undefined),
      };
    case GET_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isErr: true,
      };
    default:
      return state;
  }
};
