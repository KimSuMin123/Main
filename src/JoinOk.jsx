import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Login from "./Login";

function JoinOk() {
  const userName = window.localStorage.getItem("JoinName");
  return (
    <div>
      {userName}님 회원가입을 축하드립니다.
      <NavLink to="/login">로그인 하러 가기</NavLink>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
export default JoinOk;
