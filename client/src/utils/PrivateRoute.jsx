/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const isLogin = useSelector((state) => state.user.isLogin);

  if (!isLogin) {
    return <Navigate to={"/login"} replace />;
  }

  return props.children;
}
