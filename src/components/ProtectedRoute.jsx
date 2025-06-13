

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AppContext);

  if (!token) {
    // 🔒 If not logged in, redirect to /login
    return <Navigate to="/login" replace />;
  }

  // ✅ If logged in, show the page
  return children;
};

export default ProtectedRoute;
