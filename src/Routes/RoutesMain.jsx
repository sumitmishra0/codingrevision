import { Route, Routes } from "react-router";
import App from "../App";
import { Login } from "../components/Login";
export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
