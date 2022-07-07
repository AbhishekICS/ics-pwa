import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = JSON.parse(localStorage.getItem('user'));

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;