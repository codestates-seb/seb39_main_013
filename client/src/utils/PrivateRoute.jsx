/* eslint-disable react/prop-types */
import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const location = useLocation();

  if (location.pathname === "/signup" || location.pathname === "/login") {
    console.log("loginPage");
    return props.isLogin ? <Navigate to={"/"} /> : props.component;
  } else {
    return props.isLogin ? props.component : <Navigate to={"/login"} replace />;
  }
}
