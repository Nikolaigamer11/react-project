// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ roles, redirectPath = '/SignUp' }) => {
  const { user, loading } = useAuth();

  // Show loading spinner while checking auth state
  if (loading) return <div>Loading...</div>;

  // Redirect if user is not logged in or doesn't have required roles
  if (!user || (roles && !roles.includes(user.role))) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
