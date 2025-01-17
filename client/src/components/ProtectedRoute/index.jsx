import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom'; // For handling redirects
import {jwtDecode} from 'jwt-decode'; // For decoding JWT to check expiration

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = sessionStorage.getItem('jwt');

  // Function to check if the JWT is expired
  const isTokenExpired = () => {
    if (!token) return true; // If no token, consider it expired
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Get current time in seconds
      return decoded.exp < currentTime; // Compare expiry time
    } catch (e) {
      return true; // If there's an error decoding, treat the token as expired
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        token && !isTokenExpired() ? ( // If token exists and not expired
          <Component {...props} />
        ) : (
          <Navigate to="/login" /> // Redirect to login page if not authenticated
        )
      }
    />
  );
};

export default ProtectedRoute;
