import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  
  const user = localStorage.getItem('username')
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
