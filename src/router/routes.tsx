import React from "react";
import { Navigate } from "react-router-dom";
import IndexPage from "pages/IndexPage/IndexPage";
import Login from "pages/Login/Login";

const routes = [
  {
    path: "/",
    element: <Navigate to={"/index"} replace />,
  },
  {
    path: "/index",
    element: <IndexPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
export default routes;
