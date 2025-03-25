import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import studentDetailsStore from "../../store/studentDetails";


function ProtectedRoute({children }) {
  const user = studentDetailsStore((state) => state.student);
  const isAuthenticated = user;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;