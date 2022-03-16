import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS } from "./Actiontypes";

const initState = {
  token: "",
  isErr: false,
  isLoading: false,
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isErr: false,
        token: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isErr: true,
        token: "",
      };
    default:
      return state;
  }
};
