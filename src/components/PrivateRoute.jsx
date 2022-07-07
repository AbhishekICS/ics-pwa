import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = JSON.parse(localStorage.getItem('user'));

  return isAuth?.googleId ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;