import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getLatest,
  getTodoFailure,
  getTodoReq,
  getTodoSuccess,
} from "../Redux/app/Actions";
import { loginFail } from "../Redux/auth/Actions";
import { TodoData } from "./TodoData";
import { TodoInput } from "./TodoInput";

export function Todo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  function handleLogin() {
    if (state.auth.token == "") {
      navigate("/login");
    } else dispatch(loginFail());
  }

  useEffect(() => {
    dispatch(getLatest());
  }, []);
  return (
    <div className="container">
      {console.log(state.app.todos)}
      <h1>Your Todo app</h1>
      <button onClick={handleLogin}>
        {state.auth.token != "" ? "Signout" : "Sigin"}
      </button>
      <TodoInput />
      {state.app.todos.map((el, index) => {
        return <TodoData key={index} data={el} />;
      })}
    </div>
  );
}
