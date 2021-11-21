import React from 'react';

import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { Login } from '../screens/Login';
import { Dashboard } from '../screens/Dashboard';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/" element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      } />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

function RequireAuth({ children }) {
  const { signed } = useAuth();

  return signed === true 
    ? children 
    : <Navigate to="/login" replace />;
}
