// ProtectedRoute.js
// ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({
  children,
  roles,
  restrictToUnauth,
  redirectPath = "/",
}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking auth state
  if (loading) return <div>Loading...</div>;

  // Restrict authenticated users from accessing certain routes
  if (restrictToUnauth && user) {
    return <Navigate to={redirectPath} state={{ from: location }} />;
  }

  // Restrict non-authenticated users from accessing certain routes
  if (!restrictToUnauth && (!user || (roles && !roles.includes(user.role)))) {
    return <Navigate to="/SignUp" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
