import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginFail, loginSucess, sendCred } from "../Redux/auth/Actions";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const state = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function handleForm(e) {
    e.preventDefault();
    dispatch(sendCred());
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: {
        email: user.email,
        password: user.password,
      },
    })
      .then((res) => {
        // console.log(res.data.token);
        dispatch(loginSucess(res.data.token));
        navigate("/");
      })
      .catch(() => {
        dispatch(loginFail());
      });
  }

  console.log(state);

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleForm}>
        <input
          type="email"
          placeholder="Please enter email here"
          onChange={(e) => {
            setUser((u) => ({ ...u, email: e.target.value }));
          }}
        />
        <input
          type="password"
          placeholder="Please enter password here"
          onChange={(e) => {
            setUser((u) => ({ ...u, password: e.target.value }));
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
