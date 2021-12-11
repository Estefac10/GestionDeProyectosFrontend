import React from 'react';
import { Outlet } from 'react-router';
import "../styles/auth.css"
const AuthLayout = () => {
  return (
    <div className='auth'>
          <div className="form">
          <Outlet />
          </div>     
    </div>
  );
};

export default AuthLayout;
