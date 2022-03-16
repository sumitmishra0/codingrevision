import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addTodo,
  addTodoFailure,
  addTodoReq,
  addTodoSuccess,
  getLatest,
  getTodoFailure,
  getTodoReq,
  getTodoSuccess,
  postTodo,
} from "../Redux/app/Actions";

export function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  function handleAddTodo() {
    // alert("hi");
    dispatch(postTodo(todo));
    dispatch(getLatest());
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Todo here.."
        onChange={(e) => setTodo(e.target.value)}
      />{" "}
      <br />
      <button
        hidden={state.auth.token == "" ? true : false}
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}
