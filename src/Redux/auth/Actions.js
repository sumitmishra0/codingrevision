import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS } from "./Actiontypes";

export const sendCred = () => ({
  type: LOGIN_REQ
});
export const loginSucess = (payload) => ({
  type: LOGIN_SUCCESS, payload
});
export const loginFail = () => ({
  type: LOGIN_FAIL
});
