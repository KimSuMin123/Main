import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Main from "./Main";
function Login() {
  let [loginId, setLoginId] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [savedLoginId, setSavedLoginId] = useState("");
  let [savedLoginPassword, setSavedLoginPassword] = useState("");

  return (
    <div>
      <div>
        ID :{" "}
        <input
          type="text"
          size={20}
          onChange={(e) => {
            setLoginId(e.target.value);
          }}
        />
      </div>
      <div>
        PW :{" "}
        <input
          type="password"
          size={20}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </div>

      <div>
        <button
          onClick={() => {
            window.localStorage.setItem("loginId", loginId);
            window.localStorage.setItem("loginPassword", loginPassword);

            setSavedLoginId(window.localStorage.getItem("loginId"));
            setSavedLoginPassword(window.localStorage.getItem("loginPassword"));
          }}
        >
          <NavLink to="/Main">로그인</NavLink>
        </button>
        <Routes>
          <Route path="/Main" element={<Main />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Login;
