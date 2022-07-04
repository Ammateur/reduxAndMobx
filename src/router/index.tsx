import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IndexPage from "pages/IndexPage/IndexPage";
import Login from "pages/Login/Login";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/index"} replace />} />
      <Route path={"/index"} element={<IndexPage />} />
      <Route path={"/login"} element={<Login />} />
    </Routes>
  );
};

export default RouterComponent;
